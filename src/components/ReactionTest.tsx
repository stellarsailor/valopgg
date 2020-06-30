import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Row, Col, BackTop, Typography, Spin } from 'antd';
import { StarFilled } from '@ant-design/icons';
import MetaTags from 'react-meta-tags';
import Adfit from './subcomponents/Adfit';
import { isMobile } from 'react-device-detect';
import axios from 'axios';
import { apiServer, staticServer } from '../serverUrl';
import roundToTwo from '../logics/roundToTwo';
import capitalizeFirstLetter from '../logics/capitalizeFirstLetter';
 
const { Paragraph } = Typography

const styles = {
    layers: {
        width: '100%', 
        position: 'absolute' as 'absolute',
        zIndex: 5
    },
    fireButton: {
        width: '100%', height: 120, 
        margin: '0 2rem',
        backgroundColor: 'brown', 
        display: 'flex',
        alignItems: 'center', justifyContent: 'center', 
        borderRadius: 10, 
        borderWidth: 1, borderColor: 'gray',
        marginTop: 5,
        touchAction: 'manipulation'
    },
    fireButtonDisabled: {
        width: '100%', height: 120, 
        margin: '0 2rem',
        backgroundColor: 'gray', 
        display: 'flex',
        alignItems: 'center', justifyContent: 'center', 
        borderRadius: 10, 
        borderWidth: 1, borderColor: 'gray',
        marginTop: 5,
    },
}

export default function ReactionTest() {

    const ref = useRef<HTMLHeadingElement>(null)
    const [ containerHeight, setContainerHeight ] = useState(0)

    useEffect(() => {
        axios.get(`${apiServer}/reaction/today`)
        .then(res => {
            if(res.data.length !== 0){
                setTodaysMinimum(res.data[0].todaymin)
            } else {
                setTodaysMinimum(0)
            }
        })
    },[])

    useEffect(() => {
        setContainerHeight(ref.current ? ref.current.offsetWidth : 0)
    }, [ref.current]);

    const [ todaysMinimum, setTodaysMinimum ] = useState(0)

    const [ stage, setStage ] = useState(0)
    const [ scores, setScores ] = useState<Array<number>>([])
    const [ invalidShots, setInvalidShots ] = useState(0)

    const [ testStarted, setTestStarted ] = useState(false)
    
    const [ targetAppear, setTargetAppear ] = useState(true)
    const [ targetAppearObject, setTargetAppearObject ] = useState();
    const [ targetAppearDate, setTargetAppearDate ] = useState(0)
    
    const [ testEnded, setTestEnded ] = useState(false)
    const [ reactionTime, setReactionTime ] = useState(0)

    const [ percentageLoading, setPercentageLoading ] = useState(false)
    const [ resultPercentage, setResultPercentage ] = useState(0)
    
    const arrAvg = (arr) => {
        const filtered = arr.filter(item => item !== 0);
        const sum = filtered.reduce((a, b) => a + b) 
        const avg = ( sum - Math.max(...filtered) - Math.min(...filtered) ) / (filtered.length - 2);
        return(avg)
    }

    let needClear;

    const startTargetAppear = () => {
        setTargetAppear(false)
        setTestStarted(true)
        const appearDuration = Math.round( ( Math.random() * 4000 ) + 2000 )
        // console.log(appearDuration + 'ms초 뒤에 요원 등장 예정')
        needClear = setTimeout(() => {
            setTargetAppear(true)
            let appear = Date.now()
            // console.log('타겟 요원 등장! 요원 등장 시간 :' + appear)
            setTargetAppearDate(appear)
        }, appearDuration);

        setTargetAppearObject(needClear)
    }

    const fireTarget = useCallback(() => {
        let fire = Date.now()
        // console.log('fire!! 발사 시간 : ' + fire )
        clearTimeout(targetAppearObject)
        
        let diff = fire - targetAppearDate
        // console.log(diff)

        if( diff < 100 || 10000 < diff) {
            diff = 0; 
            // console.log('현재 오류 샷 갯수 ' + invalidShots)
            if(invalidShots === 2){
                setInvalidShots(invalidShots + 1)
                return setTestEnded(true)
            } else {
                setInvalidShots(invalidShots + 1)
            }
        }
        setScores([...scores, diff])
        setStage(stage + 1)
        goNextStage()

    },[stage, scores, targetAppearDate, invalidShots, targetAppearObject])

    const goNextStage = useCallback(() => {

        clearTimeout(targetAppearObject)
        setTestStarted(false)
        setTargetAppear(false)
        setTargetAppearDate(0)
        setReactionTime(0)
        setTestEnded(false)

        if(stage === 6){ //7회측정시 6, 5회 측정시 4
            setTestEnded(true)
        } else {
            startTargetAppear()
        }
    },[stage, scores, targetAppearObject])

    const restart = useCallback(() => {
        // console.log('lets restart')
        resetAll()
        startTargetAppear()
    },[stage, scores, targetAppearObject])

    useEffect(() => {
        if(testEnded){
            if(invalidShots === 3){
                // console.log('test failed')
            } else {
                let result = Math.round(arrAvg(scores))
                setReactionTime(result)
                setPercentageLoading(true)
                if(result < 1000){
                    axios.get(`${apiServer}/reaction/${isMobile ? "mobile" : "desktop" }?time=${result}`)
                    .then(res => {
                        setResultPercentage(roundToTwo(res.data[0].percentage * 100))
                        setPercentageLoading(false)
                    })
                }
            }
        } 
    },[testEnded, scores, invalidShots])

    const resetAll = useCallback(() => {
        setStage(0)
        setScores([])
        setInvalidShots(0)

        clearTimeout(targetAppearObject)
        setTestStarted(false)
        setTargetAppear(false)
        setTargetAppearDate(0)

        setReactionTime(0)
        setTestEnded(false)

    },[stage, scores, targetAppearObject])

    const getTier = (percentage) => {
        let tier = percentage <= 0.03 ? "radiant" :
        percentage <= 0.05 ? "immortal3" :
        percentage <= 0.11 ? "immortal2" :
        percentage <= 0.2  ? "immortal1" :
        percentage <= 0.5  ? "diamond3" :
        percentage <= 1    ? "diamond2" :
        percentage <= 2    ? "diamond1" :
        percentage <= 3    ? "platinum3" :
        percentage <= 6    ? "platinum2" :
        percentage <= 10   ? "platinum1" :
        percentage <= 15   ? "gold3" :
        percentage <= 23   ? "gold2" :
        percentage <= 35   ? "gold1" :
        percentage <= 46   ? "silver3" :
        percentage <= 56   ? "silver2" :
        percentage <= 70   ? "silver1" :
        percentage <= 77   ? "bronze3" :
        percentage <= 84   ? "bronze2" :
        percentage <= 90   ? "bronze1" :
        percentage <= 95   ? "iron3" :
        percentage <= 98   ? "iron2" :
        "iron1"

        return tier
    }

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <BackTop />
                <MetaTags>              
                    <title>발로그 발로란트 FPS 반응속도 측정 테스트</title>
                    <meta name="description" content={`발로란트 게임을 옮겨놓은듯한 시뮬레이터로 본인의 FPS 반응속도 재능을 측정해보세요!`} />
                </MetaTags>
                <Row justify='center'>
                    { todaysMinimum === 0 ? null : 
                        <Col span={24} style={{ width: '100%'}}>
                            <div style={{margin: 10}}>
                                <StarFilled style={{color: 'gold', marginRight: '10px'}} />오늘의 베스트 기록 : {todaysMinimum}ms
                            </div>
                        </Col>
                    }
                    <Col xs={24} sm={24} md={15} lg={15} xl={15} >
                        <div style={{width: '100%', height: containerHeight}} ref={ref}>
                            {
                                testStarted && !testEnded ? 
                                null
                                :
                                <div style={{width: '100%', position: 'absolute', paddingBottom: '100%', zIndex: 10}}>
                                    <div style={{backgroundColor: 'black', position: 'absolute', width: '100%', height: '100%', opacity: 0.6}} />
                                </div>
                            }
                            
                            <img src={require('../images/reaction/reaction-1-background.png')} style={styles.layers} alt="Valorant background" />
                            { targetAppear ? <img src={require('../images/reaction/reaction-2-target.png')} style={styles.layers} alt="Valorant Target Jett" /> : null }
                            <img src={require('../images/reaction/reaction-3-wall.png')} style={styles.layers} alt="Covering Wall" />
                            <img src={require('../images/reaction/reaction-4-crosshair.png')} style={styles.layers} alt="Covering Corsshair" />

                            <img src={require('../images/mainLogo.png')} style={{width: '33%', alignSelf: 'flex-start', position: 'absolute', bottom: '15%', left: '10%', zIndex: 7 }} alt='valog.gg main logo' />

                            <div style={{width: '100%', height: containerHeight, position: 'absolute', zIndex: 15}}>
                                <div style={{position: 'absolute', left: '3%', top: '7%'}}>
                                    {scores.map((v, index) => (<div key={index} style={{fontWeight: 'bold'}} >Shot {index + 1} - {v === 0 ? <span style={{color: 'red'}}>X</span> : v + 'ms'}</div>))}
                                </div>
                                {
                                    testEnded ? 
                                    <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 10, padding: '1rem'}}>
                                        <div style={{fontWeight: 'bold', fontSize: '1.6rem', color: 'white'}}>
                                            종료
                                        </div>
                                        {
                                            invalidShots === 3 ? <div style={{fontSize: '1.2rem'}}>무효 샷 누적으로 테스트 실패...</div> :
                                            percentageLoading ? <Spin style={{margin: '1rem'}} /> :
                                            <div style={{color: 'white', fontSize: '1.1rem', textAlign: 'center'}}>
                                                <div>
                                                    티어 {isMobile ? "(모바일)" : "(데스크톱)"}
                                                </div>
                                                <img src={`${staticServer}/icons/${
                                                    getTier(resultPercentage)
                                                }.png`} style={{width: 80, height: 80}} />
                                                <div>
                                                    {capitalizeFirstLetter(getTier(resultPercentage))}
                                                </div>
                                                <div style={{color: 'white', fontWeight: 'bold', fontSize: '1.4rem'}}>
                                                    평균 반응 속도 : {reactionTime} ms
                                                </div>
                                                <div>
                                                    {isMobile ? "모바일 " : "데스크톱 " } 기준 상위 {resultPercentage}%
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    :
                                    testStarted ? 
                                        null
                                        :
                                        <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 10, textAlign: 'center', padding: '1rem', marginBottom: '1rem'}}>
                                            <div style={{fontWeight: 'bold', fontSize: '1.6rem', color: 'white'}}>
                                                설명        
                                            </div>
                                            <div style={{color: 'white', fontSize: '1.1rem', textAlign: 'left'}}>
                                                <div style={{margin: '10px 0'}}><span style={{fontWeight: 'bold', color: 'gold'}}>7초 이내 랜덤한 시간</span>에 적 요원이 등장하고 반응시간을 <span style={{fontWeight: 'bold', color: 'gold'}}>총 7회</span> 측정합니다.</div>
                                                <div style={{margin: '10px 0'}}>타겟 등장 전 발사 시 무효샷이되며 <span style={{fontWeight: 'bold', color: 'red'}}>무효샷 3개 도달 시</span> 실패합니다.</div>
                                                <div style={{margin: '10px 0'}}>최종 반응 속도는 <span style={{fontWeight: 'bold', color: 'gold'}}>최대/최소 값을 제외한 평균치</span>를 계산합니다.</div>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={9} lg={9} xl={9}>
                        <Row justify='center'>
                            {
                                isMobile ?
                                <>
                                <Adfit adUnit="DAN-1ibbgv1qub1pi" adWidth="320" adHeight="50" />
                                <a 
                                style={styles.fireButton} 
                                onTouchStart={
                                    testEnded ? 
                                        restart 
                                        : 
                                        testStarted ? 
                                            fireTarget : startTargetAppear
                                }>
                                    {
                                        testEnded ? 
                                            <span style={{color: 'white', fontSize: '1.4rem', fontWeight: 'bold'}}>다시하기</span>
                                            :
                                            testStarted ? 
                                                <img src={require('../images/reaction/fire.png')} style={{width: 50}} />
                                                :
                                                <div style={{color: 'white', fontSize: '1.4rem', fontWeight: 'bold'}}>시작하기 - 모바일</div>
                                    }
                                </a>
                                <Paragraph style={{color: 'white', fontSize: '1rem', textAlign: 'center', margin: '2rem 0'}} copyable={{ text: 'https://valog.gg/reaction' }}>친구에게 URL 공유</Paragraph>
                                </>
                                :
                                <>
                                <div style={{margin: '1rem 0'}}>
                                    <Adfit adUnit="DAN-rh893p7owr52" adWidth="300" adHeight="250" />
                                </div>
                                <a 
                                style={styles.fireButton} 
                                onMouseDown={
                                    testEnded ? 
                                        restart 
                                        : 
                                        testStarted ? 
                                            fireTarget : startTargetAppear
                                }>
                                    {
                                        testEnded ? 
                                            <span style={{color: 'white', fontSize: '1.4rem', fontWeight: 'bold'}}>다시하기</span>
                                            :
                                            testStarted ? 
                                                <img src={require('../images/reaction/fire.png')} style={{width: 50}} />
                                                :
                                                <div style={{color: 'white', fontSize: '1.4rem', fontWeight: 'bold'}}>시작하기</div>
                                    }
                                </a>
                                <Paragraph style={{color: 'white', fontSize: '1rem', textAlign: 'center', margin: '2rem 0'}} copyable={{ text: 'https://valog.gg/reaction' }}>친구에게 URL 공유</Paragraph>
                                </>
                            }
                            
                        </Row>
                    </Col>
                    <div style={{margin: '1rem 0', padding: '1rem', backgroundColor: 'rgb(32, 43, 67)'}}>
                        <div>
                            본 측정은 일명 '예측샷'을 방지하기 위해 여러번의 측정을 시행하며 최대값/최소값을 제외한 기록의 평균을 측정합니다. <span style={{fontWeight: 'bold', textDecorationLine: 'underline'}}>또한 100ms 미만의 샷은 예측샷으로 간주하여 무효샷 처리가 됩니다</span>(올림픽에서 규정하는 인간의 한계 반응속도).
                        </div>
                        <div style={{margin: '1rem 0'}}>데스크톱을 기준으로 맞추어져 있으며 모니터의 주사율, 모바일의 경우 기기 성능에 따라 일부 차이가 날 수 있습니다. 따라서 정확한 측정을 위해서는 데스크톱 이용을 권장드립니다(현재 누적된 데이터 통계 상 모바일 반응속도 - 100ms = 데스크톱 반응속도의 평균을 보여주고 있습니다. 표시되는 티어와 상위 퍼센티지는 데스크톱과 모바일이 분리되어 계산됩니다). </div>
                        {isMobile ? <div style={{margin: '1rem 0'}}>모바일의 경우 발사 버튼을 '터치'하는 순간 측정하므로 스크롤할때 발사 버튼을 터치하지않도록 주의해주세요!</div> : null}
                        <div style={{fontWeight: 'bold', margin: '1rem 0'}}>타 반응속도 측정 사이트와 차이가 존재 하는 이유? </div>
                        <div>빨간 전면 배경색이 초록 전면 배경색으로 바뀌는 것과 같이 크나큰 대조를 주는 것이 아니라 본 시뮬레이터는 비교적 작고 좁은 편의 시각적 차이를 얼마나 빨리 인식할 수 있는지를 테스트 하는것이기 때문에 어느정도 차이가 존재할 수 있습니다.</div>
                    </div>
                </Row>
            </Col>
        </Row>
    )
}

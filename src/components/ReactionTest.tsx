import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Row, Col, BackTop, Typography } from 'antd';
import MetaTags from 'react-meta-tags';
import Adfit from './subcomponents/Adfit';
import { isMobile } from 'react-device-detect';
 
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
        marginTop: 20,
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
        marginTop: 20,
    },
}

export default function ReactionTest() {

    const ref = useRef<HTMLHeadingElement>(null)
    const [ containerHeight, setContainerHeight ] = useState(0)

    useEffect(() => {
        setContainerHeight(ref.current ? ref.current.offsetWidth : 0)
    }, [ref.current]);

    const [ stage, setStage ] = useState(0)
    const [ scores, setScores ] = useState<Array<number>>([])
    const [ invalidShots, setInvalidShots ] = useState(0)

    const [ testStarted, setTestStarted ] = useState(false)
    
    const [ targetAppear, setTargetAppear ] = useState(true)
    const [ targetAppearObject, setTargetAppearObject ] = useState();
    const [ targetAppearDate, setTargetAppearDate ] = useState(0)
    
    const [ testEnded, setTestEnded ] = useState(false)
    const [ reactionTime, setReactionTime ] = useState(0)
    
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

        if(diff > 10000) {
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

        if(stage === 6){
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
                setReactionTime(Math.round(arrAvg(scores)))
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

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <BackTop />
                <MetaTags>              
                    <title>발옵지지 발로란트 FPS 반응속도 측정 테스트</title>
                    <meta name="description" content={`발로란트 게임을 옮겨놓은듯한 시뮬레이터로 본인의 FPS 반응속도 재능을 측정해보세요!`} />
                </MetaTags>
                <Row justify='center'>
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

                            <img src={require('../images/mainLogo.png')} style={{width: '33%', alignSelf: 'flex-start', position: 'absolute', bottom: '15%', left: '10%', zIndex: 7 }} alt='valop.gg main logo' />

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
                                            invalidShots === 3 ? <div style={{fontSize: '1.2rem'}}>무효 샷 3개로 테스트 실패...</div> :
                                            <>
                                            <div style={{color: 'white', fontWeight: 'bold', fontSize: '1.4rem'}}>
                                                평균 반응 속도 : {reactionTime} ms
                                            </div>
                                            <div style={{color: 'white', fontSize: '1.1rem', textAlign: 'center'}}>
                                                { reactionTime > 10000 ? null :
                                                    reactionTime < 150 ? "발로란트 프로에 도전하시는게 어때요?" 
                                                    : reactionTime < 200 ? "굉장히 빠른 반응 속도를 가지셨군요!" 
                                                    : reactionTime < 270 ? "평균 이상의 반응 속도를 가지셨군요!" 
                                                    : reactionTime < 360 ? "평균입니다."
                                                    : reactionTime < 500 ? "평균보다 느린 편이에요..." 
                                                    : "일부러 늦게 누르셨나요...? 조금만 더 분발해보세요!"}
                                            </div>
                                            </>
                                        }
                                        {/* <div style={{color: 'white', fontSize: '1.1rem'}}>
                                            {targetAppear === false ? "다시 시작하기 위해선 잠시만 기다려주세요." : null}
                                        </div> */}
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
                                <Adfit adUnit="DAN-qeexz0nlvvp2" adWidth="320" adHeight="50" />
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
                                <Paragraph style={{color: 'white', fontSize: '1rem', textAlign: 'center', margin: '2rem 0'}} copyable={{ text: 'https://valop.gg/reaction' }}>친구에게 URL 공유</Paragraph>
                                </>
                                :
                                <>
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
                                <Paragraph style={{color: 'white', fontSize: '1rem', textAlign: 'center', margin: '2rem 0'}} copyable={{ text: 'https://valop.gg/reaction' }}>친구에게 URL 공유</Paragraph>
                                <Adfit adUnit="DAN-u7razu6r6nn5" adWidth="300" adHeight="250" />
                                </>
                            }
                            
                        </Row>
                    </Col>
                    <div style={{margin: '1rem 0', padding: '1rem', backgroundColor: 'rgb(32, 43, 67)'}}>
                        <div style={{marginTop: '1rem'}}>본 측정은 데스크톱을 기준으로 맞추어져 있으며 모니터의 성능, 모바일의 경우 기기 성능에 따라 일부 차이가 날 수 있습니다.</div>
                        {isMobile ? <div style={{margin: '1rem 0'}}>모바일의 경우 발사 버튼을 '터치'하는 순간 측정하므로 스크롤할때 발사 버튼을 터치하지않도록 주의해주세요.</div> : null}
                        <div style={{fontWeight: 'bold', margin: '1rem 0'}}>타 반응속도 측정 사이트와 차이가 존재 하는 이유? </div>
                        <div>빨간 전면 배경색이 초록 전면 배경색으로 바뀌는 것과 같이 크나큰 대조를 주는 것이 아니라 본 시뮬레이터는 비교적 작고 좁은 편의 시각적 차이를 얼마나 빨리 인식할 수 있는지를 테스트 하는것이기 때문에 어느정도 차이가 존재할 수 있습니다.</div>
                    </div>
                </Row>
            </Col>
        </Row>
    )
}

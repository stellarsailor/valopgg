import React, { useState, useRef, useEffect } from 'react'
import { Row, Col, BackTop, Typography } from 'antd';
import MetaTags from 'react-meta-tags';
import Adfit from './subcomponents/Adfit';

const { Paragraph } = Typography

const styles = {
    layers: {
        width: '100%', 
        position: 'absolute' as 'absolute',
        zIndex: 5
    },
    fireButton: {
        width: '80%', height: 120, 
        backgroundColor: 'brown', 
        display: 'flex',
        alignItems: 'center', justifyContent: 'center', 
        borderRadius: 10, 
        borderWidth: 1, borderColor: 'gray',
        marginTop: 20,
    },
    fireButtonDisabled: {
        width: '80%', height: 120, 
        backgroundColor: 'gray', 
        display: 'flex',
        alignItems: 'center', justifyContent: 'center', 
        borderRadius: 10, 
        borderWidth: 1, borderColor: 'gray',
        marginTop: 20,
    },
}

export default function ReactionTest() {

    const ref = useRef<HTMLHeadingElement>(null);
    const [ containerHeight, setContainerHeight ] = useState(0)

    useEffect(() => {
        setContainerHeight(ref.current ? ref.current.offsetWidth : 0)
    }, [ref.current]);

    const [ testStarted, setTestStarted ] = useState(false)

    const [ targetAppear, setTargetAppear ] = useState(true)
    const [ targetAppearDate, setTargetAppearDate ] = useState(0)
    
    const [ reactionTime, setReactionTime ] = useState(0)
    const [ testEnded, setTestEnded ] = useState(false)

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
    }
    
    const fireTarget = () => {
        let fire = Date.now()
        // console.log('fire!! 발사 시간 : ' + fire )
        
        let diff = fire - targetAppearDate
        setReactionTime(diff)
        setTestEnded(true)
    }

    const restart = () => {
        clearTimeout(needClear)
        setTestStarted(false)
        setTargetAppear(false)
        setTargetAppearDate(0)
        setReactionTime(0)
        setTestEnded(false)

        startTargetAppear()
    }

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <BackTop />
                <MetaTags>              
                    <title>발옵지지 발로란트 FPS 반응속도 측정 테스트</title>
                    <meta name="description" content={`발로란트 게임을 옮겨놓은듯한 시뮬레이터로 본인의 FPS 반응속도 재능을 측정해보세요!`} />
                </MetaTags>
                { window.innerWidth < 576 ? <Adfit adUnit="DAN-qeexz0nlvvp2" adWidth="320" adHeight="50" /> : null }
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

                            <div style={{position: 'absolute', bottom: '20%', left: '10%', zIndex: 7}}>
                                <img src={require('../images/mainLogo.png')} style={{width: '40%', alignSelf: 'flex-start'}} alt='valop.gg main logo' />
                            </div>

                            <div style={{width: '100%', height: containerHeight, position: 'absolute', zIndex: 15}}>
                                {
                                    testEnded ? 
                                    <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 10, padding: '1rem'}}>
                                        <div style={{fontWeight: 'bold', fontSize: '1.6rem', color: 'white'}}>
                                            종료
                                        </div>
                                        <div style={{color: 'white', fontWeight: 'bold', fontSize: '1.4rem'}}>
                                            {reactionTime < 100000 ? '반응 속도 : ' + reactionTime + 'ms' : "너무 빨리 누르셨어요!"}
                                        </div>
                                        <div style={{color: 'white', fontSize: '1.1rem'}}>
                                            {targetAppear === false ? "다시 시작하기 위해선 잠시만 기다려주세요." : null}
                                        </div>
                                        <div style={{color: 'white', fontSize: '1.1rem', textAlign: 'center'}}>
                                            { reactionTime > 10000 ? null :
                                                reactionTime < 150 ? "발로란트 프로에 도전하시는게 어때요?" 
                                                : reactionTime < 230 ? "굉장히 빠른 반응 속도를 가지셨군요!" 
                                                : reactionTime < 320 ? "평균 이상의 반응 속도를 가지셨군요!" 
                                                : reactionTime < 420 ? "평균입니다."
                                                : reactionTime < 560 ? "평균보다 약간 느린 편이에요..." 
                                                : "일부러 늦게 누르셨나요...? 조금만 더 분발해보세요!"}
                                        </div>
                                    </div>
                                    :
                                    testStarted ? 
                                        null
                                        :
                                        <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', zIndex: 10, textAlign: 'center', padding: '1rem'}}>
                                            <div style={{fontWeight: 'bold', fontSize: '1.6rem', color: 'white'}}>
                                                설명        
                                            </div>
                                            <div style={{color: 'white', fontSize: '1.2rem'}}>
                                                시작하기 버튼을 누르면 7초 이내 랜덤한 시간에 적 요원이 나타납니다. 
                                                적 요원이 나타나고 반응하기까지의 시간을 측정합니다.
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={9} lg={9} xl={9}>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center'}}>
                            <a 
                            style={
                                testEnded && !targetAppear ? 
                                    styles.fireButtonDisabled : styles.fireButton} 
                            onClick={
                                testEnded && targetAppear ? 
                                    restart 
                                    : 
                                    testStarted ? 
                                        fireTarget : startTargetAppear}>
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
                            { window.innerWidth < 576 ? null : <Adfit adUnit="DAN-u7razu6r6nn5" adWidth="300" adHeight="250" /> }
                        </div>
                    </Col>

                </Row>
            </Col>
        </Row>
    )
}

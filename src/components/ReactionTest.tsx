import React, { useState, useRef, useEffect } from 'react'
import { Row, Col, BackTop } from 'antd';

const styles = {
    layers: {
        width: '100%', 
        position: 'absolute' as 'absolute',
        zIndex: 5
    },
    startButton: {
        width: '70%', height: 40, 
        backgroundColor: 'dodgerblue', 
        alignItems: 'center', justifyContent: 'center', 
        borderRadius: 10, 
        borderWidth: 1, borderColor: 'gray',
        marginTop: 20,
        zIndex: 10
    },
    startButtonDisabled: {
        width: '70%', height: 40, 
        backgroundColor: 'gray', 
        alignItems: 'center', justifyContent: 'center', 
        borderRadius: 10, 
        borderWidth: 1, borderColor: 'gray',
        marginTop: 20,
        zIndex: 10
    },
    fireButton: {
        width: '60%', height: 100, 
        backgroundColor: 'brown', 
        alignItems: 'center', justifyContent: 'center', 
        borderRadius: 10, 
        borderWidth: 1, borderColor: 'gray',
        marginTop: 20,
        marginRight: 20
    },
}

export default function ReactionTest({ navigation }) {

    const ref = useRef<HTMLHeadingElement>(null);
    const scrollRef: any = useRef(null)

    useEffect(() => {
        console.log('width', ref.current ? ref.current.offsetWidth : 0);
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
        console.log(appearDuration + 'ms초 뒤에 요원 등장 예정')
        needClear = setTimeout(() => {
            setTargetAppear(true)
            let appear = Date.now()
            console.log('타겟 요원 등장! 요원 등장 시간 :' + appear)
            setTargetAppearDate(appear)
        }, appearDuration);
    }
    
    const fireTarget = () => {
        let fire = Date.now()
        // ReactNativeHapticFeedback.trigger("impactHeavy", hapticOptions)
        console.log('fire!! 발사 시간 : ' + fire )
        
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
    }

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 1200}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <BackTop />
                <Row>
                    <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{width: '100%'}}>
                        {
                            testStarted && !testEnded ? 
                            null
                            :
                            <div style={{width: '100%', position: 'absolute', paddingBottom: '100%', zIndex: 10}}>
                                <div style={{backgroundColor: 'black', position: 'absolute', width: '100%', height: '100%', opacity: 0.6}} />
                            </div>
                        }
                        
                        <img src={require('../images/reaction/reaction-1-background.png')} style={styles.layers} />
                        { targetAppear ? <img src={require('../images/reaction/reaction-2-target.png')} style={styles.layers} /> : null }
                        <img src={require('../images/reaction/reaction-3-wall.png')} style={styles.layers} />
                        <img src={require('../images/reaction/reaction-4-crosshair.png')} style={styles.layers} />
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} xl={9}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div 
                            // disabled={testEnded} 
                            style={testStarted ? styles.fireButton : styles.fireButton} onClick={testStarted ? fireTarget : startTargetAppear}>
                                {
                                    testStarted ? 
                                    <img src={require('../images/reaction/fire.png')} style={{width: 50}} />
                                    :
                                    <div style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>시작하기</div>
                                }
                            </div>
                        </div>
                    </Col>
                    <div style={{fontWeight: 'bold', fontSize: 20, color: 'white', textAlign: 'center'}}>
                        설명        
                    </div>
                    <div style={{color: 'white', textAlign: 'center', fontSize: 16}}>
                        시작하기 버튼을 누르면 7초 이내 랜덤한 시간에 적 요원이 나타납니다. 적 요원이 나타나고 반응하기까지의 시간을 측정합니다.
                    </div>
                    {reactionTime}
                    {
                        testEnded ? 
                        <div style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', zIndex: 10}}>
                            {/* <div style={{backgroundColor: 'black', position: 'absolute', width: '100%', height: '100%', opacity: 0.6}} /> */}
                            <div style={{margin: "20 0", alignItems: 'center', width: '100%'}}>
                                <div style={{fontWeight: 'bold', fontSize: 20, color: 'white'}}>
                                    종료
                                </div>
                                <div style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
                                    {reactionTime < 100000 ? '반응 속도 : ' + reactionTime + 'ms' : "너무 빨리 누르셨어요!"}
                                </div>
                                <div style={{color: 'white'}}>
                                    {targetAppear === false ? "다시 시작하기 위해선 잠시만 기다려주세요." : null}
                                </div>
                                <div style={{color: 'white'}}>
                                    { reactionTime > 100000 ? null :
                                        reactionTime < 150 ? "발로란트 프로에 도전하시는게 어때요?" 
                                        : reactionTime < 230 ? "굉장히 빠른 반응 속도를 가지셨군요!" 
                                        : reactionTime < 320 ? "평균 이상의 반응 속도를 가지셨군요!" 
                                        : reactionTime < 420 ? "평균입니다."
                                        : reactionTime < 560 ? "평균보다 약간 느린 편이에요..." 
                                        : "일부러 늦게 누르셨나요...? 조금만 더 분발해보세요!"}
                                </div>
                                <div 
                                // disabled={!targetAppear} 
                                style={targetAppear ? styles.startButton : styles.startButtonDisabled} onClick={restart}>
                                    <div style={{color: 'white'}}>다시하기</div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                    }
                </Row>
            </Col>
        </Row>
    )
}

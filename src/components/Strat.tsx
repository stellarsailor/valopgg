import React, { useState, useCallback, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Row, Col, PageHeader, Button, Tooltip } from 'antd';
import { strat } from '../datas/strat'
import { agent } from '../datas/agent'
import { PlusOutlined, MinusOutlined, SearchOutlined } from '@ant-design/icons';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import mainLogo from '../images/mainLogo.png'

const Images = [
    require('../images/map/bind-illust.jpeg'),
    require('../images/map/haven-illust.jpeg'),
    require('../images/map/split-illust.jpeg')
];

const StratPane = styled.a`
    background-color: rgb(24, 35, 56); 
    padding: 1rem; 
    display: flex; 
    flex-direction: row;

    :hover{
        background-color: #273552; 
    }
`

export default function Strat() {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const mapArr = ["Bind", "Haven", "Split"]
    const agentArr = ['Breach', 'Brimstone', 'Cypher', 'Jett', 'Omen', 'Phoenix', 'Raze', 'Sage', 'Sova', 'Viper']
    const agent_koArr = ['브리치', '브림스톤', '사이퍼', '제트', '오멘', '피닉스', '레이즈', '세이지', '소바', '바이퍼']
    const difficultyArr = ['전체', '쉬움', '보통', '어려움'];

    const [ agentSelection, setAgentSelection ] = useState<number | string>('brimstone')
    const [ mapSelection, setMapSelection ] = useState<null | number | string>('bind')
    const [ sideSelection, setSideSelection ] = useState('attacker')
    const [ difficultySelection, setDifficultySelection ] = useState<string>('전체')

    const [ hoverImage, setHoverImage ] = useState('')

    const [ detailView, setDetailView ] = useState({
        id: -1,
        abilityIcon: -1,
        title: '',
        identifier: '',
        difficulty: '',
        type: '',
        method: []
    });

    const [ page, setPage ] = useState(0)

    const onChangeAgent = useCallback((agentNumber) => {
        setAgentSelection(agentNumber)
    },[])

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <Row justify='center' style={{fontSize: '1.4rem', marginTop: 15, marginBottom: 15, backgroundColor: '#202b43', padding: 10}} >
                    <Col xs={22} sm={22} md={22} lg={22} xl={12}>
                        {agentArr.map((v, index) => (
                            <Tooltip title={agent_koArr[index]} key={index}>
                                <a style={{marginRight: '1rem'}} onClick={() => {
                                    setAgentSelection(v.toLowerCase())
                                    setDetailView({ // 디테일뷰가 있었다면 초기화
                                        id: -1,
                                        abilityIcon: -1,
                                        title: '',
                                        identifier: '',
                                        difficulty: '',
                                        type: '',
                                        method: []
                                    })
                                }}>
                                    <img src={require(`../images/agents/${v.toLowerCase()}-headshot.png`)} style={agentSelection === v.toLowerCase() ? {width: '2.4rem', borderRadius: '2.4rem', border: '2px solid white'} : {width: '2.4rem', borderRadius: '2.4rem', border: '2px solid #202b43'}} />
                                </a>
                            </Tooltip>
                        ))}
                    </Col>
                    <Col xs={22} sm={22} md={22} lg={22} xl={6}>
                        {mapArr.map((v, index) => (
                            <a style={mapSelection === v.toLowerCase() ? {color: 'white', fontWeight: 'bold', marginRight: '1.8rem'} : {color: 'gray', marginRight: '1.8rem'} } key={index} onClick={() => setMapSelection(v.toLowerCase())}>
                                {v}
                            </a>
                        ))}
                    </Col>
                    <Col xs={22} sm={22} md={22} lg={22} xl={6}>
                        {difficultyArr.map((v, index) => (
                            <a style={difficultySelection === v ? {fontSize: '1.2rem', color: 'white', fontWeight: 'bold', marginRight: '1rem'} : {fontSize: '1.2rem', color: 'gray', marginRight: '1rem'} } key={index} onClick={() => setDifficultySelection(v)}>
                                {v}
                            </a>
                        ))}
                    </Col>
                </Row>
                    {
                        detailView.id === -1 ?
                    <Row>
                        <Col xs={24} sm={22} md={12} lg={12} xl={12} style={{backgroundColor: '#202b43'}}>
                            {
                                agentSelection === null ?
                                    <div>요원을 선택해주세요</div>
                                :
                                    strat[agentSelection][mapSelection].length === 0 ?
                                        <div style={{display: 'flex', justifyContent: 'center', height: 200}}>데이터를 준비 중 입니다.</div>
                                    :
                                        <div style={{padding: '1rem', width: '100%'}}>
                                            {strat[agentSelection][mapSelection].filter(v => {
                                                if(difficultySelection === '전체') return v
                                                else if( v.difficulty === difficultySelection ) return v
                                            }).map((v) => (
                                                <StratPane onClick={() => setDetailView(v)} onMouseEnter={() => setHoverImage(v.identifier)} onMouseLeave={() => setHoverImage('')}>
                                                    <img src={`https://valop-static.s3.ap-northeast-2.amazonaws.com/abilities/${agentSelection}${v.abilityIcon}.svg`} style={{width: '2rem'}} />
                                                    <div style={{marginLeft: 10}}>
                                                        <div style={{fontSize: '1rem', fontWeight: 'bold'}}>
                                                            {v.title}
                                                            <SearchOutlined style={{marginLeft: 10}} />
                                                        </div>
                                                    </div>
                                                </StratPane>
                                            ))}
                                        </div>
                            }
                        </Col>
                        <Col xs={24} sm={22} md={12} lg={12} xl={12} style={{backgroundColor: 'rgb(19, 28, 46)'}}>
                            {
                                mapSelection === null ?
                                <div>맵을 선택해주세요</div>
                                :
                                <TransformWrapper>
                                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                        <div>
                                            <div style={{padding: 10}}>
                                                <span style={{backgroundColor: '#202b43', fontSize: '1.4rem', padding: 5}} onClick={() => setSideSelection('attacker')}>
                                                    Attacker
                                                </span>
                                                <span style={{backgroundColor: '#202b43', fontSize: '1.4rem', padding: 5, marginRight: '1rem'}} onClick={() => setSideSelection('defender')}>
                                                    Defender
                                                </span>
                                                <PlusOutlined style={{backgroundColor: 'rgb(32, 43, 67)', color: 'white', fontSize: '1.4rem', padding: 5}} onClick={zoomIn} />
                                                <MinusOutlined style={{backgroundColor: 'rgb(32, 43, 67)', color: 'white', fontSize: '1.4rem', padding: 5}} onClick={zoomOut} />
                                            </div>
                                            <TransformComponent>
                                                <div>
                                                    <img src={require(`../images/minimap-preview.png`)} style={hoverImage === '' ? {display: 'none'} : {width: '100%', position: 'absolute', zIndex: 15}} />
                                                    <img src={require(`../images/map/${mapSelection}-labels-${sideSelection}.svg`)} style={{width: '100%', position: 'absolute', zIndex: 10}} />
                                                    <img src={require(`../images/map/${mapSelection}-layout-base.svg`)} style={sideSelection === "attacker" ? {width: '100%'} : {width: '100%', transform: 'rotate(180deg)'}} />
                                                </div>
                                            </TransformComponent>
                                        </div>
                                    )}
                                </TransformWrapper>
                            }
                        </Col>
                </Row>
                        :
                        <Row style={{backgroundColor: '#202b43'}}>
                            <PageHeader
                                style={{color: 'red', fontSize: '1.5rem', }}
                                onBack={() => setDetailView({
                                    id: -1,
                                    abilityIcon: -1,
                                    title: '',
                                    identifier: '',
                                    difficulty: '',
                                    type: '',
                                    method: []
                                })}
                                title={detailView.title}
                            />
                            {
                                detailView.method.map((v, index) => (
                                    <TransformWrapper>
                                    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                        <div style={{marginBottom: '4.5rem'}}>
                                            <div style={{position: 'absolute', zIndex: 20, margin: 10, right: 0}}>
                                                <PlusOutlined style={{backgroundColor: 'rgb(32, 43, 67)', color: 'white', fontSize: '1.4rem', padding: 5}} onClick={zoomIn} />
                                                <MinusOutlined style={{backgroundColor: 'rgb(32, 43, 67)', color: 'white', fontSize: '1.4rem', padding: 5}} onClick={zoomOut} />
                                            </div>
                                            <TransformComponent>
                                                <img src={mainLogo} style={{position: 'absolute', bottom: '10%', left: '3%', width: '30%'}} />
                                                <img src={`https://valop-static.s3.ap-northeast-2.amazonaws.com/strat/${agentSelection}/${mapSelection}/${detailView.identifier}${v}.png`} style={{width: '100%'}} key={index} />
                                            </TransformComponent>
                                        </div>
                                    )}
                                    </TransformWrapper>
                                ))
                            }
                        </Row>
                    }
            </Col>
        </Row>
    )
}
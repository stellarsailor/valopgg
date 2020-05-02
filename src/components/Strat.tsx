import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Row, Col, Radio, Button, Tooltip } from 'antd';
import { agent } from '../datas/agent'

const Images = [
    require('../images/map/bind-illust.jpeg'),
    require('../images/map/haven-illust.jpeg'),
    require('../images/map/split-illust.jpeg')
];

const TopText = styled.div`
    color: black;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: flex-top;
    font-size: 2rem;
    font-weight: bold;
`

const BottomText = styled.div`
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 1.5rem;
    font-weight: bold;
`

export default function Strat() {

    const mapArr = ["Bind", "Haven", "Split"]
    const agentArr = ['Breach', 'Brimstone', 'Cypher', 'Jett', 'Omen', 'Phoenix', 'Raze', 'Sage', 'Sova', 'Viper']
    const difficultyArr = ['전체', '쉬움', '보통', '어려움'];

    const [ agentSelection, setAgentSelection ] = useState<null | number | string>(null)
    const [ mapSelection, setMapSelection ] = useState<null | number | string>(null)
    const [ difficultySelection, setDifficultySelection ] = useState<string>('전체')

    const onChangeAgent = useCallback((agentNumber) => {
        setAgentSelection(agentNumber)
    },[])

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <Row justify='center' style={{fontSize: '1.4rem', marginTop: 15, marginBottom: 15, backgroundColor: '#202b43', padding: 10}} >
                    <Col xs={22} sm={22} md={22} lg={22} xl={6}>
                        {mapArr.map((v, index) => (
                            <a style={mapSelection === v.toLowerCase() ? {color: 'white', fontWeight: 'bold', marginRight: '1.8rem'} : {color: 'gray', marginRight: '1.8rem'} } key={index} onClick={() => setMapSelection(v.toLowerCase())}>
                                {v}
                            </a>
                        ))}
                    </Col>
                    <Col xs={22} sm={22} md={22} lg={22} xl={12}>
                        {agentArr.map((v, index) => (
                            <Tooltip title={v} key={index}>
                                <a style={{marginRight: '1rem'}} onClick={() => setAgentSelection(v.toLowerCase())}>
                                    <img src={require(`../images/agents/${v.toLowerCase()}-headshot.png`)} style={agentSelection === v.toLowerCase() ? {width: '2.4rem', borderRadius: '2.4rem', border: '2px solid white'} : {width: '2.4rem', borderRadius: '2.4rem', border: '2px solid #202b43'}} />
                                </a>
                            </Tooltip>
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
                {mapSelection} - {agentSelection} - {difficultySelection}
            </Col>
        </Row>
    )
}
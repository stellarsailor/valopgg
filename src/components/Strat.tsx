import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
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

    const [ agentSelection, setAgentSelection ] = useState<null | number>(null)
    const arr = ["Bind", "Haven", "Split"]

    const onChangeAgent = useCallback((agentNumber) => {
        setAgentSelection(agentNumber)
    },[])

    return(
        <>
            <Row justify="center" style={{marginTop: 15, marginBottom: 15}}>
                {agent.map((v) => (
                    <Col xs={4} sm={4} md={4} lg={2} xl={2} key={v.id} >
                        <img src={require(`../images/agents/${v.name.toLowerCase()}.png`)} style={{border: '1px solid gray', width: '100%'}} onClick={() => onChangeAgent(v.id)} />
                    </Col>  
                ))}
            </Row>
            <Row>
                {arr.map((v,index) => (
                    <Col xs={24} sm={24} md={12} lg={8} xl={8} style={{width: '100%', height: 120, backgroundColor: '#202b43', padding: 10, marginTop: 15}} key={index}>
                        <div style={{backgroundImage: `url(${Images[index]})`, width: "100%", height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 0}}>
                            <TopText>{v}</TopText>
                            <BottomText><div>Attacker</div> <div style={{marginLeft: 10, marginRight: 10}}>|</div> <div>Defender</div></BottomText>
                        </div>
                    </Col>
                ))}
            </Row>
        </>
    )
}
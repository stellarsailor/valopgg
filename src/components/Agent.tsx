import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Row, Col, Tooltip, BackTop } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import SkillCount from './subcomponents/SkillCount';
import { agent } from '../datas/agent'
import { strat } from '../datas/strat'

export default function Agent(props) {

    const qs: any = queryString.parse(props.location.search)
    let initialAgentNumber: null | number = null;

    if(Object.entries(qs).length === 0){
        initialAgentNumber = null
    } else {
        let selectedAgent = agent.filter(v => v.name.toLowerCase() === qs.name)
        initialAgentNumber = selectedAgent[0].id;
    }

    const arr = [0,1,2,3]
    const key = ['C', 'Q', 'E', 'X']
    const [ agentSelection, setAgentSelection ] = useState<null | number>(initialAgentNumber)
    const [ abilitySelection, setAbilitySelection ] = useState<number>(0)

    const onChangeAgent = useCallback((agentNumber) => {
        window.scrollTo(0, 0)
        setAgentSelection(agentNumber)
        setAbilitySelection(0)
    },[])

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <BackTop/>
                {
                    agentSelection === null ?
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{position: 'absolute', fontSize: '1.5rem'}}>정보를 확인할 요원을 선택해주세요.</div>
                        <div style={{position: 'absolute', width: '100%', backgroundColor: 'black', opacity: 0.3}}></div>
                        <img src={require('../images/official-background-wide-darken.jpg')} style={{width: '100%'}} />
                    </div>
                    :
                    null
                }
                <Row justify="center" style={{marginTop: 15, marginBottom: 15}}>
                    { agent.map((v, index) => (
                        <Col xs={24} sm={24} md={12} lg={8} xl={8} key={v.id}>
                            <div style={{position: 'relative', backgroundImage: 'linear-gradient(rgb(32, 43, 67), rgb(5,15,30))', borderRadius: 10, margin: '1rem', overflow: 'hidden'}}>
                                <Link to={`/agent/${v.name.toLowerCase()}`}>
                                    <div style={{fontSize: '1.8rem', fontWeight: 'bold', position: 'absolute', right: '5%', bottom: '5%', zIndex: 10}}>{v.name_ko}</div>
                                    <img src={require(`../images/agents/${v.name.toLowerCase()}.png`)} style={{width: '100%', height: 'auto', zIndex: 5, position: 'relative'}} />
                                    <div style={{fontSize: '4rem', fontWeight: 'bold', position: 'absolute', left: '5%', top: '-5%', zIndex: 0, opacity: 0.4, color: 'white'}}>{v.name}</div>
                                </Link>
                            </div>
                        </Col>  
                    ))}
                </Row>
            </Col>
        </Row>
    )
}
import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Row, Col, Tooltip } from 'antd';
import { agent } from '../datas/agent'
import SkillCount from './subcomponents/SkillCount';
import queryString from 'query-string'

const AgentPane = styled.div`
    background-color: rgb(32, 43, 67);
    border-radius: 20;
    width: 300;
    height: 300;

    :hover {
        background-color: blue;
    }
`

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
        setAgentSelection(agentNumber)
        setAbilitySelection(0)
    },[])

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                {
                    agentSelection === null ?
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{position: 'absolute', fontSize: '1.5rem'}}>정보를 확인할 요원을 선택해주세요.</div>
                        <div style={{position: 'absolute', width: '100%', backgroundColor: 'black', opacity: 0.3}}></div>
                        <img src={require('../images/official-background-wide-darken.png')} style={{width: '100%'}} />
                    </div>
                    :
                    null
                }
                <Row justify="center" style={{marginTop: 15, marginBottom: 15}}>
                    {
                        agentSelection === null ?
                            agent.map((v, index) => (
                                <Tooltip title={v.name_ko} key={index}>
                                    <Col xs={24} sm={24} md={12} lg={8} xl={8} key={v.id}>
                                        <a>
                                            <div style={{backgroundColor: 'rgb(32, 43, 67)', borderRadius: 10, margin: '1rem'}}>
                                                <img src={require(`../images/agents/${v.name.toLowerCase()}.png`)} onClick={() => onChangeAgent(v.id)} style={{width: '100%', height: 'auto'}} />
                                            </div>
                                        </a>
                                    </Col>  
                                </Tooltip>
                            ))
                        :
                            agent.map((v, index) => (
                                <Tooltip title={v.name_ko} key={index}>
                                    <a style={{marginRight: '1rem'}} onClick={() => onChangeAgent(v.id)}>
                                        <img src={require(`../images/agents/${v.name.toLowerCase()}-headshot.png`)} style={agentSelection === v.id ? {width: '4rem', borderRadius: '4rem', border: '2px solid white'} : {width: '4rem', borderRadius: '4rem', border: '2px solid #202b43'}} />
                                    </a>
                                </Tooltip>
                            ))
                    }
                </Row>
                {
                    agentSelection === null ?
                        null
                    :
                    <Row style={{backgroundColor: '#182338', borderRadius: 10, width: '100%'}} justify="center">
                        <Col style={{width: '100%', fontSize: '1.5rem', display: 'flex', justifyContent: 'center'}}>
                            { window.innerWidth < 768 ? agent[agentSelection].name_ko : null }
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={16} style={{padding: 20}}>
                            {/* <img src={`https://valop-static.s3.ap-northeast-2.amazonaws.com/abilities_gif/${agent[agentSelection].name.toLowerCase()}${abilitySelection}.gif`} style={{width: '100%', borderRadius: 10}} /> */}
                            <div style={{fontSize: '1.6rem', textAlign: 'center', marginBottom: '2rem'}}>"{agent[agentSelection].quote}"</div>
                            <Row style={{width: '100%', paddingLeft: '10%', paddingRight: '10%'}}>
                                {arr.map(v => (
                                    <Col span={6} key={v} onClick={() => setAbilitySelection(v)} style={{padding: 10}}> 
                                        <div style={{backgroundColor: '#202b43', borderRadius: 5, width: '2rem', display: 'flex', justifyContent: 'center', fontWeight: 'bold'}}>{key[v]}</div>
                                        <img src={`https://valop-static.s3.ap-northeast-2.amazonaws.com/abilities/${agent[agentSelection].name.toLowerCase() + v}.svg`} style={{width: '4rem'}} />
                                        <div style={{width: '100%'}}>
                                            <SkillCount count={agent[agentSelection].skill[v].count} selected={ abilitySelection === v ? true : false } />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <div style={{backgroundColor: '#202b43', padding: 20}}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>{agent[agentSelection].skill[abilitySelection].name}</div>
                                비용 : {agent[agentSelection].skill[abilitySelection].cost}
                                <div>{agent[agentSelection].skill[abilitySelection].desc}</div>
                            </div>
                        </Col>
                        <Col xs={0} sm={0} md={12} lg={12} xl={8} style={{width: '100%'}}>
                            <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <div style={{position: 'absolute', fontSize: '2.5rem', fontWeight: 'bold', bottom: '4rem', textAlign: 'center', marginRight: 10}}>{agent[agentSelection].name}</div>
                                <img src={`https://valop-static.s3.ap-northeast-2.amazonaws.com/agents/${agent[agentSelection].name.toLowerCase()}-standing.png`} style={{width: '100%'}} />
                            </div>
                        </Col>
                    </Row>
                }
            </Col>
        </Row>
    )
}
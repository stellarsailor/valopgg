import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Row, Col, Tooltip, Button } from 'antd';
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
                    {
                        agentSelection === null ?
                            agent.map((v, index) => (
                                <Col xs={24} sm={24} md={12} lg={8} xl={8} key={v.id}>
                                    <div style={{position: 'relative', backgroundImage: 'linear-gradient(rgb(32, 43, 67), rgb(5,15,30))', borderRadius: 10, margin: '1rem', overflow: 'hidden'}}>
                                        <a>
                                            <div style={{fontSize: '1.8rem', fontWeight: 'bold', position: 'absolute', right: '5%', bottom: '5%', zIndex: 10}}>{v.name_ko}</div>
                                            <img src={require(`../images/agents/${v.name.toLowerCase()}.png`)} onClick={() => onChangeAgent(v.id)} style={{width: '100%', height: 'auto', zIndex: 5, position: 'relative'}} />
                                            <div style={{fontSize: '4rem', fontWeight: 'bold', position: 'absolute', left: '5%', top: '-5%', zIndex: 0, opacity: 0.4, color: 'white'}}>{v.name}</div>
                                        </a>
                                    </div>
                                </Col>  
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
                            { window.innerWidth < 768 ? 
                            <div style={{fontSize: '1.6rem', textAlign: 'center'}}>
                                {agent[agentSelection].name_ko} <span style={{fontSize: '1rem'}}> / {agent[agentSelection].origin}</span>
                                <div style={{fontSize: '1.2rem'}}>{agent[agentSelection].type}</div>
                                <img src={`https://d3s0uoqa61ipmr.cloudfront.net/agents/${agent[agentSelection].name.toLowerCase()}-standing.png`} style={{width: '100%'}} />
                            </div>
                            : null }
                        </Col>
                        <Col xs={0} sm={0} md={12} lg={12} xl={8} style={{width: '100%'}}>
                            <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <div style={{position: 'absolute', fontSize: '2.5rem', fontWeight: 'bold', bottom: '4rem', textAlign: 'center', marginRight: 10}}>
                                    {agent[agentSelection].name} <span style={{fontSize: '1rem'}}> / {agent[agentSelection].origin}</span>
                                    <div style={{fontSize: '1rem'}}>
                                        {agent[agentSelection].type}
                                    </div>
                                </div>
                                <img src={`https://d3s0uoqa61ipmr.cloudfront.net/agents/${agent[agentSelection].name.toLowerCase()}-standing.png`} style={{width: '100%'}} />
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={16} style={{padding: 20}}>
                            {/* <img src={`https://valop-static.s3.ap-northeast-2.amazonaws.com/abilities_gif/${agent[agentSelection].name.toLowerCase()}${abilitySelection}.gif`} style={{width: '100%', borderRadius: 10}} /> */}
                            <div style={{fontSize: '1.6rem', textAlign: 'center', marginBottom: '2rem'}}>"{agent[agentSelection].quote}"</div>
                            <Row style={{width: '100%', paddingLeft: '10%', paddingRight: '10%'}}>
                                {arr.map(v => (
                                    <Col span={6} key={v} onClick={() => setAbilitySelection(v)} style={{padding: 10}}> 
                                        <div style={{backgroundColor: '#202b43', borderRadius: 5, width: '2rem', display: 'flex', justifyContent: 'center', fontWeight: 'bold'}}>{key[v]}</div>
                                        <img src={`https://d3s0uoqa61ipmr.cloudfront.net/abilities/${agent[agentSelection].name.toLowerCase() + v}.svg`} style={{width: '4rem'}} />
                                        <div style={{width: '100%'}}>
                                            <SkillCount count={agent[agentSelection].skill[v].count} selected={ abilitySelection === v ? true : false } />
                                        </div>
                                    </Col>
                                ))}
                            </Row>
                            <div style={{backgroundColor: '#202b43', padding: '1rem'}}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>{agent[agentSelection].skill[abilitySelection].name}</div>
                                <div style={{fontWeight: 'bold'}}>비용 : {agent[agentSelection].skill[abilitySelection].cost}</div>
                                <div>{agent[agentSelection].skill[abilitySelection].desc}</div>
                            </div>
                            <div style={{backgroundColor: '#202b43', margin: '1rem 0', padding: '1rem'}}>
                                <div style={{color: '#00ffae', fontWeight: 'bold'}}>아군 {agent[agentSelection].skill[3].name} 대사 : <span style={{color: 'white'}}>"{agent[agentSelection].ally_ult}"</span></div>
                                <div style={{color: '#ff324c', fontWeight: 'bold'}}>적군 {agent[agentSelection].skill[3].name} 대사 : <span style={{color: 'white'}}>"{agent[agentSelection].enemy_ult}"</span></div>
                            </div>
                            {
                                agentSelection !== 0 ?
                                <Link to={`/strat?name=${agent[agentSelection].name.toLowerCase()}`} 
                                style={{display: 'flex', flexDirection: 'row', padding: '1rem', alignItems: 'center', backgroundColor: '#202b43', margin: '1rem 0'}}>
                                    <img src={`https://d3s0uoqa61ipmr.cloudfront.net/agents/${agent[agentSelection].name.toLowerCase()}-headshot.png`} style={{width: '3rem', borderRadius: '3rem', border: '1px solid white'}} />
                                    <div style={{margin: '0 1rem'}}>
                                        <div style={{fontWeight: 'bold'}}>
                                            {agent[agentSelection].name_ko} 전략 메뉴얼 확인하기
                                        </div>
                                        <div style={{color: 'rgb(137, 160, 181)'}}>
                                            총 {strat[agent[agentSelection].name.toLowerCase()].bind.length + strat[agent[agentSelection].name.toLowerCase()].haven.length + strat[agent[agentSelection].name.toLowerCase()].split.length} 개의 팁
                                        </div>
                                    </div>
                                    <div style={{position: 'absolute', right: '10%'}}>
                                        <ArrowRightOutlined style={{fontSize: '1.2rem', fontWeight: 'bold'}} />
                                    </div>
                                </Link>
                                :
                                null // 브리치 준비중
                            }
                        </Col>
                        
                    </Row>
                }
            </Col>
        </Row>
    )
}
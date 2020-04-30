import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import { agent } from '../datas/agent'
import PageTitle from './subcomponents/PageTitle';
import ReactPlayer from 'react-player'
import SkillCount from './subcomponents/SkillCount';
import CredSVG from './subcomponents/CredSVG';

export default function Agent() {

    const arr = [0,1,2,3]
    const [ agentSelection, setAgentSelection ] = useState<null | number>(0)
    const [ abilitySelection, setAbilitySelection ] = useState<number>(0)

    const onChangeAgent = useCallback((agentNumber) => {
        setAgentSelection(agentNumber)
        setAbilitySelection(0)
    },[])

    return(
        <div>
            {
                agentSelection == null ?
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{position: 'absolute', fontSize: '1.5rem'}}>정보를 확인할 요원을 선택해주세요.</div>
                    <div style={{position: 'absolute', width: '100%', backgroundColor: 'black', opacity: 0.3}}></div>
                    <img src={require('../images/official-background-wide-darken.png')} style={{width: '100%'}} />
                </div>
                :
                null
            }
            <Row justify="center" style={{marginTop: 15, marginBottom: 15}}>
                {agent.map((v) => (
                    <Col xs={4} sm={4} md={4} lg={2} xl={2} key={v.id}>
                        <img src={require(`../images/agents/${v.name.toLowerCase()}.png`)} style={{border: '1px solid gray', width: '100%'}} onClick={() => onChangeAgent(v.id)} />
                    </Col>  
                ))}
            </Row>
            {
                agentSelection == null ?
                    null
                :
                <Row style={{backgroundColor: '#182338', borderRadius: 10, width: '100%'}} justify="center">
                    <Col style={{width: '100%', fontSize: '1.5rem', display: 'flex', justifyContent: 'center'}}>
                        { window.innerWidth < 768 ? agent[agentSelection].name_ko : null}
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} xl={16} style={{padding: 20}}>
                        <img src={require(`../images/abilities_gif/${agent[agentSelection].name.toLowerCase()}${abilitySelection}.gif`)} style={{width: '100%', borderRadius: 10}} />
                        <Row style={{width: '100%', paddingLeft: '10%', paddingRight: '10%'}}>
                            {arr.map(v => (
                                <Col span={6} key={v} onClick={() => setAbilitySelection(v)} style={{padding: 10}}> 
                                    <img src={require(`../images/abilities/${agent[agentSelection].name.toLowerCase()}${v}.svg`)} style={{width: '4rem'}} />
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
                            <div style={{position: 'absolute', fontSize: '1.6rem', top: '1.6rem', textAlign: 'center', marginRight: 10}}>"{agent[agentSelection].quote}"</div>
                            <div style={{position: 'absolute', fontSize: '2.5rem', bottom: '4rem', textAlign: 'center', marginRight: 10}}>{agent[agentSelection].name}</div>
                            <img src={require(`../images/agents/${agent[agentSelection].name.toLowerCase()}-standing.png`)} style={{width: '100%'}} />
                        </div>
                    </Col>
                </Row>
            }
        </div>
    )
}
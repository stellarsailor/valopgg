import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import { agent } from '../datas/agent'
import PageTitle from './subcomponents/PageTitle';
import ReactPlayer from 'react-player'
import SkillCount from './subcomponents/SkillCount';

const SkillDesc = styled.div`
    width: 80%;
    height: 300;
    background-color: black;

`

export default function Agent() {

    const [ agentSelection, setAgentSelection ] = useState<null | number>(null)
    const [ abilitySelection, setAbilitySelection ] = useState<number>(0)

    const onChangeAgent = useCallback((agentNumber) => {
        setAgentSelection(agentNumber)
        setAbilitySelection(0)
    },[])

    return(
        <>
            {/* <PageTitle title="요원" /> */}
            <Row justify="center" gutter={[20, 20]}>
                {agent.map((v) => (
                    <Col xs={5} sm={5} md={5} lg={2} xl={2} >
                        <img src={require(`../images/agents/${v.name.toLowerCase()}.png`)} style={{border: '1px solid gray'}} onClick={() => onChangeAgent(v.id)} />
                    </Col>  
                ))}
            </Row>
            {
                agentSelection == null ?
                    <div>
                        요원을 선택해주세요.
                    </div>
                :
                <div style={{backgroundColor: 'black'}}>
                    <Row style={{width: '100%'}} justify="space-between">
                        <Col style={{fontSize: '2rem'}}>
                            {agent[agentSelection].name_kr}
                        </Col>
                        <Col style={{fontSize: '1.5rem'}}>
                            " {agent[agentSelection].quote} "
                        </Col>
                    </Row>
                    <Row style={{width: '100%'}} justify="center">
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} >
                            <img src={require(`../images/abilities_gif/${agent[agentSelection].name.toLowerCase()}${abilitySelection}.gif`)} style={{width: '100%'}} />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{display: 'flex', justifyContent: 'center'}}>
                            <Row style={{width: '80%'}}>
                                <Col span={6}>
                                    <img src={require(`../images/abilities/${agent[agentSelection].name.toLowerCase()}${0}.svg`)} style={{width: '100%'}} onClick={() => setAbilitySelection(0)} />
                                    <SkillCount count={agent[agentSelection].skill[0].count} selected={ abilitySelection === 0 ? true : false } />
                                </Col>
                                <Col span={6}>
                                    <img src={require(`../images/abilities/${agent[agentSelection].name.toLowerCase()}${1}.svg`)} style={{width: '100%'}} onClick={() => setAbilitySelection(1)} />
                                    <SkillCount count={agent[agentSelection].skill[1].count} selected={ abilitySelection === 1 ? true : false } />
                                </Col>
                                <Col span={6}>
                                    <img src={require(`../images/abilities/${agent[agentSelection].name.toLowerCase()}${2}.svg`)} style={{width: '100%'}} onClick={() => setAbilitySelection(2)} />
                                    <SkillCount count={agent[agentSelection].skill[2].count} selected={ abilitySelection === 2 ? true : false } />
                                </Col>
                                <Col span={6}>
                                    <img src={require(`../images/abilities/${agent[agentSelection].name.toLowerCase()}${3}.svg`)} style={{width: '100%'}} onClick={() => setAbilitySelection(3)} />
                                    <SkillCount count={agent[agentSelection].skill[3].count} selected={ abilitySelection === 3 ? true : false } />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            }
        </>
    )
}
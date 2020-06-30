import React, { useState, useEffect } from 'react'
import MetaTags from 'react-meta-tags';
// import styled from 'styled-components'
import { Row, Col, Tooltip, BackTop } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { Element , scroller } from 'react-scroll'
import ReactMarkdown from 'react-markdown';
import { staticServer } from '../serverUrl'

import SkillCount from './subcomponents/SkillCount';
import { agent } from '../datas/agent'
import { strat } from '../datas/strat'
import AdSense from 'react-adsense';
import Adfit from './subcomponents/Adfit';
import numberOfStrats from '../logics/numberOfStrats';
import { dynamicSort } from '../logics/dynamicSort';
import SideAds from './subcomponents/SideAds';
import Adsense from './subcomponents/Adsense';
import { isMobile } from 'react-device-detect';

export default function AgentDetail(props) {

    const agentName = props.match.params.agentName;
    let selectedAgent = agent.filter(v => v.name.toLowerCase() === agentName)
    let agentSelection = selectedAgent[0].id;

    const arr = [0,1,2,3]
    const key = ['C', 'Q', 'E', 'X']

    // const [ agentSelection, setAgentSelection ] = useState<null | number>(initialAgentNumber)
    const [ abilitySelection, setAbilitySelection ] = useState<number>(0)

    useEffect(() => {
        agentScroll()
    },[])

    const agentScroll = () => {
        if(window.innerWidth < 576){
            scroller.scrollTo('scroll-to-element', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            })
        } else {
            window.scrollTo(0, 0)
        }
    }

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 1200}} >
            <SideAds thicc={true} />
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <BackTop/>
                <MetaTags>
                    <title>{selectedAgent[0].name_ko} 요원 정보, 스킬, 플레이 가이드, 맵 별 공략, 궁극기 대사</title>
                    <meta name="description" content={`${selectedAgent[0].name_ko} 요원의 스킬 및 정보, 플레이 가이드, 맵 별 공략, 궁극기 대사 등을 확인가능합니다.`} />
                </MetaTags>
                <Row justify="center" style={{marginTop: 15, marginBottom: 15}}>
                    { agent.slice(0).sort(dynamicSort('name')).map((v, index) => (
                        <Tooltip title={v.name_ko} key={index}>
                            <Link to ={`/agent/${v.name.toLowerCase()}`} style={{margin: '0 0.7rem'}} onClick={() => agentScroll()}>
                                <img src={require(`../images/agents/${v.name.toLowerCase()}-headshot.png`)} style={agentSelection === v.id ? {width: '4rem', borderRadius: '4rem', border: `3px solid ${v.signature_color}`} : {width: '4rem', borderRadius: '4rem', border: '3px solid #202b43'}} alt="Valorant agent select button" />
                            </Link>
                        </Tooltip>
                    ))}
                </Row>
                <Element name="scroll-to-element">
                    <Row style={{backgroundColor: '#182338', borderRadius: 10, width: '100%'}} justify="center">
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} style={{width: '100%'}}>
                            <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center'}}>
                                <div style={{position: 'absolute', zIndex: 20, fontSize: '2.5rem', fontWeight: 'bold', bottom: '3rem', textAlign: 'center', marginRight: 10}}>
                                    {agent[agentSelection].name} <span style={{fontSize: '1rem'}}> / {agent[agentSelection].origin}</span>
                                    <div style={{fontSize: '1rem'}}>
                                        {agent[agentSelection].type}
                                    </div>
                                </div>
                                <img src={`${staticServer}/agents/${agentName}-standing.png`} style={{width: '80%', position: 'absolute', bottom: '1rem'}} alt="Valorant agent standing full shot" />
                                <img src={require('../images/agent-stage.png')} style={{width: '100%', }} />
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={16} style={{padding: '0 1rem'}}>
                            {/* <img src={`https://valop-static.s3.ap-northeast-2.amazonaws.com/abilities_gif/${agent[agentSelection].name.toLowerCase()}${abilitySelection}.gif`} style={{width: '100%', borderRadius: 10}} /> */}
                            <div style={{fontSize: '1.6rem', textAlign: 'center', margin: '1rem 0'}}>"{agent[agentSelection].quote}"</div>
                            <Row style={{width: '100%', paddingLeft: '10%', paddingRight: '10%'}}>
                                {arr.map(v => (
                                    <Col span={6} key={v} onClick={() => setAbilitySelection(v)} style={{padding: 10}}> 
                                        <div style={{backgroundColor: '#202b43', borderRadius: 5, width: '2rem', display: 'flex', justifyContent: 'center', fontWeight: 'bold'}}>{key[v]}</div>
                                        <a style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                            <img src={`${staticServer}/abilities/${agentName}_${key[v]}.png`} style={{width: '3rem', margin: '0.5rem 0'}} alt='Valorant agent skill icon' />
                                            <SkillCount count={agent[agentSelection].skill[v].count} selected={ abilitySelection === v ? true : false } />
                                        </a>
                                    </Col>
                                ))}
                            </Row>
                            
                            <div style={{backgroundColor: '#202b43', padding: '1rem', marginBottom: '1rem'}}>
                                <div style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>{agent[agentSelection].skill[abilitySelection].name}</div>
                                <div style={{fontWeight: 'bold', fontSize: '1.1rem'}}>비용 : {agent[agentSelection].skill[abilitySelection].cost}</div>
                                <div>{agent[agentSelection].skill[abilitySelection].desc}</div>
                            </div>
                            <div style={{backgroundColor: '#202b43', marginBottom: '1rem', padding: '1rem', display: 'flex', flexDirection: 'row'}}>
                                <img src={require(`../images/agents/${agentName}-headshot.png`)} style={{width: '3rem', height: '3rem', borderRadius: '3rem', border: `3px solid ${agent[agentSelection].signature_color}`}} alt='agent headshot' />
                                <div style={{margin: '0 1rem'}}>
                                    <div style={{color: '#00ffae', fontWeight: 'bold'}}>아군 {agent[agentSelection].skill[3].name} 대사 : <span style={{color: 'white'}}>"{agent[agentSelection].ally_ult}"</span></div>
                                    <div style={{color: '#ff324c', fontWeight: 'bold'}}>적군 {agent[agentSelection].skill[3].name} 대사 : <span style={{color: 'white'}}>"{agent[agentSelection].enemy_ult}"</span></div>
                                </div>
                            </div>
                            {/* <Link to={`/strat?name=${agent[agentSelection].name.toLowerCase()}`} 
                            style={{display: 'flex', flexDirection: 'row', padding: '1rem', alignItems: 'center', backgroundColor: '#202b43', marginTop: '1rem', marginBottom: '1rem'}}>
                                <img src={require(`../images/agents/${agentName}-headshot.png`)} style={{width: '3rem', borderRadius: '3rem', border: `3px solid ${agent[agentSelection].signature_color}`}} alt='agent headshot' />
                                <div style={{margin: '0 1rem'}}>
                                    <div style={{fontWeight: 'bold'}}>
                                        {agent[agentSelection].name_ko} 전략 메뉴얼 확인하기
                                    </div>
                                    <div style={{color: 'rgb(137, 160, 181)'}}>
                                        총 {numberOfStrats(agentSelection)} 개의 팁
                                    </div>
                                </div>
                                <div style={{position: 'absolute', right: '10%'}}>
                                    <ArrowRightOutlined style={{fontSize: '1.2rem', fontWeight: 'bold'}} />
                                </div>
                            </Link> */}
                            <Adfit adUnit="DAN-qhq3i0n8v392" adWidth="320" adHeight="100" />
                            {/* { isMobile ? <Adsense type="mobilewide" /> : <Adsense type="pcwide" />} */}
                        </Col>
                    <div style={{backgroundColor: '#202b43', padding: '1rem', margin: '1rem'}}>
                        <div style={{fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem'}}>
                            플레이 가이드
                        </div>
                        <div>
                            <ReactMarkdown source={agent[agentSelection].inline_guide} escapeHtml={false} />
                        </div>
                    </div>
                    </Row>
                </Element>
            </Col>
            <SideAds />
        </Row>
    )
}
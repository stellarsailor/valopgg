import React, { useState, useEffect } from 'react'
import MetaTags from 'react-meta-tags';
import styled from 'styled-components'
import { Row, Col, BackTop, Button, Alert, Input, Rate } from 'antd';
import { Link } from 'react-router-dom'
import PlayerTabRender from './PlayerTabRender';
import PlayerMatchHistoryRender from './PlayerMatchHistoryRender';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { StarOutlined, StarFilled } from '@ant-design/icons';

export default function Player(props) {
    
        const [ userName, setUserName ] = useState('')
        const [ selectedTab, setSelectedTab ] = useState(0)

    useEffect(() => {
        const userInput = props.match.params.userName
        setUserName(userInput)
        fetchPlayerData(userInput)
    },[props.match.params.userName])

    useEffect(() => {
        if(props.match.params.subMenu === undefined) setSelectedTab(0) 
        else if (props.match.params.subMenu === 'agents') setSelectedTab(1)
        else setSelectedTab(2)
    },[props.match.params.subMenu])

    const fetchPlayerData = (userInput) => {
        console.log(userInput + '의 정보 불러오기')
    }

    return (
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} key={props.match.params.userName} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <BackTop/>
                <MetaTags>
                    <title>{userName} 프로필 정보</title>
                    <meta name="description" content={`${userName} 프로필 정보 확인.`} />
                </MetaTags>

                <Row style={{borderRadius: 10, width: '100%', margin: '1rem 0'}}>
                    {/* <Col xs={0} sm={0} md={0} lg={8} xl={6}>
                        <img src="https://valorantlocker.com/wp-content/uploads/Valorant-Jett-Card-player-card.png" style={{width: '100%'}} />
                    </Col> */}
                    <div style={{width: '100%', backgroundColor: 'rgb(32, 43, 67)'}}>
                        <div style={{display: 'flex', flexDirection: 'row'}}>
                            <img src="https://valorantlocker.com/wp-content/uploads/Valorant-Jett-Card-player-card.png" style={{width: 50}} />
                            <span style={{fontWeight: 'bold', fontSize: '1.8rem'}}>
                                {userName} <StarOutlined style={{color: 'gold', fontSize: '1.8rem'}} /> <StarFilled style={{color: 'gold', fontSize: '1.8rem'}} /> 
                            </span>
                            <div>
                                <Button type="primary">전적갱신</Button>
                                <div style={{fontSize: '0.8rem'}}>
                                    최근 업데이트: 1시간 전
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{width: '100%', backgroundColor: '#191919', display: 'flex', flexDirection: 'row'}}>
                        <Link to={`/player/${userName}`} >
                            <PlayerTabRender tabName="종합" tabNumber={0} activated={selectedTab} />
                        </Link>
                        <Link to={`/player/${userName}/agents`} >
                            <PlayerTabRender tabName="요원 정보" tabNumber={1} activated={selectedTab} />
                        </Link>
                    </div>
                    {
                        selectedTab === 0 ?
                        <Row style={{width:'100%'}}>
                            <Col xs={24} sm={8} md={8} lg={8} xl={8} style={{backgroundColor: 'rgb(32, 43, 67)', width: '100%', height: 300, marginTop: '0.7rem'}} >
                                각종 통계 정보 - 티어 /
                                시즌별 요원 스탯 / 최근 같이한 플레이어 및 승률
                            </Col>
                            <Col xs={24} sm={16} md={16} lg={16} xl={16} style={{marginTop: '0.7rem'}}>
                                <Row style={{width: '100%', backgroundColor: 'rgb(32, 43, 67)'}}>
                                    <Col xs={24} sm={24} md={24} lg={24} xl={24} >
                                        전체 랭크 노말
                                    </Col>
                                    <Col span={12} >
                                        <Row style={{width: '100%'}}>
                                            <Col span={12} >
                                                <div style={{color: '#666'}}>
                                                    30전 10승 20패
                                                </div>
                                                <div style={{width: '50%'}}>
                                                    <CircularProgressbarWithChildren value={66} strokeWidth={12}
                                                    styles={buildStyles({
                                                        strokeLinecap: "butt",
                                                        pathColor: "#e24c4e",
                                                        trailColor: "#5bb09f"

                                                    })}>
                                                        <div style={{fontSize: '1rem', color: '#666'}}>
                                                            <strong>33%</strong>
                                                        </div>
                                                    </CircularProgressbarWithChildren>
                                                </div>
                                            </Col>
                                            <Col span={12} >
                                                <div style={{color: '#666'}}>
                                                    8.1 / 5.6 / 13.1 
                                                </div>
                                                <div style={{color: '#666'}}>
                                                    평균 KDA 4.23
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={12} style={{flexDirection: 'column'}}>
                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            <img src={require(`../images/agents/sova-headshot.png`)} style={{width: '2rem', height: '2rem', borderRadius: '2rem', border: '2px solid white'}} alt="Valorant agent select button" />
                                            <div>
                                                <div>
                                                    소바
                                                </div>
                                                <div>
                                                    31%(4승 9패)
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            <img src={require(`../images/agents/sova-headshot.png`)} style={{width: '2rem', height: '2rem', borderRadius: '2rem', border: '2px solid white'}} alt="Valorant agent select button" />
                                            <div>
                                                <div>
                                                    소바
                                                </div>
                                                <div>
                                                    31%(4승 9패)
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{display: 'flex', flexDirection: 'row'}}>
                                            <img src={require(`../images/agents/sova-headshot.png`)} style={{width: '2rem', height: '2rem', borderRadius: '2rem', border: '2px solid white'}} alt="Valorant agent select button" />
                                            <div>
                                                <div>
                                                    소바
                                                </div>
                                                <div>
                                                    31%(4승 9패)
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>

                                <div style={ window.innerWidth < 576 ? {backgroundColor: 'rgb(32, 43, 67)'} : {backgroundColor: 'rgb(32, 43, 67)', padding: '0 0.7rem'}}>
                                    <PlayerMatchHistoryRender type={"rank"} result={"victory"} kda={'14/6/2'} score={'5294'} rounds={'13-2'} agentName={"sova"} mapName={'haven'} />
                                    <PlayerMatchHistoryRender type={"rank"} result={"defeat"} kda={'1/10/5'} score={'1536'} rounds={'5-13'} agentName={"sage"} mapName={'split'} />
                                    <PlayerMatchHistoryRender type={"rank"} result={"victory"} kda={'8/7/1'} score={'4392'} rounds={'13-9'} agentName={"jett"} mapName={'haven'} />
                                    <PlayerMatchHistoryRender type={"rank"} result={"victory"} kda={'14/6/2'} score={'5294'} rounds={'13-2'} agentName={"sova"} mapName={'haven'} />
                                </div>

                                <div style={{margin: '0.7rem 0',backgroundColor: 'rgb(32, 43, 67)', padding: '1rem', width: '100%', display: 'flex', justifyContent: 'center'}} onClick={() => console.log('fetch more')}>
                                    더보기
                                </div>
                            </Col>
                        </Row>
                        :
                        null
                    }
                </Row>
            </Col>
        </Row>
    )
}
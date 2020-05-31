import React, { useState, useEffect } from 'react'
import MetaTags from 'react-meta-tags';
import styled from 'styled-components'
import { Row, Col, BackTop, Button, Alert, Input } from 'antd';
import { Link } from 'react-router-dom'
import PlayerTabRender from './subcomponents/PlayerTabRender';
import PlayerMatchHistoryRender from './subcomponents/PlayerMatchHistoryRender';

export default function Player(props) {

    const [ userName, setUserName ] = useState('')
    const [ selectedTab, setSelectedTab ] = useState(0)

    useEffect(() => {
        setUserName(props.match.params.userName)

        console.log(props.match.params.subMenu)
        if(props.match.params.subMenu === undefined) setSelectedTab(0) 
        else if (props.match.params.subMenu === 'matches') setSelectedTab(1)
        else setSelectedTab(2)
    },[])

    return (
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <BackTop/>
                <MetaTags>
                    <title>{userName} 프로필 정보</title>
                    <meta name="description" content={`${userName} 프로필 정보 확인.`} />
                </MetaTags>
                <Row style={{borderRadius: 10, width: '100%', margin: '1rem 0'}}>
                    <Col xs={24} sm={22} md={20} lg={8} xl={6}>
                        <img src="https://valorantlocker.com/wp-content/uploads/Valorant-Jett-Card-player-card.png" style={{width: '100%', height: 200}} />
                    </Col>
                    <Col xs={24} sm={22} md={20} lg={16} xl={18} style={{padding: '1rem', backgroundColor: '#182338'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <span style={{fontWeight: 'bold', fontSize: '1.8rem'}}>
                                {userName}
                            </span>
                            <Button>즐겨찾기 🌟</Button>
                        </div>
                        <Button type="primary">전적갱신</Button>
                        <div style={{fontSize: '0.8rem'}}>
                            최근 업데이트: 1시간 전
                        </div>
                    </Col>
                    <div style={{width: '100%', backgroundColor: '#191919', display: 'flex', flexDirection: 'row'}}>
                        <Link to={`/player/hime`} >
                            <PlayerTabRender tabName="종합" tabNumber={0} activated={selectedTab} setSelectedTab={setSelectedTab} />
                        </Link>
                        <Link to={`/player/hime/matches`} >
                            <PlayerTabRender tabName="매치 히스토리" tabNumber={1} activated={selectedTab} setSelectedTab={setSelectedTab} />
                        </Link>
                        <Link to={`/player/hime/statistics`} >
                            <PlayerTabRender tabName="요원 정보" tabNumber={2} activated={selectedTab} setSelectedTab={setSelectedTab} />
                        </Link>
                    </div>
                    {
                        selectedTab === 0 ?
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{marginTop: '0.5rem', height: 300, backgroundColor: 'darkgray'}}>
                            각종 통계 정보 - 티어 /
                        </Col>
                        :
                        null
                    }

                    {
                        selectedTab === 0 || selectedTab === 1 ?
                        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{margin: '0.5rem 0'}}>
                            <div style={{width: '100%', backgroundColor: 'lightgray', height: 200, marginBottom: '0.5rem'}}>
                                40전 29승 11패 / 8.1 / 5.6 / 13.1 - 평균 KDA 4.23 / 플레이한 요원 별 정보
                            </div>
                            <PlayerMatchHistoryRender type={"rank"} result={"victory"} kda={'14/6/2'} score={'5294'} rounds={'13-2'} agentName={"sova"} mapName={'haven'} />
                            <PlayerMatchHistoryRender type={"rank"} result={"victory"} kda={'1/10/5'} score={'1536'} rounds={'5-13'} agentName={"sage"} mapName={'split'} />
                            <PlayerMatchHistoryRender type={"rank"} result={"defeat"} kda={'8/7/1'} score={'4392'} rounds={'13-9'} agentName={"jett"} mapName={'haven'} />

                            <div style={{margin: '0.5rem 0', backgroundColor: 'lightgray', padding: '1rem'}}>
                                <Link to='/player/hime/matches/2' replace>
                                    더보기
                                </Link>
                            </div>
                        </Col>
                        :
                        null
                    }

                </Row>
            </Col>
        </Row>
    )
}
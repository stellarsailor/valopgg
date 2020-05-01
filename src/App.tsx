import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components'
import { Layout, Menu, Row, Col, Input } from 'antd';
import './App.css';

import Banner from './images/banner.jpg'
import Guide from './components/Guide'
import Agent from './components/Agent';
import Weapon from './components/Weapon';
import Skin from './components/Skin';
import Map from './components/Map';
import Strat from './components/Strat';
import Dic from './components/Dic';
import Simulator from './components/Simulator';
import Recruit from './components/Recruit';
import Prosetting from './components/Prosetting';
import Main from './components/Main';
import AgentRecommendation from './components/AgentRecommendation';
import MapDetail from './components/MapDetail';
import WeaponDetail from './components/WeaponDetail';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const HeaderContainer = styled.div`
    width: '100%';
    background-color: gray;
`;

export default function App () {
    return (
        <Router>
            <Layout className="layout">
                <HeaderContainer>
                    {
                        window.innerWidth < 576 ? 
                        <Row justify="center" style={{height: 80, display: 'flex', alignItems: 'center', backgroundImage: `url(${Banner})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <div style={{position: 'absolute', backgroundColor: 'black', width: '100%', height: 80, opacity: 0.4}}></div>
                            <Col xs={22} >
                                <Link to="/">
                                    <div style={{fontSize: '1.2rem', color: 'white', fontWeight: 'bold'}}>
                                        Valog.gg 발로그
                                    </div>
                                </Link>
                                {/* <Search placeholder="전적 검색 기능을 준비 중입니다." onSearch={value => console.log(value)} enterButton /> */}
                            </Col>
                        </Row>
                        :
                        <Row justify="center" style={{height: 150, display: 'flex', alignItems: 'center', backgroundImage: `url(${Banner})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <div style={{position: 'absolute', backgroundColor: 'black', width: '100%', height: 150, opacity: 0.4}}></div>
                            <Col xs={24} sm={22} md={20} lg={20} xl={15} >
                                <Row justify="space-between">
                                    <Col span={16}>
                                        <Link to="/">
                                            <div style={{fontSize: '2rem', color: 'white', fontWeight: 'bold'}}>
                                                Valog.gg 발로그
                                            </div>
                                        </Link>
                                    </Col>
                                    <Col span={8}>
                                        <Search placeholder="전적 검색 기능을 준비 중입니다." onSearch={value => console.log(value)} enterButton />
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    }
                </HeaderContainer>  
                <Row justify="center" style={{height: 50, backgroundColor: '#222222'}}>
                    {
                        window.innerWidth < 576 ? 
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', fontSize: '1.2em', overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap'}}>
                            <Link to="/guide" style={{marginLeft: 10, marginRight: 10}}>가이드</Link>
                            <Link to="/agent" style={{marginLeft: 10, marginRight: 10}}>요원</Link>
                            <Link to="/agentrecom" style={{marginLeft: 10, marginRight: 10}}>나만의 요원 찾기</Link>
                            <Link to="/weapon" style={{marginLeft: 10, marginRight: 10}}>무기</Link>
                            <Link to="/map" style={{marginLeft: 10, marginRight: 10}}>맵</Link>
                            <Link to="/strat" style={{marginLeft: 10, marginRight: 10}}>전략</Link>
                            <Link to="/dic" style={{marginLeft: 10, marginRight: 10}}>용어사전</Link>
                            <Link to="/prosetting" style={{marginLeft: 10, marginRight: 10}}>프로 세팅</Link>
                            <Link to="/simulator" style={{marginLeft: 10, marginRight: 10}}>전략 시뮬레이터</Link>
                            <Link to="/recruit" style={{marginLeft: 10, marginRight: 10}}>파티 모집</Link>
                        </div>
                        :
                        <Col xs={24} sm={22} md={20} lg={20} xl={15} >
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', fontSize: '1.2em'}}>
                                <Link to="/guide">가이드</Link>
                                <Link to="/agent">요원</Link>
                                <Link to="/agentrecom">나만의 요원 찾기</Link>
                                <Link to="/weapon">무기</Link>
                                <Link to="/map">맵</Link>
                                <Link to="/strat">캐릭터별 전략</Link>
                                <Link to="/dic">용어사전</Link>
                                <Link to="/prosetting">프로 세팅</Link>
                                <Link to="/simulator">전략 시뮬레이터</Link>
                                <Link to="/recruit">파티 모집</Link>
                            </div>
                        </Col>
                    }
                </Row>
                <Content style={{backgroundColor: '#131c2e', minHeight: 600}}>
                    <Row justify="center" >
                        <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{marginBottom: 30}}>
                            <Switch>
                                <Route path="/guide" component={Guide} />
                                <Route path="/agent" component={Agent} />
                                <Route path="/agentrecom" component={AgentRecommendation} />
                                <Route path="/weapon/:name" component={WeaponDetail} />
                                <Route path="/weapon" component={Weapon} />
                                <Route path="/skin" component={Skin} />
                                <Route path="/map/:name" component={MapDetail} />
                                <Route path="/map" component={Map} />
                                <Route path="/strat" component={Strat} />
                                <Route path="/dic" component={Dic} />
                                <Route path="/prosetting" component={Prosetting} />
                                <Route path="/simulator" component={Simulator} />
                                <Route path="/recruit" component={Recruit} />
                                <Route exact path="/" component={Main} />
                            </Switch>
                        </Col>
                    </Row>
                </Content>
                <Footer style={{ backgroundColor: '#121212'}}>
                    <Row justify="center">
                        Contact : valang.gg@gmail.com
                    </Row>
                    <Row justify="center" >
                        <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{marginTop: 30, marginBottom: 30}}>
                            Valang.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        </Router>

    );
}
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components'
import { Layout, Menu, Row, Col, Input } from 'antd';
import './App.css';

import Banner from './images/banner.jpg'
import Guide from './components/Guide'
import Agent from './components/Agent';
import Weapon from './components/Weapon';
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
import Community from './components/Community';

import OfficialBackground from './images/official-background.jpg'
import Calculator from './components/Calculator';

const { Header, Content, Footer } = Layout;
const { Search } = Input;

const HeaderContainer = styled.div`
    width: '100%';
    background-color: gray;
`;

const MenuTabHover = styled.div`
    &:hover {
        border-bottom: 2px solid lightgray;
        margin-bottom: -2px;
    }
`

const mobileMenuTab = {
    marginLeft: 5, marginRight: 10
}

export default function App () {

    const divStyle = {
        width: '100%',
        height: 'auto',
        backgroundImage: `url(${OfficialBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
    };

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
                                    <img src={require('./images/mainLogo.png')} style={{width: '30%', height: 'auto', marginLeft: '1rem'}} />
                                </Link>
                            </Col>
                        </Row>
                        :
                        <Row justify="center" style={{height: 150, display: 'flex', alignItems: 'center', backgroundImage: `url(${Banner})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                            <div style={{position: 'absolute', backgroundColor: 'black', width: '100%', height: 150, opacity: 0.4}}></div>
                            <Col xs={0} sm={22} md={20} lg={20} xl={15} >
                                <Row justify="space-between">
                                    <Col span={16}>
                                        <Link to="/">
                                            {/* <div style={{fontSize: '2rem', color: 'white', fontWeight: 'bold'}}>
                                                Valop <span style={{fontSize: '1.4rem'}}>발옵지지</span>
                                            </div> */}
                                            <img src={require('./images/mainLogo.png')} style={{width: '20%'}} />
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
                <Row justify="center" style={{height: 50, backgroundColor: '#161616'}}>
                    {
                        window.innerWidth < 576 ? 
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', fontSize: '1.2em', overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap'}}>
                            <Link to="/guide" style={mobileMenuTab}>가이드</Link>
                            <Link to="/agent" style={mobileMenuTab}>요원</Link>
                            <Link to="/agentrecom" style={mobileMenuTab}>맞는 요원 찾기</Link>
                            <Link to="/weapon" style={mobileMenuTab}>무기</Link>
                            <Link to="/map" style={mobileMenuTab}>맵</Link>
                            <Link to="/strat" style={mobileMenuTab}>요원별 전략</Link>
                            <Link to="/dic" style={mobileMenuTab}>용어사전</Link>
                            <Link to="/prosetting" style={mobileMenuTab}>프로 세팅</Link>
                            <Link to="/calculator" style={mobileMenuTab}>감도 계산기</Link>
                            <Link to="/simulator" style={mobileMenuTab}>전략 시뮬레이터</Link>
                            {/* <Link to="/recruit" style={mobileMenuTab}>파티 모집</Link> */}
                            {/* <Link to="/community" style={mobileMenuTab}>커뮤니티</Link> */}
                        </div>
                        :
                        <Col xs={24} sm={22} md={20} lg={20} xl={15} >
                            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', fontSize: '1.2em'}}>
                                <MenuTabHover><Link to="/guide">가이드</Link></MenuTabHover>
                                <MenuTabHover><Link to="/agent">요원</Link></MenuTabHover>
                                <MenuTabHover><Link to="/agentrecom">맞는 요원 찾기</Link></MenuTabHover>
                                <MenuTabHover><Link to="/weapon">무기</Link></MenuTabHover>
                                <MenuTabHover><Link to="/map">맵</Link></MenuTabHover>
                                <MenuTabHover><Link to="/strat">요원별 전략</Link></MenuTabHover>
                                <MenuTabHover><Link to="/dic">용어사전</Link></MenuTabHover>
                                <MenuTabHover><Link to="/prosetting">프로 세팅</Link></MenuTabHover>
                                <MenuTabHover><Link to="/calculator">감도 계산기</Link></MenuTabHover>
                                <MenuTabHover><Link to="/simulator">전략 시뮬레이터</Link></MenuTabHover>
                                {/* <MenuTabHover><Link to="/recruit">파티 모집</Link></MenuTabHover> */}
                                {/* <Link to="/community">커뮤니티</Link> */}
                            </div>
                        </Col>
                    }
                </Row>
                <Content>
                    <div style={divStyle}>
                    <Switch>
                        <Route path="/guide" component={Guide} />
                        <Route path="/agent" component={Agent} />
                        <Route path="/agentrecom" component={AgentRecommendation} />
                        <Route path="/weapon/:name" component={WeaponDetail} />
                        <Route path="/weapon" component={Weapon} />
                        <Route path="/community" component={Community} />
                        <Route path="/map/:name" component={MapDetail} />
                        <Route path="/map" component={Map} />
                        <Route path="/strat" component={Strat} />
                        <Route path="/dic" component={Dic} />
                        <Route path="/prosetting" component={Prosetting} />
                        <Route path="/calculator" component={Calculator} />
                        <Route path="/simulator" component={Simulator} />
                        <Route path="/recruit" component={Recruit} />
                        <Route exact path="/" component={Main} />
                    </Switch>
                    </div>
                </Content>
                <Footer style={{ backgroundColor: '#121212'}}>
                    <Row justify="center">
                        Contact : valop.gg@gmail.com
                    </Row>
                    <Row justify="center" >
                        <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{marginTop: 30, marginBottom: 30}}>
                            Valop.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        </Router>

    );
}
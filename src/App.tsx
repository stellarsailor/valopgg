import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components'
import { Layout, Row, Col, Alert } from 'antd';
import './App.css';

import Banner from './images/banner.jpg'
import OfficialBackground from './images/official-silhouette-background.jpg'

import Player from './components/Player'
import Agent from './components/Agent';
import AgentDetail from './components/AgentDetail'
import Weapon from './components/Weapon';
import Map from './components/Map';
import Strat from './components/Strat';
import Dic from './components/Dic';
import Contact from './components/Contact';
import Prosetting from './components/Prosetting';
import ProsettingDetail from './components/ProsettingDetail';
import Main from './components/Main';
import AgentRecommendation from './components/AgentRecommendation';
import MapDetail from './components/MapDetail';
import WeaponDetail from './components/WeaponDetail';
import Calculator from './components/Calculator';
import Privacy from './components/Privacy';
import GuideDetail from './components/GuideDetail';
import ReactionTest from './components/ReactionTest';

import { patchNotePhrase } from './datas/guide'

import SearchInput from './components/subcomponents/SearchInput'
const { Content, Footer } = Layout;

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
    marginLeft: 5, marginRight: 5
}

export default function App (props) {

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
                    <Row>
                        <Col xs={24} sm={24} md={0} lg={0} xl={0} >
                            <Row style={{height: 80, display: 'flex', alignItems: 'center', backgroundImage: `url(${Banner})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                <div style={{position: 'absolute', backgroundColor: 'black', width: '100%', height: 80, opacity: 0.4}}></div>
                                <Col xs={8} >
                                    <Link to="/">
                                        <img src={require('./images/mainLogo.png')} style={{width: '100%', height: 'auto', marginLeft: '1rem'}} alt="valopgg main logo" />
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={0} sm={0} md={24} lg={24} xl={24} >
                            <Row justify="center" style={{height: 150, display: 'flex', alignItems: 'center', backgroundImage: `url(${Banner})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                <div style={{position: 'absolute', backgroundColor: 'black', width: '100%', height: 150, opacity: 0.4}}></div>
                                <Col xs={0} sm={0} md={20} lg={20} xl={15} >
                                    <Row justify="space-between">
                                        <Col span={16}>
                                            <Link to="/">
                                                {/* <div style={{fontSize: '2rem', color: 'white', fontWeight: 'bold'}}>
                                                    Valop <span style={{fontSize: '1.4rem'}}>발옵지지</span>
                                                </div> */}
                                                <img src={require('./images/mainLogo.png')} style={{width: '20%'}} alt="valopgg main logo" />
                                            </Link>
                                        </Col>
                                        <Col span={8}>
                                            <SearchInput />
                                        </Col>
                                    </Row>
                                <Link to="/guide" style={{position: 'absolute', bottom: -40, color: 'white', fontSize: '0.8rem', backgroundColor: 'rgb(32, 43, 67)', padding: '3px 10px', borderRadius: 5}}>{patchNotePhrase}</Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </HeaderContainer>  
                <Row justify="center" style={{height: 50, backgroundColor: '#161616'}}>
                    <Col xs={24} sm={0} md={0} lg={0} xl={0} >
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', fontSize: '1.2em', overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap'}}>
                            <Link to={`/guide/0/0`} style={mobileMenuTab}>가이드</Link>
                            <Link to="/agent" style={mobileMenuTab}>요원</Link>
                            <Link to="/agentrecom" style={mobileMenuTab}>맞는 요원 찾기</Link>
                            {/* <Link to="/tier" style={mobileMenuTab}>티어</Link> */}
                            <Link to="/weapon" style={mobileMenuTab}>무기/스킨</Link>
                            <Link to="/map" style={mobileMenuTab}>맵</Link>
                            <Link to="/strat" style={mobileMenuTab}>요원별 전략</Link>
                            <Link to="/dic" style={mobileMenuTab}>용어사전</Link>
                            <Link to="/prosetting" style={mobileMenuTab}>프로 세팅</Link>
                            <Link to="/calculator" style={mobileMenuTab}>감도 계산기</Link>
                            <Link to="/reaction" style={mobileMenuTab}>반응속도 측정</Link>
                            {/* <Link to="/simulator" style={mobileMenuTab}>전략 시뮬레이터</Link> */}
                        </div>
                    </Col>
                    <Col xs={0} sm={22} md={20} lg={20} xl={15} >
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%', fontSize: '1.2em'}}>
                            <MenuTabHover><Link to={`/guide/0/0`}>가이드</Link></MenuTabHover>
                            <MenuTabHover><Link to="/agent">요원</Link></MenuTabHover>
                            <MenuTabHover><Link to="/agentrecom">맞는 요원 찾기</Link></MenuTabHover>
                            {/* <MenuTabHover><Link to="/tier">티어</Link></MenuTabHover> */}
                            <MenuTabHover><Link to="/weapon">무기/스킨</Link></MenuTabHover>
                            <MenuTabHover><Link to="/map">맵</Link></MenuTabHover>
                            <MenuTabHover><Link to="/strat">요원별 전략</Link></MenuTabHover>
                            <MenuTabHover><Link to="/dic">용어사전</Link></MenuTabHover>
                            <MenuTabHover><Link to="/prosetting">프로 세팅</Link></MenuTabHover>
                            <MenuTabHover><Link to="/calculator">감도 계산기</Link></MenuTabHover>
                            <MenuTabHover><Link to="/reaction">반응속도 측정</Link></MenuTabHover>
                            {/* <MenuTabHover><Link to="/simulator">전략 시뮬레이터</Link></MenuTabHover> */}
                        </div>
                    </Col>
                </Row>
                <Content>
                    <div style={divStyle}>
                        <Switch>
                            <Route path="/player/:userName/matches/:pageNum" component={Player} />
                            <Route path="/player/:userName/:subMenu" component={Player} />
                            <Route path="/player/:userName" component={Player} />
                            <Route path="/player" component={Player} />
                            <Route path="/guide/:groupId/:tabId" component={GuideDetail} />
                            <Route path="/guide" component={GuideDetail} />
                            <Route path="/agent/:agentName" component={AgentDetail} />
                            <Route path="/agent" component={Agent} />
                            <Route path="/agentrecom" component={AgentRecommendation} />
                            {/* <Route path="/tier" component={Tier} /> */}
                            <Route path="/weapon/:name" component={WeaponDetail} />
                            <Route path="/weapon" component={Weapon} />
                            <Route path="/map/:name" component={MapDetail} />
                            <Route path="/map" component={Map} />
                            <Route path="/strat" component={Strat} />
                            <Route path="/dic" component={Dic} />
                            <Route path="/prosetting/:proName" component={ProsettingDetail} />
                            <Route path="/prosetting" component={Prosetting} />
                            <Route path="/calculator" component={Calculator} />
                            <Route path="/reaction" component={ReactionTest} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/prove" component={Contact} />
                            <Route path="/privacy" component={Privacy} />
                            <Route exact path="/" component={Main} />
                        </Switch>
                    </div>
                </Content>
                <Row justify="center" style={{width: '100%', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <span style={{fontWeight: 'bold', color: 'black', margin: '1rem'}}>
                        VALOP.GG 모바일 앱을 만나보세요!
                    </span>
                    <a target='_blank' href="https://play.google.com/store/apps/details?id=com.mobile_valopgg" >
                        <img src={require('./images/googleplay.png')} style={{width: 120, margin: '1rem 0'}} />
                    </a>
                </Row>
                <Footer style={{ backgroundColor: '#121212'}}>
                    <Row justify="center">
                    © 2020 Valop.gg all rights reserved. 
                    </Row>
                    <Row justify="center" style={{margin: '1rem 0'}}>
                        <Link to="/contact" style={{marginLeft: 10}}>Contact</Link> 
                        <Link to="/privacy" style={{marginLeft: 10}}>Privacy</Link> 
                    </Row>
                    <Row justify="center" >
                        <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{marginTop: '1rem', marginBottom: '1rem'}}>
                            Valop.gg isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
                        </Col>
                        {/* <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{marginTop: '1rem', marginBottom: '1rem', textAlign: 'right'}}> */}
                        {/* <a href="https://twitter.com/valopgg">Twitter</a> */}
                        {/* </Col> */}
                    </Row>
                </Footer>
            </Layout>
        </Router>

    );
}
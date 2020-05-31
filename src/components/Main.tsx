import React from 'react'
import MetaTags from 'react-meta-tags';
import styled from 'styled-components'
import { Row, Col, Button, Alert } from 'antd';
import { Link } from 'react-router-dom'
import Jumbotron from '../images/official-background.jpg'
import AdSense from 'react-adsense';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Adfit from './subcomponents/Adfit';

// const { Search } = Input;

const MainTextTitle = styled.div`
    color: black;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1rem;
`

const MainTextDesc = styled.div`
    color: gray;
    font-size: 1.4rem;
`

const HR = styled.div`
    width: 100%;
    height: 1;
    border-bottom: 1px solid gray;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export default function Main() {

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(236, 232, 225, 0.95)', height: 'auto'}} >
            <MetaTags>              
                <title>발옵지지 - 발로란트 정보의 모든 것</title>
                <meta name="description" content={`발옵지지에서 요원, 무기, 스킨, 맵, 요원 별 전략 등 다양하고 유용한 정보를 습득하세요!`} />
            </MetaTags>
            <Col xs={24} sm={24} md={0} lg={0} xl={0} style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', width: '100%', height: 200, backgroundImage: `url(${Jumbotron})`, backgroundSize: 'cover', backgroundPosition: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        {/* <Search placeholder="전적 검색 기능을 준비 중입니다." onSearch={value => console.log(value)} enterButton style={{width: '80%'}} /> */}
                        <div>
                            <Link to={`/guide/0/0`}><Button type="primary">0.50 패치노트 바로가기</Button></Link>
                        </div>
                </div>
            </Col>
            <Col xs={0} sm={0} md={24} lg={24} xl={24} style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'center'}} >
                    <div style={{position: 'absolute', fontSize: '2rem', top: '30%', textAlign: 'center'}}>
                        <div>
                            발로란트 정보의 모든 것, 발옵지지
                        </div>
                        <div style={{fontSize: '1.2rem'}}>
                            <Link to={`/guide/0/0`}><Button type="primary">0.50 패치노트 바로가기</Button></Link>
                        </div>
                    </div>
                </div>
                <div >
                    <img src={require('../images/official-image.png')} style={{width: '100%'}} alt="background cut 20 degree" />   
                </div>
            </Col>
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                {/* <a target='_blank' href="https://play.google.com/store/apps/details?id=com.mobile_valopgg" style={{display: 'flex', justifyContent: 'center', marginTop: '1rem', marginLeft: '1rem', marginRight: '1rem'}}>
                    <Alert message="발옵지지 안드로이드 앱이 출시되었습니다! 바로가기" type="success" showIcon closable />
                </a> */}
                <Row style={{padding: '1rem'}}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        {/* <img src={require('../images/mainImages0.jpg')} style={{width: '100%'}} /> */}
                        <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="valopgg"
                        theme="light"
                        noHeader
                        noFooter
                        options={{width: '100%'}}
                        autoHeight
                        />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <MainTextTitle>
                            FPS 입문자들부터 고인물까지 모두 환영하는 사이트, Valop.gg
                        </MainTextTitle>
                        <MainTextDesc>
                            발로란트를 처음 하시나요? 발옵지지에서 자신에게 맞는 캐릭터를 찾아보고 주 캐릭터로 삼아보세요! 
                        </MainTextDesc>
                        
                        <Button style={{marginTop: 10}}><Link to="/agentrecom">바로가기</Link></Button>
                    </Col>
                    <HR />
                </Row>
                <Row style={{padding: '1rem'}}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <MainTextTitle>
                            발로란트 관련 정보 모음
                        </MainTextTitle>
                        <MainTextDesc>
                            발옵지지에서 요원, 무기, 스킨, 맵, 요원 별 전략 등 다양하고 유용한 정보를 습득하세요!
                        </MainTextDesc>
                        
                        <Button style={{marginTop: 10}}><Link to="/strat">바로가기</Link></Button>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <img src={require('../images/mainImages1.jpg')} style={{width: '100%'}} alt="helper to explain website" />
                    </Col>
                    <HR />
                </Row>
                <Row style={{padding: '1rem'}}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <img src={require('../images/mainImages2.jpg')} style={{width: '100%'}} alt="helper to explain website" />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <MainTextTitle>
                            중급자 이상을 위한 다양한 정보들
                        </MainTextTitle>
                        <MainTextDesc>
                            각종 프로들과 스트리머들의 마우스 감도 설정, 키보드 설정, 그래픽 설정, 감도 계산기 등을 발옵지지에서 확인하실 수 있습니다!
                        </MainTextDesc>
                        
                        <Button style={{marginTop: 10}}><Link to="/prosetting">바로가기</Link></Button>
                    </Col>
                </Row>

                <AdSense.Google
                    key={Math.random()}
                    client="ca-pub-1635386604461382"
                    slot="1654741413"
                    style={{ display: 'block' }}
                    format="auto"
                    responsive="true"
                />
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    {/* <Adfit adUnit="DAN-u8ap0m0ade0n" adWidth = "320" adHeight  = "50" /> */}
                    <Adfit adUnit="DAN-qe74ylevqulf" adWidth = "728" adHeight  = "90" />
                    {/* <AdfitWebComponent
                    key={Math.random()}
                    adUnit="DAN-qe74ylevqulf"
                    adHeight="100"
                    /> */}
                </div>

                {/* <Collapse defaultActiveKey={['1']} >
                    <Panel header="0.49 패치노트" key="1">
                        <div style={{color: 'black', width: '100%'}}>
                            <ReactMarkdown source={input} />
                            탑 10 랭킹
                        </div>
                    </Panel>
                </Collapse> */}
            </Col>
        </Row>
    )
}
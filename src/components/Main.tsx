import React from 'react'
import styled from 'styled-components'
import { Row, Col, Collapse, Button, Alert, Input } from 'antd';
import { Link } from 'react-router-dom'
import Jumbotron from '../images/official-background.png'
import ReactMarkdown from 'react-markdown'

const { Panel } = Collapse;
const { Search } = Input;

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
    margin-top: 2rem;
    margin-bottom: 1.5rem;
`

export default function Main() {

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(236, 232, 225, 0.95)', height: 'auto'}} >
            {
                window.innerWidth < 576 ?
                <div style={{display: 'flex', width: '100%', height: 200, backgroundImage: `url(${Jumbotron})`, backgroundSize: 'cover', backgroundPosition: 'center', justifyContent: 'center', alignItems: 'center'}}>
                        <Search placeholder="전적 검색 기능을 준비 중입니다." onSearch={value => console.log(value)} enterButton style={{width: '80%'}} />
                </div>
                :
                <Col xs={0} sm={0} md={24} lg={24} xl={24} style={{marginBottom: '2rem'}}>
                    <div style={{display: 'flex', justifyContent: 'center'}} >
                        <div style={{position: 'absolute', fontSize: '2rem', top: '33%', textAlign: 'center'}}>
                            <div>
                                발로란트 클로즈 베타 테스트가 진행 중입니다.
                            </div>
                            <div style={{fontSize: '1.2rem'}}>
                                <Button type="primary" href="https://beta.playvalorant.com/ko-kr/" target="_blank">베타 테스트 참여하기</Button>
                            </div>
                        </div>
                    </div>
                    <div >
                        <img src={require('../images/official-image.png')} style={{width: '100%'}} />   
                    </div>
                </Col>
            }
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                { window.innerWidth < 576 ? <div style={{fontSize: '1rem', fontWeight: 'bold', textAlign: 'center', color: 'black', marginTop: '1rem'}}>발로란트 클로즈 베타 테스트가 진행 중입니다.</div> : null }
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
                    <a href="https://beta.playvalorant.com/ko-kr/news/game-updates/valorant-patch-notes-0-49/" target="_blank"><Alert message="0.49 패치 업데이트 완료 - 내용 확인하기" type="success" showIcon /></a>
                </div>
                <Row style={{padding: '1rem'}}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <img src={require('../images/mainImages0.jpg')} style={{width: '100%'}} />
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
                            발옵지지에서 요원, 무기, 맵, 요원 별 전략 등 다양한 정보를 습득하세요! 차후 전적 검색 및 전략 시뮬레이터 등 다양한 기능이 추가될 예정입니다.
                        </MainTextDesc>
                        
                        <Button style={{marginTop: 10}}><Link to="/strat">바로가기</Link></Button>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <img src={require('../images/mainImages1.jpg')} style={{width: '100%'}} />
                    </Col>
                    <HR />
                </Row>
                <Row style={{padding: '1rem'}}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <img src={require('../images/mainImages2.jpg')} style={{width: '100%'}} />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <MainTextTitle>
                            중급자 이상을 위한 다양한 정보들
                        </MainTextTitle>
                        <MainTextDesc>
                            각종 프로들과 스트리머들의 마우스 감도 설정, 키보드 설정, 그래픽 설정 등을 발옵지지에서 확인하실 수 있습니다!
                        </MainTextDesc>
                        
                        <Button style={{marginTop: 10}}><Link to="/prosetting">바로가기</Link></Button>
                    </Col>
                </Row>

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
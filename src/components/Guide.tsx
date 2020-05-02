import React from 'react'
import styled from 'styled-components'
import { Row, Col, Menu } from 'antd';

const { SubMenu } = Menu;

export default function Guide() {

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <Row>
                    <Col xs={24} sm={22} md={12} lg={12} xl={16} >
                        <div style={{color: 'white', backgroundColor: '#202b43', padding: '1rem', marginTop: '1rem'}}>
                            발로란트는 라이엇 게임즈에서 만든 1인칭 슈팅 게임 입니다.
                            각 요원이 무기와 스킬을 구매하여 매 라운드 격돌하게 됩니다. 
                            라운드는 최대 25라운드까지 진행되며 먼저 13라운드를 가져가는 팀이 승리하게 됩니다.

                            랭크는 아이언 브론즈 실버 골드 플래티넘 다이아몬드 임모탈 발로란트로 이루어져있습니다.

                            에이스
                            한 명이 상대팀 전원을 처치 후 승리.
                            무결점 플레이
                            팀원이 한 명도 죽지 않고 승리.
                            팀 에이스
                            상대팀 플레이어들을 아군이 한 명씩 처치하여 승리.
                            클러치
                            1대 다수의 상황이 되었을 때 혼자서 라운드를 승리.
                            절약왕
                            상대팀보다 적은 크레드를 소비하여 승리.

                            등등 각 종 가이드 및 공략 여기다가 때려박기
                        </div>
                    </Col>
                    <Col xs={0} sm={0} md={12} lg={12} xl={8} style={{padding: '1rem'}}>
                        <Menu
                            onClick={() => console.log('asd')}
                            style={{ width: 256 }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                        >
                            <SubMenu
                            key="sub1"
                            title={ <span>가이드</span> }>
                                <Menu.Item key="1">기본 시스템</Menu.Item>
                                <Menu.Item key="2">랭크 시스템</Menu.Item>
                                <Menu.Item key="3">계약 시스템</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title="패치노트">
                                <Menu.Item key="5">Option 5</Menu.Item>
                                <Menu.Item key="6">Option 6</Menu.Item>
                            </SubMenu>
                            <SubMenu
                            key="sub3"
                            title={ <span>유저 공략</span> }>
                                <Menu.Item key="9">Option 9</Menu.Item>
                                <Menu.Item key="10">Option 10</Menu.Item>
                                <Menu.Item key="11">Option 11</Menu.Item>
                                <Menu.Item key="12">Option 12</Menu.Item>
                            </SubMenu>
                        </Menu>
                        <img src={require('../images/official-jett.png')} style={{width: '100%'}}/>
                    </Col>
                </Row>
            </Col>
        </Row>
        // <Row justify="center" style={{backgroundColor: '#ece8e1', minHeight: 600}} >
        //     <Col xs={24} sm={22} md={20} lg={20} xl={15}>
        //         <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        //             <div style={{position: 'absolute', fontSize: '1.5rem'}}>.</div>
        //             <div style={{position: 'absolute', width: '100%', backgroundColor: 'black', opacity: 0.3}}></div>
        //             <img src={require('../images/official-background-wide-darken.png')} style={{width: '100%'}} />
        //         </div>

        //     </Col>
        // </Row>
    )
}
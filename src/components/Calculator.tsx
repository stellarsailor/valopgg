import React, { useState, useEffect, useCallback } from 'react'
import { isMobile } from 'react-device-detect'
import MetaTags from 'react-meta-tags';
import { Row, Col, Select, Input, Typography, Radio, Button } from 'antd';
import styled from 'styled-components'
import Adfit from './subcomponents/Adfit';
import CalculatorSens from './subcomponents/CalculatorSens';
import { Link } from 'react-router-dom';
import CalculatorBattlepass from './subcomponents/CalculatorBattlepass';

const { Paragraph } = Typography

const TabMenu = styled.span`
    font-size: ${props => props.isMobile ? '1.2rem' : '1.8rem' };
    margin-right: ${props => props.isMobile ? '1.5rem' : '3rem' };
    border-bottom: ${props => props.selected ? '1px solid white' : '0px solid gray' };
    color: ${props => props.selected ? 'white' : 'gray' };
`

export default function Calculator(props) {

    const calcType = props.match.params.calcName

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{padding: '4%', backgroundColor: 'rgb(32, 43, 67)', margin: '1rem 0'}}>
                <MetaTags>
                    <title>발로그 발로란트 감도 계산기 배틀패스 경험치 계산기</title>
                    <meta name="description" content={'오버워치, 배틀그라운드, 배틀필드, 카스 글옵(CS:GO), 레인보우 식스 등 게임에서 발로란트로의 감도 변환기 계산기를 제공하며 배틀패스 경험치 요구량과 관련된 계산기를 제공합니다.'} />
                </MetaTags>
                <div style={{borderBottom: '0px solid gray'}}>
                    <Link to="/calculator/battlepass">
                        <TabMenu isMobile={isMobile} selected={calcType === 'battlepass' ? true : false}>배틀패스 계산기</TabMenu>
                    </Link>
                    <Link to="/calculator/sens">
                        <TabMenu isMobile={isMobile} selected={calcType === 'sens' ? true : false}>감도 계산기</TabMenu>
                    </Link>
                </div>
                <Paragraph style={{color: 'white', fontSize: '1rem', textAlign: 'right'}} copyable={{ text: `https://valog.gg/calculator/${calcType}` }}>링크 복사</Paragraph>
                {window.innerWidth < 576 ? <Adfit adUnit="DAN-qhq3i0n8v392" adWidth="320" adHeight="100" /> : <Adfit adUnit="DAN-skk0fg3no8c7" adWidth="728" adHeight="90" /> }
                {
                    calcType === 'battlepass' ?
                    <CalculatorBattlepass />
                    :
                    <CalculatorSens />
                }
            </Col>
            {/* <div style={{display: 'flex', justifyContent: 'center', margin: '2rem'}}>
                <img src={require('../images/mainLogo.png')} style={{width: '20%', alignSelf: 'flex-start'}} alt='valog.gg main logo' />
            </div> */}
        </Row>
    )
}
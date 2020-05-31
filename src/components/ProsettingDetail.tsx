import React, { useEffect } from 'react'
import MetaTags from 'react-meta-tags';
import styled from 'styled-components'
import { Row, Col, Divider, BackTop } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { prosetting } from '../datas/prosetting'
import { Element , scroller } from 'react-scroll'
import { Link } from 'react-router-dom'
import { staticServer } from '../serverUrl'

const BlockTitle = styled.div`
    font-weight: bold;
`;

export default function ProsettingDetail(props) {

    const proName = props.match.params.proName;

    const prosettingScroll = () => {
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

    useEffect(() => {
        prosettingScroll()
    },[])
    
    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{padding: '1rem 0'}}>
                <BackTop />
                <MetaTags>
                    <title>{proName}의 발로란트 마우스 감도, 키보드 세팅</title>
                    <meta name="description" content={`${proName}이 발로란트에서 사용하는 마우스 감도, 키보드 설정, 그래픽 설정, 조준선 설정 등을 확인가능합니다!`} />
                </MetaTags>
                {prosetting.filter(v => v.name.toLowerCase() === proName).map(v => (
                <Element name="scroll-to-element" key={v.id} >
                    <Row justify="center" style={{backgroundColor: '#202b43', padding: '1rem'}}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Link to="/prosetting" style={{display: 'flex', alignItems: 'center', marginBottom: '1rem'}}>
                                <ArrowLeftOutlined style={{fontSize: '1.4rem', marginLeft: '0.5rem', marginRight: '1rem'}} />
                                <span style={{fontSize: '1.6rem'}}>
                                    <span style={{fontWeight: 'bold'}}>{v.name} </span>
                                    <span style={{fontSize: '1rem'}}>({v.team})</span>
                                </span>
                            </Link>
                        </Col>
                        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                            {v.photo !== true ? <div style={{backgroundColor: 'white', width: '100%', height: 300}}></div> : <img src={`${staticServer}/prosetting/${v.name.toLowerCase()}-profile-picture.jpg`} style={{width: '100%'}} alt="발로란트 프로 프로필 이미지" /> }
                        </Col>

                        <Col xs={24} sm={24} md={18} lg={18} xl={18} style={{paddingLeft: '1rem', paddingRight: '1rem', paddingBottom: '1rem', backgroundColor: '#273552'}}>
                            <Divider orientation="left" style={{color: 'white', fontWeight: 'bold'}}>마우스 설정</Divider>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <BlockTitle>마우스 : {v.mouse}</BlockTitle>
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>DPI</BlockTitle>
                                    {v.dpi}
                                </Col> 
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>감도</BlockTitle>
                                    {v.sensitivity}
                                </Col> 
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>eDPI</BlockTitle>
                                    {Math.round(v.dpi * v.sensitivity)}
                                </Col> 
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>Hz</BlockTitle>
                                    {v.hz}
                                </Col> 
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>조준경 감도</BlockTitle>
                                    {v.scopedSensitivity}
                                </Col> 
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>윈도우 감도</BlockTitle>
                                    {v.windowSensitivity}
                                </Col> 
                            </Row>
                            <Divider orientation="left" style={{color: 'white', fontWeight: 'bold'}}>키보드 설정</Divider>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <BlockTitle>키보드 : {v.keyboard}</BlockTitle>
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>걷기</BlockTitle>
                                    {v.walk}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>주 무기 장착</BlockTitle>
                                    {v.equip1}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>스킬 사용 1</BlockTitle>
                                    {v.ability1}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>앉기</BlockTitle>
                                    {v.crouch}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>보조 무기 장착</BlockTitle>
                                    {v.equip2}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>스킬 사용 2</BlockTitle>
                                    {v.ability2}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>점프</BlockTitle>
                                    {v.jump}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>근접 무기 장착</BlockTitle>
                                    {v.equip3}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>스킬 사용 3</BlockTitle>
                                    {v.ability3}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>오브젝트 사용</BlockTitle>
                                    {v.useObject}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>스파이크 장착</BlockTitle>
                                    {v.equip4}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>궁극기 사용</BlockTitle>
                                    {v.ability4}
                                </Col>
                            </Row>
                            <Divider orientation="left" style={{color: 'white', fontWeight: 'bold'}}>그래픽 설정</Divider>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <BlockTitle>모니터 : {v.monitor}</BlockTitle>
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>화면</BlockTitle>
                                    {v.display}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>해상도</BlockTitle>
                                    {v.resolution}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>FPS 제한</BlockTitle>
                                    {v.frameLimit}
                                </Col>
                            </Row>
                            <Divider orientation="left" style={{color: 'white', fontWeight: 'bold'}}>조준선 설정</Divider>
                            <Row>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>조준선 색상</BlockTitle>
                                    {v.color}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>외곽선</BlockTitle>
                                    {v.outlines}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>화면 중앙 도트</BlockTitle>
                                    {v.centerDot}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>안쪽 선 설정</BlockTitle>
                                    {v.innerLines}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>바깥쪽 선 설정</BlockTitle>
                                    {v.outerLines}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>오차</BlockTitle>
                                    {v.error}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Element>
                ))}
            </Col>
        </Row>
    )
}
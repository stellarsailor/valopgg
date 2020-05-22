import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col, Divider } from 'antd';
import { prosetting } from '../datas/prosetting'
import shuffle from '../logics/shuffleArray'

const BlockTitle = styled.div`
    font-weight: bold;
`;

const Bold = styled.span`
    color: lightgreen;
`

export default function Prosetting() {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])
    
    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{padding: '1rem 0'}}>
                <div style={{backgroundColor: '#202b43', padding: '1rem', marginBottom: '1rem'}}>
                    <div style={{fontSize: '1.6rem'}}>최적의 세팅 가이드</div>
                    <div style={{fontSize: '1.1rem'}}>CS:GO 프로 선수 및 스트리머들이 발로란트에서 평균적으로 가장 많이 사용하는</div>
                    <div style={{fontSize: '1.1rem', marginLeft: '2rem'}}>DPI 는 <Bold>400</Bold> 입니다. <span style={{fontSize: '0.8rem'}}>(평균치 381, 2순위 800)</span></div>
                    <div style={{fontSize: '1.1rem', marginLeft: '2rem'}}>조준경 감도 배율은 <Bold>1.00</Bold> 입니다. <span style={{fontSize: '0.8rem'}}>(평균치 0.914)</span></div>
                    <div style={{fontSize: '1.1rem', marginLeft: '2rem'}}>마우스 폴링 레이트는 <Bold>1000 hz</Bold> 입니다.</div>
                    <div style={{fontSize: '1.1rem', marginLeft: '2rem'}}>미니맵 설정은 <Bold>회전:회전 / 플레이어 중앙에 고정:꺼짐 / 미니맵 크기:0.978 / 미니맵 확대:0.9 / 미니맵 시야 범위 표시:켜짐</Bold> 입니다.</div>
                    <div style={{fontSize: '1.1rem', marginLeft: '2rem'}}>조준선 설정은 <Bold>색상:녹색 / 윤곽선:켜짐, 0.187, 1 / 화면 중앙 도트: 꺼짐, 0.49, 2 / 오차 발생 시 흐리기: 꺼짐</Bold> 입니다.</div>
                </div>

                {shuffle(prosetting).map(v => (
                    <>
                    <Row justify="center" key={v.id} style={{backgroundColor: '#202b43', padding: '1rem'}}>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <span style={{fontSize: '1.8rem'}}>
                                <span style={{fontWeight: 'bold'}}>{v.name} </span>
                                <span style={{fontSize: '1rem'}}>({v.team})</span>
                            </span>
                        </Col>
                        <Col xs={24} sm={24} md={6} lg={6} xl={6}>
                            {v.photo === '' ? <div style={{backgroundColor: 'white', width: '100%', height: 300}}></div> : <img src={`https://d3s0uoqa61ipmr.cloudfront.net/prosetting/${v.name.toLowerCase()}-profile-picture.jpg`} style={{width: '100%'}} /> }
                        </Col>

                        <Col xs={24} sm={24} md={18} lg={18} xl={18} style={{paddingLeft: '1rem', paddingRight: '1rem', paddingBottom: '1rem', backgroundColor: '#273552'}}>
                            <Divider orientation="left" style={{color: 'white', fontWeight: 'bold'}}>마우스 설정</Divider>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <BlockTitle>마우스 : {v.prosetting.mouse}</BlockTitle>
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>DPI</BlockTitle>
                                    {v.prosetting.dpi}
                                </Col> 
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>감도</BlockTitle>
                                    {v.prosetting.sensitivity}
                                </Col> 
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>eDPI</BlockTitle>
                                    {Math.round(v.prosetting.dpi * v.prosetting.sensitivity)}
                                </Col> 
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>Hz</BlockTitle>
                                    {v.prosetting.hz}
                                </Col> 
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>조준경 감도</BlockTitle>
                                    {v.prosetting.scopedSensitivity}
                                </Col> 
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>윈도우 감도</BlockTitle>
                                    {v.prosetting.windowSensitivity}
                                </Col> 
                            </Row>
                            <Divider orientation="left" style={{color: 'white', fontWeight: 'bold'}}>키보드 설정</Divider>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <BlockTitle>키보드 : {v.prosetting.keyboard}</BlockTitle>
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>걷기</BlockTitle>
                                    {v.prosetting.walk}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>주 무기 장착</BlockTitle>
                                    {v.prosetting.equip1}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>스킬 사용 1</BlockTitle>
                                    {v.prosetting.ability1}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>앉기</BlockTitle>
                                    {v.prosetting.crouch}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>보조 무기 장착</BlockTitle>
                                    {v.prosetting.equip2}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>스킬 사용 2</BlockTitle>
                                    {v.prosetting.ability2}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>점프</BlockTitle>
                                    {v.prosetting.jump}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>근접 무기 장착</BlockTitle>
                                    {v.prosetting.equip3}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>스킬 사용 3</BlockTitle>
                                    {v.prosetting.ability3}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>오브젝트 사용</BlockTitle>
                                    {v.prosetting.useObject}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>스파이크 장착</BlockTitle>
                                    {v.prosetting.equip4}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>궁극기 사용</BlockTitle>
                                    {v.prosetting.ability4}
                                </Col>
                            </Row>
                            <Divider orientation="left" style={{color: 'white', fontWeight: 'bold'}}>그래픽 설정</Divider>
                            <Row>
                                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                    <BlockTitle>모니터 : {v.prosetting.monitor}</BlockTitle>
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>화면</BlockTitle>
                                    {v.prosetting.display}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>해상도</BlockTitle>
                                    {v.prosetting.resolution}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>FPS 제한</BlockTitle>
                                    {v.prosetting.frameLimit}
                                </Col>
                            </Row>
                            <Divider orientation="left" style={{color: 'white', fontWeight: 'bold'}}>조준선 설정</Divider>
                            <Row>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>조준선 색상</BlockTitle>
                                    {v.prosetting.color}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>외곽선</BlockTitle>
                                    {v.prosetting.outlines}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>화면 중앙 도트</BlockTitle>
                                    {v.prosetting.centerDot}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>안쪽 선 설정</BlockTitle>
                                    {v.prosetting.innerLines}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>바깥쪽 선 설정</BlockTitle>
                                    {v.prosetting.outerLines}
                                </Col>
                                <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <BlockTitle>오차</BlockTitle>
                                    {v.prosetting.error}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    </>
                ))}
            </Col>
        </Row>
    )
}
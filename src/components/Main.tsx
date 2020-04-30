import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';

export default function Main() {

    return(
        <Row>
            <Col xs={24} sm={12} md={12} lg={4} xl={14} >
                <div style={{fontSize: '2em', color: 'white'}}>
                    발로란트 베타 테스트가 진행 중입니다.

                    패치노트 및 공지사항

                    베타 테스트 참여 방법 확인
                </div>
            </Col>
            <Col xs={0} sm={0} md={12} lg={4} xl={10} >
                <img src={require('../images/official-jett.png')} style={{width: '100%'}}/>
            </Col>
        </Row>

    )
}
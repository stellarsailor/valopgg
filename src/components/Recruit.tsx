import React from 'react'
import styled from 'styled-components'
import { Row, Col, Button } from 'antd';
import { ExclamationCircleTwoTone } from '@ant-design/icons'

export default function Recruit() {

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <div style={{fontSize: '1.5rem', height: 500}}>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '3rem'}}>
                        <ExclamationCircleTwoTone twoToneColor="#52c41a" />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        콘텐츠를 준비 중입니다. 조금만 기다려주세요!
                    </div>
                </div>
            </Col>
        </Row>
    )
}
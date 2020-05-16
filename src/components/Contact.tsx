import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Row, Col, Button } from 'antd';
import { ExclamationCircleTwoTone } from '@ant-design/icons'

export default function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <div style={{fontSize: '1.5rem', height: 500}}>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: '3rem'}}>
                        <ExclamationCircleTwoTone twoToneColor="#52c41a" />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        문의 및 건의사항 : valop.gg@gmail.com
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', color: 'gray'}}>
                        소유권 관련 : brittea.alice@gmail.com
                    </div>
                    <div style={{margin: '2rem 0'}}>
                        대학생 1인 개발로 현재 수익 없이 지출로만 운영되고 있는 사이트 입니다. 개인적으로 발로란트를 너무 재밌게 즐기고 있고 더욱 흥했으면 하는 바람으로 만든 사이트이며 소수의 유저가 존재하는 한 지속적으로 사이트를 업데이트하고 관리함을 약속 드리겠습니다. 피드백은 언제나 환영합니다! 감사합니다.
                    </div>
                </div>
            </Col>
        </Row>
    )
}
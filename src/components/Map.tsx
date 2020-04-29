import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import Bind from '../images/map/bind-illust.jpeg';
import Haven from '../images/map/haven-illust.jpeg';
import Split from '../images/map/split-illust.jpeg';

const BottomText = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 2rem;
`

export default function Map() {

    return(
        <Row gutter={[20, 20]} >
            <Col xs={24} sm={24} md={12} lg={8} xl={8} style={{height: 300}}>
                <Link to="/map/bind">
                    <div style={{backgroundImage: `url(${Bind})`, width: "100%", height: '100%', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <BottomText>Bind</BottomText>
                    </div>
                </Link>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} style={{height: 300}}>
                <Link to="/map/haven">
                    <div style={{backgroundImage: `url(${Haven})`, width: "100%", height: '100%', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <BottomText>Haven</BottomText>
                    </div>
                </Link>
            </Col>
            <Col xs={24} sm={24} md={12} lg={8} xl={8} style={{height: 300}}>
                <Link to="/map/split">
                    <div style={{backgroundImage: `url(${Split})`, width: "100%", height: '100%', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                        <BottomText>Split</BottomText>
                    </div>
                </Link>
            </Col>
        </Row>
    )
}
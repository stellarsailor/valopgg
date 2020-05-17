import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';

const Images = [
    require('../images/map/bind-illust.jpeg'),
    require('../images/map/haven-illust.jpeg'),
    require('../images/map/split-illust.jpeg')
];

const BottomText = styled.div`
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: 2rem;
    font-weight: bold;
`

export default function Map() {

    const arr = ["Bind", "Haven", "Split"]

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <Row>
                    {arr.map((v,index) => (
                        <Col xs={24} sm={24} md={12} lg={8} xl={8} style={{width: '100%', height: 300, backgroundColor: '#202b43', padding: 10, marginTop: 15}} key={index}>
                            <Link to={`/map/${v.toLowerCase()}`}>
                                <div style={{backgroundImage: `url(${Images[index]})`, width: "100%", height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 5}}>
                                    <BottomText>{v}</BottomText>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </Col>
        </Row>
    )
}
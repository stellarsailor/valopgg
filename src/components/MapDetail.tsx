import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Row, Col, Radio, Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const Images = [
    require('../images/map/bind-illust.jpeg'),
    require('../images/map/haven-illust.jpeg'),
    require('../images/map/split-illust.jpeg'),
];

export default function MapDetail(props) {

    const mapArr = ["Bind", "Haven", "Split"]

    const mapName = props.match.params.name;
    const [ side, setSide ] = useState("attacker")
    
    return (
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 1)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <div style={{fontSize: '1.2rem', marginTop: 15, marginBottom: 15}}>
                    {mapArr.map((v, index) => (
                        <Link to={`/map/${v.toLowerCase()}`} style={mapName === v.toLowerCase() ? {fontWeight: 'bold', marginRight: '1.8rem'} : {color: 'gray', marginRight: '1.8rem'} } key={index}>{v}</Link>
                    ))}
                </div>
                <Radio.Group onChange={(e) => setSide(e.target.value)} value={side} >
                    <Radio value={"attacker"} style={{color: 'white'}}>공격</Radio>
                    <Radio value={"defender"} style={{color: 'white'}}>수비</Radio>
                </Radio.Group>
                <div>
                    <img src={require(`../images/map/${mapName}-labels-${side}.svg`)} style={{width: '100%', position: 'absolute', zIndex: 10}} />
                    <img src={require(`../images/map/${mapName}-layout-base.svg`)} style={side === "attacker" ? {width: '100%'} : {width: '100%', transform: 'rotate(180deg)'}} />
                </div>
            </Col>
        </Row>
    )
}
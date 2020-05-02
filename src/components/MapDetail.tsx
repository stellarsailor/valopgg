import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Row, Col, Radio } from 'antd';

const Images = [
    require('../images/map/bind-illust.jpeg'),
    require('../images/map/bind-layout-defense.svg'),
    require('../images/map/bind-layout-offense.svg'),
    require('../images/map/haven-illust.jpeg'),
    require('../images/map/haven-layout-defense.svg'),
    require('../images/map/haven-layout-offense.svg'),
    require('../images/map/split-illust.jpeg'),
    require('../images/map/split-layout-defense.svg'),
    require('../images/map/split-layout-offense.svg'),
];

export default function MapDetail(props) {

    const mapArr = ["Bind", "Haven", "Split"]

    const mapName = props.match.params.name;
    const [ side, setSide ] = useState(1)
    
    return (
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 1)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <div style={{fontSize: '1.2rem', marginTop: 15, marginBottom: 15}}>
                    {mapArr.map((v, index) => (
                        <Link to={`/map/${v.toLowerCase()}`} style={mapName === v.toLowerCase() ? {fontWeight: 'bold', marginRight: '1.8rem'} : {color: 'gray', marginRight: '1.8rem'} } key={index}>{v}</Link>
                    ))}
                </div>

                <Radio.Group onChange={(e) => setSide(e.target.value)} value={side} >
                    <Radio value={1} style={{color: 'white'}} >Attacker</Radio>
                    <Radio value={2} style={{color: 'white'}} >Defender</Radio>
                </Radio.Group>
                <img src={require(`../images/map/${mapName}-layout-${side === 1 ? 'offense' : 'defense' }.svg`)} style={{width: '100%'}} />
            </Col>
        </Row>
    )
}
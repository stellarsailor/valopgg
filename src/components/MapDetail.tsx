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

    const mapName = props.match.params.name;
    const [ side, setSide ] = useState(1)
    
    return (
        <>
            <div style={{fontSize: '1.2rem', marginTop: 15, marginBottom: 15}}>
                <Link to="/map/bind" style={mapName === 'bind' ? {fontWeight: 'bold', marginRight: '1.8rem'} : {color: 'gray', marginRight: '1.8rem'} }>Bind</Link>
                <Link to="/map/haven" style={mapName === 'haven' ? {fontWeight: 'bold', marginRight: '1.8rem'} : {color: 'gray', marginRight: '1.8rem'} }>Haven</Link>
                <Link to="/map/split" style={mapName === 'split' ? {fontWeight: 'bold', marginRight: '1.8rem'} : {color: 'gray', marginRight: '1.8rem'} }>Split</Link>
            </div>

            <Radio.Group onChange={(e) => setSide(e.target.value)} value={side} >
                <Radio value={1} style={{color: 'white'}} >Attacker</Radio>
                <Radio value={2} style={{color: 'white'}} >Defender</Radio>
            </Radio.Group>
            <img src={require(`../images/map/${mapName}-layout-${side === 1 ? 'offense' : 'defense' }.svg`)} style={{width: '100%'}} />
        </>
    )
}
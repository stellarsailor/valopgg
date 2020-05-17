import React, { useState, useEffect } from 'react'
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

const BottomText = styled.div`
    height: 95%;
    display: flex;
    justify-content: center;
    /* align-items: flex-end; */
    font-size: 1.6rem;
    font-weight: bold;
    margin: 1rem 0;
`

export default function MapDetail(props) {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const mapArr = ["Bind", "Haven", "Split"]

    const mapName = props.match.params.name;
    const [ side, setSide ] = useState("attacker")
    
    return (
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 1)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <Row>
                    {mapArr.map((v,index) => (
                        <Col xs={8} sm={8} md={8} lg={8} xl={8} style={{width: '100%', padding: 10}} key={index}>
                            <Link to={`/map/${v.toLowerCase()}`}>
                                <div style={ mapName === v.toLowerCase() ? {backgroundImage: `url(${Images[index]})`, width: "100%", height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 5, border: '1px solid lightgray'} : {backgroundImage: `url(${Images[index]})`, width: "100%", height: '100%', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 5, border: '1px solid rgba(19, 28, 46, 1)', filter: 'grayscale(100%)'} }>
                                    <BottomText>{v}</BottomText>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
                {/* <div style={{fontSize: '1.2rem', marginTop: 15, marginBottom: 15}}>
                    {mapArr.map((v, index) => (
                        <Link to={`/map/${v.toLowerCase()}`} style={mapName === v.toLowerCase() ? {fontWeight: 'bold', marginRight: '1.8rem'} : {color: 'gray', marginRight: '1.8rem'} } key={index}>{v}</Link>
                    ))}
                </div> */}
                <div style={{display: 'flex', justifyContent: 'center', margin: '10px 0'}}>
                    <Radio.Group onChange={(e) => setSide(e.target.value)} value={side} >
                        <Radio value={"attacker"} style={{color: 'white'}}>공격 진영</Radio>
                        <Radio value={"defender"} style={{color: 'white'}}>수비 진영</Radio>
                    </Radio.Group>
                </div>
                {
                    window.innerWidth < 576 ?
                        <TransformWrapper>
                            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                <div>
                                    <div style={{padding: 10}}>
                                        <PlusOutlined style={{backgroundColor: 'rgb(32, 43, 67)', color: 'white', fontSize: '1.4rem', padding: 5}} onClick={zoomIn} />
                                        <MinusOutlined style={{backgroundColor: 'rgb(32, 43, 67)', color: 'white', fontSize: '1.4rem', padding: 5}} onClick={zoomOut} />
                                    </div>
                                    <TransformComponent >
                                        <div style={{width: '100%', height: '100%'}}>
                                            <img src={require(`../images/map/${mapName}-labels-${side}-ko.png`)} style={{width: '100%', position: 'absolute', zIndex: 10}} />
                                            <img src={require(`../images/map/${mapName}-layout-base.svg`)} style={side === "attacker" ? {width: '100%'} : {width: '100%', transform: 'rotate(180deg)'}} />
                                        </div>
                                    </TransformComponent>
                                </div>
                            )}
                        </TransformWrapper>
                    :
                    <div>
                        <img src={require(`../images/map/${mapName}-labels-${side}-ko.png`)} style={{width: '100%', position: 'absolute', zIndex: 10}} />
                        <img src={require(`../images/map/${mapName}-layout-base.svg`)} style={side === "attacker" ? {width: '100%'} : {width: '100%', transform: 'rotate(180deg)'}} />
                    </div>
                }

            </Col>
        </Row>
    )
}
import React, { useState, useEffect } from 'react'
import MetaTags from 'react-meta-tags';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Row, Col, Radio, Checkbox } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Adfit from './subcomponents/Adfit';
import capitalizeFirstLetter from '../logics/capitalizeFirstLetter';
import { staticServer } from '../serverUrl'
import SideAds from './subcomponents/SideAds';

const Images = [
    `${staticServer}/map/bind-illust.jpeg`,
    `${staticServer}/map/haven-illust.jpeg`,
    `${staticServer}/map/split-illust.jpeg`,
    `${staticServer}/map/ascent-illust.jpeg`,
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

    const mapArr = ["Bind", "Haven", "Split", "Ascent"]

    const mapName = props.match.params.name;
    const [ side, setSide ] = useState("attacker")
    const [ barrier, setBarrier ] = useState(true)
    
    return (
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 1)', minHeight: 800}} >
            <SideAds thicc={true} />
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <MetaTags>
                    <title>{mapName} - 발로란트 맵 정보, 용어</title>
                    <meta name="description" content={`${mapName} 발로란트 맵에 대한 정보와 용어(콜아웃)를 확인할 수 있습니다.`} />
                </MetaTags>
                <Row>
                    {mapArr.map((v,index) => (
                        <Col xs={12} sm={12} md={6} lg={6} xl={6} style={{width: '100%', padding: 10}} key={index}>
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
                {/* {window.innerWidth < 576 ? <Adfit adUnit="DAN-skxug7w2pkjd" adWidth="320" adHeight="100" /> : <Adfit adUnit="DAN-qe74ylevqulf" adWidth="728" adHeight="90" /> } */}

                <div style={{display: 'flex', justifyContent: 'center', margin: '10px 0', position: 'absolute', right: 0, zIndex: 20}}>
                    <Radio.Group onChange={(e) => setSide(e.target.value)} value={side} >
                        <Radio value={"attacker"} style={{color: 'white'}}>공격 진영</Radio>
                        <Radio value={"defender"} style={{color: 'white'}}>수비 진영</Radio>
                    </Radio.Group>
                    <Checkbox checked={barrier} onChange={(e) => setBarrier(e.target.checked)} style={{color: 'white'}}>
                        배리어
                    </Checkbox>
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
                                            <img src={`${staticServer}/map/${mapName}-labels-${side}-ko.png`} style={{width: '100%', position: 'absolute', zIndex: 10}} alt="발로란트 맵 용어 콜아웃" />
                                            {
                                                barrier ? 
                                                <img src={`${staticServer}/map/${mapName}-layout-barrier.png`} style={side === "attacker" ? {width: '100%', position: 'absolute', zIndex: 5} : {width: '100%', position: 'absolute', zIndex: 5, transform: 'rotate(180deg)'}} alt={`Valorant map ${mapName}`} />
                                                : null
                                            }
                                            <img src={`${staticServer}/map/${mapName}-layout-base.png`} style={side === "attacker" ? {width: '100%'} : {width: '100%', transform: 'rotate(180deg)'}} alt={`Valorant map ${mapName}`} />
                                        </div>
                                    </TransformComponent>
                                </div>
                            )}
                        </TransformWrapper>
                    :
                    <div>
                        <img src={`${staticServer}/map/${mapName}-labels-${side}-ko.png`} style={{width: '100%', position: 'absolute', zIndex: 10}} alt="발로란트 맵 용어 콜아웃" />
                        {
                            barrier ? 
                            <img src={`${staticServer}/map/${mapName}-layout-barrier.png`} style={side === "attacker" ? {width: '100%', position: 'absolute', zIndex: 5} : {width: '100%', position: 'absolute', zIndex: 5, transform: 'rotate(180deg)'}}  alt={`Valorant map ${mapName}`} />
                            : null
                        }
                        <img src={`${staticServer}/map/${mapName}-layout-base.png`} style={side === "attacker" ? {width: '100%'} : {width: '100%', transform: 'rotate(180deg)'}}  alt={`Valorant map ${mapName}`} />
                    </div>
                }
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <div style={{fontWeight: 'bold', fontSize: '1.6rem', fontStyle: 'italic'}}>{capitalizeFirstLetter(mapName)}</div>
                    <div style={{margin: '2rem 0', fontSize: '1.4rem'}}>
                        해당 콜아웃(용어)은 발로그에서 임의로 붙인 용어이며, 발로란트의 공식 용어가 아닙니다.
                    </div>
                    <img src={require('../images/mainLogo.png')} style={{width: '30%', margin: '1rem 0'}} />
                </div>
            </Col>
            <SideAds />
        </Row>
    )
}
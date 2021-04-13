import React, { useState, useEffect } from 'react'
import MetaTags from 'react-meta-tags';
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Row, Col, Divider, BackTop, Spin } from 'antd';
import { AppstoreOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Element , scroller } from 'react-scroll'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ScrollContainer from 'react-indiana-drag-scroll'
import WeaponRender from './WeaponRender';
import queryString from 'query-string'
// import Adfit from './subcomponents/Adfit';
import SideAds from '../Ads/SideAds';

import { weapon } from '../../data/weapon'
import { apiServer, staticServer } from '../../serverUrl'
import { dynamicSort } from '../../logics/dynamicSort';
import { isMobile } from 'react-device-detect';
import Adsense from '../Ads/Adsense';
import Axios from 'axios';

type skinType = {
    id: number;
    weaponId: number;
    name_ko: string;
    category: string;
    level: number;
    cost: string;
    grade: number;
}

const WeaponCategory = styled.div`
    background-color: #273552;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
`

const TitleText = styled.div`
    font-size: 1.6rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-weight: bold;
`

const SkinText = styled.div`
    font-size: 1.4rem;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
`

const SpecTitle = styled((props: any) => <Col span={24} {...props} />)`
    margin-top: 1rem;
    color: #7399bf;
    font-weight: bold;
    font-size: 1rem;
`

const SpecLeft = styled((props: any) => <Col span={8} {...props} />)`
    padding-left: 10px;
    color: gray;
`

const SpecRight = styled((props: any) => <Col span={16} {...props} />)`
    font-weight: bold;
`

export default function WeaponDetail(props) {

    const weaponName = props.match.params.name;
    let initialWeaponSkin = '';

    const [ loading, setLoading ] = useState(false)
    const [ skins, setSkins ] = useState<Array<skinType>>([])
    const [ selectedSkinElement, setSelectedSkinElement ] = useState<skinType | null>(null)

    const qs: any = queryString.parse(props.location.search)

    if(Object.entries(qs).length === 0){
        initialWeaponSkin = 'normal'
    } else {
        initialWeaponSkin = qs.skin
    }
    
    const selectedWeapon = weapon.filter(v => v.name.toLowerCase() === weaponName)[0]

    useEffect(() => {
        setLoading(true)
        Axios.get(`${apiServer}/weapon/skins/${selectedWeapon.id}`)
        .then(res => {
            setLoading(false)
            // console.log(res.data)
            setSkins(res.data)
            setSelectedSkinElement(res.data.filter(v => v.category === initialWeaponSkin)[0])

            weaponScroll()
        })
    },[weaponName])

    const weaponScroll = () => {
        // if(window.innerWidth < 576){
            scroller.scrollTo('scroll-to-element-pc', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutQuart'
            })
        // } 
    }

    return (
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <SideAds thicc={true} />
            <Element name="scroll-to-element-pc"></Element>
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <MetaTags>
                    <title>{selectedWeapon.name_ko} - 무기 정보 및 스킨</title>
                    <meta name="description" content={`${selectedWeapon.name_ko} 탄창, 관통력, 주 공격모드, 보조 공격모드, 연사 횟수, 데미지, 무기 스킨 등 자세한 정보를 확인하세요.`} />
                </MetaTags>
                {/* { window.innerWidth < 576 ? <Adfit adUnit="DAN-skxug7w2pkjd" adWidth="320" adHeight="100" /> : <Adfit adUnit="DAN-qe74ylevqulf" adWidth="728" adHeight="90" /> } */}
                <div style={{fontSize: '1.1rem', color: 'gray', margin: 10}}>
                    <Link to="/weapon"><AppstoreOutlined /></Link> <span style={{marginLeft: 10, marginRight: 10}}>{'>'}</span>
                    {
                        window.innerWidth < 576 ? 
                            <a style={{color: 'white'}} onClick={() => props.history.goBack()}>{selectedWeapon.category}</a> 
                        :
                            <Link to="/weapon" style={{color: 'white'}}>{selectedWeapon.category}</Link>
                    }
                    <span style={{marginLeft: 10, marginRight: 10}}>{'>'}</span>
                    <span style={{color: '#ff324c'}}>{selectedWeapon.name}</span>
                </div>
                <Row style={{backgroundColor: '#202b43'}}>
                {
                    window.innerWidth < 576 ? 
                        null
                    :
                    <Col xs={0} sm={8} md={8} lg={4} xl={4} style={{ padding: 10, display: 'flex', flexDirection: 'column'}}>
                        <WeaponCategory>{selectedWeapon.category}</WeaponCategory>
                        {weapon.filter((v) => v.category === selectedWeapon.category).map((v, index) => <WeaponRender key={index} name={v.name} name_kr={v.name_ko} cost={v.cost} resize={selectedWeapon.category === 'Sidearm' ? true : false } selectedWeapon={selectedWeapon.name} />)}
                    </Col>
                }
                <Col xs={24} sm={16} md={16} lg={20} xl={20}>
                    {
                        loading && <div style={{width: '100%', height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center'}}><Spin /></div>
                    }
                    {
                        !loading && selectedSkinElement &&
                        <Row style={{margin: 10, backgroundColor: 'rgb(24, 35, 56)'}} justify="center">
                            <Col xs={24} sm={24} md={18} lg={18} xl={16} style={{ padding: '1rem'}}>
                                <TitleText>{selectedWeapon.name_ko}</TitleText>
                                <TransformWrapper>
                                {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                                    <div style={{border: '1px solid gray', backgroundColor: '#273552', }}>
                                        <div style={{padding: 10, position: 'absolute', right: '1rem', zIndex: 5}}>
                                            <PlusOutlined style={{backgroundColor: 'rgb(32, 43, 67)', color: 'white', fontSize: '1.4rem', padding: 5}} onClick={zoomIn} />
                                            <MinusOutlined style={{backgroundColor: 'rgb(32, 43, 67)', color: 'white', fontSize: '1.4rem', padding: 5}} onClick={zoomOut} />
                                        </div>
                                        <TransformComponent>
                                            <div style={{display: 'flex', minHeight: 300, justifyContent: 'center', alignItems: 'center', padding: '1rem', }}>
                                                <img 
                                                src={(`${staticServer}/weaponskins/${selectedSkinElement.category}-${selectedWeapon.name.toLowerCase()}${selectedSkinElement.level === 0 ? '' : `-${selectedSkinElement.level}`}.png`)} 
                                                style={{width: '90%'}} alt="발로란트 무기 스킨" />
                                            </div>
                                        </TransformComponent>
                                    </div>
                                )}
                            </TransformWrapper>
                                { isMobile ? <Adsense type="mobilewide" /> : null }
                                {selectedSkinElement.level !== 0 ? 
                                    <div style={{textAlign: 'center', marginTop: 10}}>
                                        {skins.filter(v => v.category === selectedSkinElement.category).map(bundle => 
                                            <a key={bundle.level} 
                                            style={{fontSize: '1rem', fontWeight: 'bold', margin: '10px', color: 'lightgray'}} 
                                            onClick={() => {
                                                setSelectedSkinElement(skins.filter(f => f.id === bundle.id)[0])
                                                weaponScroll()
                                            }}>
                                                레벨{bundle.level}
                                            </a>
                                        )}
                                    </div>
                                : null}
                                <SkinText>{selectedSkinElement.name_ko} 
                                    <span style={{fontSize: '1rem', color: 'lightgray', marginLeft: 10}}>{selectedSkinElement.cost} {parseInt(selectedSkinElement.cost) > 0 ? ` (= 약 ${parseInt(selectedSkinElement.cost) * 11}원)` : null}
                                    </span>
                                </SkinText>
                                <Col span={24} >
                                    <ScrollContainer style={{overflowX: 'scroll', flexWrap: 'nowrap', display:'flex'}}>
                                        {
                                            skins.length !== 0 && skins.filter(v => v.level === 0 || v.level === 1).map(v => (
                                                <span style={{flex: '0 0 auto', padding: 5, width: '40%'}} key={v.id}>
                                                    <a style={{backgroundColor: '#273552', height: '100%',display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem', border: `1px solid ${v.category === selectedSkinElement.category ? '#00ffae' : 'gray'}`}}>
                                                        <img 
                                                        src={(`${staticServer}/weaponskins/${v.category}-${weaponName.toLowerCase()}${v.level === 0 ? '' : `-${v.level}`}.png`)} 
                                                        style={{width: '100%'}} 
                                                        onClick={() => { 
                                                            setSelectedSkinElement(skins.filter(f => f.id === v.id)[0])
                                                            weaponScroll()
                                                        }}
                                                        />
                                                    </a>
                                                </span>
                                            ))
                                        }
                                    </ScrollContainer>
                                </Col>
                            </Col>
                            <Col xs={24} sm={24} md={16} lg={16} xl={8} style={{backgroundColor: 'rgb(24, 35, 56)', padding: '1rem'}}>
                                <Row>
                                    <SpecTitle>
                                        상세 정보
                                    </SpecTitle>
                                    <SpecLeft>
                                        탄창
                                    </SpecLeft>
                                    <SpecRight>
                                        {selectedWeapon.capacity}
                                    </SpecRight>
                                    <SpecLeft>
                                        장착 시간
                                    </SpecLeft>
                                    <SpecRight>
                                        {selectedWeapon.equipTime} 초
                                    </SpecRight>
                                    <SpecLeft>
                                        재장전 시간
                                    </SpecLeft>
                                    <SpecRight>
                                        {selectedWeapon.reloadTime} 초
                                    </SpecRight>
                                    <SpecLeft>
                                        관통력
                                    </SpecLeft>
                                    <SpecRight>
                                        {selectedWeapon.penetration}
                                    </SpecRight>
                                    <SpecTitle>
                                        주 공격
                                    </SpecTitle>
                                    <SpecLeft>
                                        모드
                                    </SpecLeft>
                                    <SpecRight>
                                        {selectedWeapon.primaryMode}
                                    </SpecRight>
                                    <SpecLeft>
                                        연사 횟수
                                    </SpecLeft>
                                    <SpecRight>
                                        {selectedWeapon.primaryRate}
                                    </SpecRight>
                                    {
                                        selectedWeapon.altMode ? 
                                            <>
                                            <SpecTitle>
                                                보조 공격 
                                            </SpecTitle>
                                            <SpecLeft>
                                                모드
                                            </SpecLeft>
                                            <SpecRight>
                                                {selectedWeapon.altMode}
                                            </SpecRight>
                                            <SpecLeft>
                                                연사 횟수
                                            </SpecLeft>
                                            <SpecRight>
                                                {selectedWeapon.altRate}
                                            </SpecRight>
                                            </>
                                        :   
                                        null
                                    }

                                    <Divider orientation="left" style={{color: 'white', fontWeight: 'bold'}}>데미지</Divider>
                                    {
                                        selectedWeapon.damage[0] !== undefined ? 
                                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <div>{selectedWeapon.damage[0].distance}m</div>
                                            <Row justify="center">
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                                                    <img src={require(`../../images/body.png`)} style={{width: '2rem'}} alt="발로란트 거리별 무기 데미지" />
                                                </Col>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>{selectedWeapon.damage[0].damageSpec.map((v, index) => <div style={{fontWeight: 'bold', color: '#49b4ff'}} key={index}>{v}</div>)}</Col>
                                            </Row>
                                        </Col>
                                        :
                                        null
                                    }
                                    {
                                        selectedWeapon.damage[1] !== undefined ? 
                                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <div>{selectedWeapon.damage[1].distance}m</div>
                                            <Row justify="center">
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                                                    <img src={require(`../../images/body.png`)} style={{width: '1.6rem'}} alt="발로란트 거리별 무기 데미지" />
                                                </Col>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>{selectedWeapon.damage[1].damageSpec.map((v, index) => <div style={{fontWeight: 'bold', color: '#8dc1ec'}} key={index}>{v}</div>)}</Col>
                                            </Row>
                                        </Col>
                                        :
                                        null
                                    }
                                    {
                                        selectedWeapon.damage[2] !== undefined ? 
                                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <div>{selectedWeapon.damage[2].distance}m</div>
                                            <Row justify="center">
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                                                    <img src={require(`../../images/body.png`)} style={{width: '1.2rem'}} alt="발로란트 거리별 무기 데미지" />
                                                </Col>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>{selectedWeapon.damage[2].damageSpec.map((v, index) => <div style={{fontWeight: 'bold', color: '#bbc9e0'}} key={index}>{v}</div>)}</Col>
                                            </Row>
                                        </Col>
                                        :
                                        null
                                    }
                                </Row>
                            </Col>
                        </Row>
                    }
                    </Col>
                </Row>
                {/* { window.innerWidth < 576 ? <Adfit adUnit="DAN-u7xd8qtoidkl" adWidth="320" adHeight="100" /> : <Adfit adUnit="DAN-sl14jpq0o8kl" adWidth="728" adHeight="90" /> } */}
            </Col>
            <SideAds />
        </Row>
    )
}
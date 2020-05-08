import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { Row, Col, Divider, BackTop } from 'antd';
import { AppstoreOutlined, UserOutlined } from '@ant-design/icons';
import { weapon } from '../datas/weapon'
import { skin } from '../datas/weaponSkin'
import WeaponRender from './subcomponents/WeaponRender';

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

export default function WeaponDetail(props) {
    window.scrollTo(0, 0);

    const weaponName = props.match.params.name;
    
    const data = weapon.filter(v => v.name.toLowerCase() === weaponName)[0]
    
    return (
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <BackTop />
                <div style={{fontSize: '1.1rem', color: 'gray', margin: 10}}>
                    <Link to="/weapon"><AppstoreOutlined /></Link> <span style={{marginLeft: 10, marginRight: 10}}>></span>
                    {
                        window.innerWidth < 576 ? 
                            <a style={{color: 'white'}} onClick={() => props.history.goBack()}>{data.category}</a> 
                        :
                            <Link to="/weapon" style={{color: 'white'}}>{data.category}</Link>
                    }
                    <span style={{marginLeft: 10, marginRight: 10}}>></span>
                    <span style={{color: 'white'}}>{data.name}</span>
                </div>
                <Row style={{backgroundColor: '#202b43'}}>
                {
                        window.innerWidth < 576 ? 
                            null
                        :
                        <Col xs={12} sm={12} md={12} lg={4} xl={4} style={{ padding: 10, display: 'flex', flexDirection: 'column'}}>
                            <WeaponCategory>{data.category}</WeaponCategory>
                            {weapon.filter((v) => v.category === data.category).map((v, index) => <WeaponRender key={index} name={v.name} name_kr={v.name_ko} cost={v.cost} resize={data.category === 'Sidearm' ? true : false } selectedWeapon={data.name} />)}
                        </Col>
                    }
                    <Col xs={24} sm={12} md={12} lg={20} xl={20}>
                        <Row style={{margin: 10, backgroundColor: 'rgb(24, 35, 56)'}} justify="center">
                            <Col xs={24} sm={24} md={18} lg={18} xl={18} style={{ padding: '1rem', marginBottom: '1rem'}}>
                                <TitleText>{data.name_ko}</TitleText>
                                <div style={{display: 'flex', justifyContent: 'center'}}>
                                    <img src={require(`../images/weaponskins/normal-${data.name.toLowerCase()}-skin.png`)} style={{width: '80%', alignSelf: 'flex-start'}} />
                                </div>
                                <div style={{marginLeft: '1rem',}}>탄창 : {data.capacity}</div>
                                <div style={{marginLeft: '1rem',}}>관통력 : {data.penetration}</div>

                                <Row style={{backgroundColor: 'rgb(24, 35, 56)', padding: '1rem'}}>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <div>주 공격 모드 : {data.primaryMode}</div>
                                        <div>연사 횟수 : {data.primaryRate}</div>
                                    </Col>
                                    {
                                        data.altMode ? 
                                            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                                <div>보조 공격 모드 : {data.altMode}</div>
                                                <div>연사 횟수 : {data.altRate}</div>
                                            </Col>
                                        :   
                                            null
                                    }
                                </Row>

                                <Row style={{backgroundColor: 'rgb(24, 35, 56)', padding: '1rem'}}>
                                    <Divider orientation="left" style={{color: 'white', fontWeight: 'bold'}}>데미지</Divider>
                                    {
                                        data.damage[0] !== undefined ? 
                                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <div>{data.damage[0].distance}m</div>
                                            <Row justify="center">
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                                                    <img src={require(`../images/body.png`)} style={{width: '2rem'}} />
                                                </Col>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>{data.damage[0].damageSpec.map((v, index) => <div style={{fontWeight: 'bold', color: '#49b4ff'}} key={index}>{v}</div>)}</Col>
                                            </Row>
                                        </Col>
                                        :
                                        null
                                    }
                                    {
                                        data.damage[1] !== undefined ? 
                                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <div>{data.damage[1].distance}m</div>
                                            <Row justify="center">
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                                                    <img src={require(`../images/body.png`)} style={{width: '1.6rem'}} />
                                                </Col>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>{data.damage[1].damageSpec.map((v, index) => <div style={{fontWeight: 'bold', color: '#8dc1ec'}} key={index}>{v}</div>)}</Col>
                                            </Row>
                                        </Col>
                                        :
                                        null
                                    }
                                    {
                                        data.damage[2] !== undefined ? 
                                        <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                                            <div>{data.damage[2].distance}m</div>
                                            <Row justify="center">
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                                                    <img src={require(`../images/body.png`)} style={{width: '1.2rem'}} />
                                                </Col>
                                                <Col xs={12} sm={12} md={12} lg={12} xl={12}>{data.damage[2].damageSpec.map((v, index) => <div style={{fontWeight: 'bold', color: '#bbc9e0'}} key={index}>{v}</div>)}</Col>
                                            </Row>
                                        </Col>
                                        :
                                        null
                                    }
                                </Row>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{backgroundColor: 'rgb(24, 35, 56)', padding: '1rem'}}>
                                <TitleText>스킨 갤러리</TitleText>
                                <Row>
                                    {
                                        skin.filter(v => v.name.toLowerCase() === weaponName)[0].skins.map(v => (
                                            <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{padding: 10}}>
                                                <div><span style={{fontSize: '1.3rem'}}>{v.name_ko}</span> ({v.cost})</div>
                                                <img src={require(`../images/weaponskins/${v.category}-${weaponName.toLowerCase()}-${v.level === 0 ? '' : `level-${v.level}-`}skin.png`)} style={{backgroundColor: '#273552', width: '100%'}} />
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
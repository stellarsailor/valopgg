import React from 'react'
import MetaTags from 'react-meta-tags';
// import styled from 'styled-components'
import { Row, Col, BackTop } from 'antd';
import { Link } from 'react-router-dom'

// import SkillCount from './subcomponents/SkillCount';
import { agent } from '../datas/agent'
// import { strat } from '../datas/strat'

export default function Agent(props) {

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <BackTop/>
                <MetaTags>
                <title>발로란트 요원 정보, 스킬, 플레이 가이드, 맵 별 공략, 궁극기 대사</title>
                    <meta name="description" content={`발로란트 요원들의 스킬 및 정보, 플레이 가이드, 맵 별 공략, 궁극기 대사 등을 확인가능합니다.`} />
                </MetaTags>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{position: 'absolute', fontSize: '1.5rem'}}>정보를 확인할 요원을 선택해주세요.</div>
                    <div style={{position: 'absolute', width: '100%', backgroundColor: 'black', opacity: 0.3}}></div>
                    <img src={require('../images/official-background-wide-darken.jpg')} style={{width: '100%'}} alt="background loading screenshot" />
                </div>
                <Row justify="center" style={{marginTop: 15, marginBottom: 15}}>
                    { agent.map((v, index) => (
                        <Col xs={24} sm={24} md={12} lg={8} xl={8} key={v.id}>
                            <div style={{position: 'relative', backgroundImage: 'linear-gradient(rgb(32, 43, 67), rgb(5,15,30))', borderRadius: 10, margin: '1rem', overflow: 'hidden'}}>
                                <Link to={`/agent/${v.name.toLowerCase()}`}>
                                    <div style={{fontSize: '1.8rem', fontWeight: 'bold', position: 'absolute', right: '5%', bottom: '5%', zIndex: 10}}>{v.name_ko}</div>
                                    <img src={require(`../images/agents/${v.name.toLowerCase()}.png`)} style={{width: '100%', height: 'auto', zIndex: 5, position: 'relative'}} alt="agent official" />
                                    <div style={{fontSize: '4rem', fontWeight: 'bold', position: 'absolute', left: '5%', top: '-5%', zIndex: 0, opacity: 0.4, color: 'white'}}>{v.name}</div>
                                </Link>
                            </div>
                        </Col>  
                    ))}
                </Row>
            </Col>
        </Row>
    )
}
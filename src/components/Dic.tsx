import React from 'react'
import MetaTags from 'react-meta-tags';
// import styled from 'styled-components'
import { Row, Col, BackTop } from 'antd';
import { dic } from '../datas/dic'
import { dynamicSort } from '../logics/dynamicSort'
import DicWordRender from './subcomponents/DicWordRender';
// import Adfit from './subcomponents/Adfit';
import SideAds from './subcomponents/SideAds';

export default function Dic() {

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <SideAds thicc={true} />
            <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{padding: '1rem 0'}}>
                <BackTop/>
                <MetaTags>
                    <title>발로그 발로란트 용어 사전</title>
                    <meta name="description" content={`발로란트에서 사용하는 모든 용어 사전`} />
                </MetaTags>
                {/* { window.innerWidth < 576 ? <Adfit adUnit="DAN-skxug7w2pkjd" adWidth="320" adHeight="100" /> : <Adfit adUnit="DAN-qe74ylevqulf" adWidth="728" adHeight="90" /> } */}
                <div style={{backgroundColor: '#202b43', padding: '5%'}}>
                    {/* 전체 ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ A-Z 0-9 */}
                    {dic.slice(0).sort(dynamicSort('word_ko')).map((v) => (
                        <DicWordRender id={v.id} word_ko={v.word_ko} word_en={v.word_en} desc={v.desc} isImg={v.isImg} key={v.id} />
                    ))}
                    <div style={{margin: '2rem 0', fontSize: '1.4rem'}}>
                        해당 용어 사전은 발로그에서 임의로 선정하여 뜻을 붙인 용어들로 구성되었으며, 발로란트의 공식 용어가 아닙니다.
                    </div>
                </div>
            </Col>
            <SideAds />
        </Row>
    )
}
import React from 'react'
import styled from 'styled-components'
import { Row, Col, BackTop } from 'antd';
import { dic } from '../datas/dic'
import { dynamicSort } from '../logics/dynamicSort'
import DicWordRender from './subcomponents/DicWordRenser';

export default function Dic() {

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{padding: '1rem 0'}}>
                <BackTop/>
                <div style={{backgroundColor: '#202b43', padding: '5%'}}>
                    {/* 전체 ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ A-Z 0-9 */}
                    {dic.slice(0).sort(dynamicSort('word_ko')).map((v) => (
                        <DicWordRender id={v.id} word_ko={v.word_ko} word_en={v.word_en} desc={v.desc} isImg={v.isImg} />
                    ))}
                </div>
            </Col>
        </Row>
    )
}
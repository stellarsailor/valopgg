import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import { dic } from '../datas/dic'


const dynamicSort = (property: string) => {
    let sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a, b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
}

export default function Dic() {

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{padding: '1rem'}}>
                <div style={{backgroundColor: '#202b43', padding: '5%'}}>
                    {/* 전체 ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ A-Z 0-9 */}
                    {dic.slice(0).sort(dynamicSort('word')).map((v) => (
                        <div key={v.id} style={{fontSize: '1rem'}}>
                            <div style={{marginBottom: '1.2rem'}}>
                                <span style={{fontWeight: 'bold', fontSize: '1.2rem'}}>{v.word}</span>
                                <div>{v.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </Col>
        </Row>
    )
}
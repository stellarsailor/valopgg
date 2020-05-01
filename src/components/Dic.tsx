import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import ReactMarkdown from 'react-markdown'
import { dic } from '../datas/dic'

const input = `

`

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
        <>
            전체 ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎ A-Z 0-9
            {dic.slice(0).sort(dynamicSort('word')).map((v) => (
                <div key={v.id} style={{fontSize: '1.2rem'}}>
                    <div style={{marginBottom: 20}}>{v.word} : {v.desc}</div>
                </div>
            ))}
        </>
    )
}
import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Row, Col, Button } from 'antd';

import { question } from '../datas/question'

export default function AgentRecommendation() {

    const [ point, setPoint ] = useState({
        "breach": 0,
        "brimstone": 0,
        "cypher": 0,
        "jett": 0,
        "omen": 0,
        "phoenix": 0,
        "raze": 0,
        "sage": 0,
        "sova": 0,
        "viper": 0,
    })

    const onAccumulate = useCallback((agentName, increase, tf) => {
        let temp = {
            "breach": 0,
            "brimstone": 0,
            "cypher": 0,
            "jett": 0,
            "omen": 0,
            "phoenix": 0,
            "raze": 0,
            "sage": 0,
            "sova": 0,
            "viper": 0,
        };
        Object.assign(temp, point)
        agentName.map((v, index) => { 
            if(v in temp){
                if(tf){
                    temp[agentName[index]] = temp[agentName[index]] + increase[index]
                } else {
                    temp[agentName[index]] = temp[agentName[index]] - 1
                }
            } 
        })
        setPoint(temp);
    },[point])

    return(
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{position: 'absolute', fontSize: '1.5rem'}}>Yes or No 질문에 대답을 고르고 나에게 맞는 요원을 찾아보세요!</div>
                <div style={{position: 'absolute', width: '100%', backgroundColor: 'black', opacity: 0.3}}></div>
                <img src={require('../images/official-background-wide-darken.png')} style={{width: '100%'}} />
            </div>
            
            <Button type="primary">시작하기</Button>
            {JSON.stringify(point)}

            {question.map((v) => (
                <>
                    {v.question}
                    <Button onClick={() => onAccumulate(v.action, v.point, true)}>true</Button>
                    <Button onClick={() => onAccumulate(v.action, v.point, false)}>false</Button>
                    <p></p>
                </>
            ))}

            {Object.keys(point).reduce((a, b) => point[a] > point[b] ? a : b)}
        </>
    )
}
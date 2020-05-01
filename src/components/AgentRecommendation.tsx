import React, { useState, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row, Col, Button, Progress } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import capitalizeFirstLetter from '../logics/capitalizeFirstLetter'

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

    const [ shuffledQuestion, setShuffledQuestion ] = useState<any>([]);
    const [ page, setPage ] = useState<number>(-1)

    useEffect(() => {
        setShuffledQuestion(shuffle(question))
    },[])

    function shuffle (array: any) {
        let i = array.length;
        while (i--) {
            const ri = Math.floor(Math.random() * (i + 1));
            [array[i], array[ri]] = [array[ri], array[i]];
        }
        return array;
    }

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
        setPage(page + 1)
    },[point, page])

    return(
        <>
            {
                page === -1 ?
                    <>
                        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{position: 'absolute', fontSize: '1.5rem'}}>나에게 맞는 요원 찾기</div>
                            <div style={{position: 'absolute', width: '100%', backgroundColor: 'black', opacity: 0.3}}></div>
                            <img src={require('../images/official-background-wide-darken.png')} style={{width: '100%'}} />
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: 20, padding: '1rem'}}>
                            <div style={{fontSize: '1.2rem'}}>Yes or No 질문에 대답을 고르고 나에게 맞는 요원을 찾아보세요!</div>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
                            <Button type="primary" onClick={() => setPage(page+1)}>시작하기</Button>
                        </div>
                    </>
                :
                    null
            }

            { page === -1 ? 
                null
            :
                page === question.length ?
                    <Row justify="center" style={{padding: '1rem', backgroundColor: '#202b43'}}>
                        <Col xs={24} sm={22} md={20} lg={20} xl={15} >
                            <div style={{fontSize: '1.5rem'}}>
                                추천 캐릭터는 {capitalizeFirstLetter(Object.keys(point).reduce((a, b) => point[a] > point[b] ? a : b))} 입니다!
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center', marginTop: 10}}>
                                <Link to={`/agent?name=${Object.keys(point).reduce((a, b) => point[a] > point[b] ? a : b)}`}><Button type="primary" icon={<SearchOutlined />}>정보 보기</Button></Link>
                            </div>
                            <img src={require(`../images/agents/${Object.keys(point).reduce((a, b) => point[a] > point[b] ? a : b)}-standing.png`)} style={{width: '100%'}} />
                        </Col>
                    </Row>
                :
                    <Row justify="center" style={{fontSize: '1.5rem', padding: '1rem', backgroundColor: '#202b43'}}>
                        <Col xs={24} sm={22} md={20} lg={20} xl={15} >
                            <div style={{minHeight: '6rem'}}>
                                {page+1}. {shuffledQuestion[page].question}
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <Button type="primary" onClick={() => onAccumulate(shuffledQuestion[page].action, shuffledQuestion[page].point, true)} style={{fontWeight: 'bold', margin: '2rem', width: '5rem', height: '2.5rem'}}>True</Button>
                                <Button type="primary" onClick={() => onAccumulate(shuffledQuestion[page].action, shuffledQuestion[page].point, false)} style={{fontWeight: 'bold', margin: '2rem', width: '5rem', height: '2.5rem'}}>False</Button>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>
                                <Progress percent={page / question.length * 100} showInfo={false} />
                            </div>
                        </Col>
                    </Row>
            }
        </>
    )
}

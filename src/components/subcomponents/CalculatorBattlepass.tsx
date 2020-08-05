import React, { useState, useEffect, useCallback } from 'react'
import { Row, Col, Select, Input, Typography, Radio, Button, Checkbox } from 'antd';
import styled from 'styled-components'
import { battlepass } from '../../datas/battlepass'
import { strat } from '../../datas/strat';
import { start } from 'repl';
import { inherits } from 'util';
import { Link } from 'react-router-dom';

const RenderEachTier = styled.div`
    background-color: ${ props => props.selected ? '#00ffae' : null };
    display: flex;
    justify-content: space-between;
`

const BigText = styled.div`
    font-size: 1.2rem;
    margin-bottom: 1rem;
`

const TabMenu = styled.span`
    font-size: ${props => props.isMobile ? '1.2rem' : '1.4rem' };
    border-bottom: ${props => props.selected ? '1px solid white' : '0px solid gray' };
    color: ${props => props.selected ? 'white' : 'gray' };
`

export default function CalculatorBattlepass () {

    const [ selectedAct, setSelectedAct ] = useState<number>(battlepass.length - 1);
    const [ openList, setOpenList ] = useState(false)

    const handleAct = useCallback((act: number) => {
        setSelectedAct(act)
        setOpenList(false)
        setStartTier(0)
        setGoalTier(0)
    },[])

    const battlepassWithExp = battlepass[selectedAct].contents.map(v => {
        const expObj = { exp : (v.tier * 1000) + 2000 }
        return { ...v, ...expObj}
    })

    const [ startTier, setStartTier ] = useState<number>(0)
    const [ goalTier, setGoalTier ] = useState<number>(0)

    const [ sumExp, setSumExp ] = useState(0)
    const [ pcBangScailing, setPcBangScailing ] = useState(1)

    const handlePcBangScailing = useCallback((param) => {
        if(param) setPcBangScailing(1.2)
        else setPcBangScailing(1)
    },[])

    useEffect(() => {
        if(startTier !== 0 && goalTier !== 0){
            if(startTier == 50 && goalTier == 50){
                setSumExp(53000)
            } else {
                let sumTemp = 0
                battlepassWithExp.map(v => {
                    if(startTier < v.tier && v.tier <= goalTier)
                    sumTemp += v.exp
                })
                setSumExp(sumTemp)
            }
        }
    },[startTier, goalTier])

    return (
        <Row>
            {
                openList ? 
                <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{}}>
                    {battlepass.map( (v, index) => 
                        <div style={{margin: '1rem 0'}} >
                            <a onClick={() => handleAct(index)}>
                                <TabMenu selected={true} >{v.title}</TabMenu>
                            </a>
                        </div>
                        )}
                </Col>
                :
                <>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div style={{fontSize: '1.4rem', margin: '1rem'}}>
                        {battlepass[selectedAct].title} <span style={{fontSize: '1.2rem'}}>({battlepass[selectedAct].deadline})</span> 
                        <a style={{color: 'gray', marginLeft: '1rem', fontSize: '1.2rem'}} onClick={() => setOpenList(true)}>목록</a>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{backgroundColor: 'rgb(24, 35, 56)', border: '0px solid gray', width: '100%'}}>
                    <div style={{height: 400, overflowY: 'scroll', padding: 10}}>
                        {battlepassWithExp.map(v => 
                        <>
                            <RenderEachTier selected={ startTier <= v.tier && v.tier <= goalTier ? true : false }>
                                <div style={startTier <= v.tier && v.tier <= goalTier ? {color: 'black'} : {color: 'white'}}>
                                    {
                                        v.isWeapon !== false ? 
                                            <Link to={`/weapon/${v.isWeapon}`} style={startTier <= v.tier && v.tier <= goalTier ? {color: 'black'} : {color: 'orange'}}
                                            > Tier {v.tier} - {v.reward}</Link>
                                        :
                                            <span> Tier {v.tier} - {v.reward}</span>
                                    }
                                </div> 
                                <div>
                                    <a onClick={() => setStartTier(v.tier)} style={startTier <= v.tier && v.tier <= goalTier ? {color: 'black'} : {color: 'white'}}> 
                                        [From] 
                                    </a> 
                                    <a onClick={() => setGoalTier(v.tier)} style={startTier <= v.tier && v.tier <= goalTier ? {color: 'black'} : {color: 'white'}}> 
                                        [To] 
                                    </a>
                                </div>
                            </RenderEachTier>
                            {
                                v.tier % 5 === 0 ?
                                <div style={{borderBottom: '1px solid lightgray', margin: '1rem 0'}}>
                                </div>
                                :
                                null
                            }
                            </>
                            )}
                    </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{backgroundColor: '#273552', border: '0px solid gray', width: '100%', padding: '1rem'}}>
                    <div style={{fontSize: '1.4rem', borderBottom: '1px solid lightgray', paddingBottom: '1rem' , marginBottom: '1rem'}}>
                        필요 경험치량 : <span style={{fontWeight: 'bold'}}>{sumExp}</span>
                    </div>
                    <Checkbox onChange={e => handlePcBangScailing(e.target.checked)} style={{color: 'white', textAlign: 'right', marginBottom: '1rem'}}>
                        피시방 120% 경험치 적용
                    </Checkbox>
                    <BigText>
                        대략 필요한 일반 게임 판수 : {Math.ceil(sumExp / (3800 * pcBangScailing))} 판
                    </BigText>
                    <BigText>
                        소요 시간(평균 35분) : { Math.floor(Math.ceil(sumExp / (3800 * pcBangScailing)) * 35 / 60) } 시간 { Math.ceil(sumExp / (3800 * pcBangScailing)) * 35 % 60 } 분
                    </BigText>
                    <BigText>
                        스파이크 돌격 게임 판수 : {Math.ceil(sumExp / (1000 * pcBangScailing))} 판
                    </BigText>
                    <BigText>
                        소요 시간(평균 10분) : { Math.floor(Math.ceil(sumExp / (1000 * pcBangScailing)) * 10 / 60) } 시간 { Math.ceil(sumExp / (1000 * pcBangScailing)) * 10 % 60 } 분
                    </BigText>
                    
                    <BigText>
                        현질로 뚫는다면?
                        {
                        goalTier - startTier > 0 ?
                            <div>
                                { (goalTier - startTier) * 300 } VP = 약 {(goalTier - startTier) * 300 * 11} 원
                            </div>
                        :
                            null
                        }
                    </BigText>
                    <div>
                        해당 판수와 소요 시간은 주간/일일 퀘스트를 제외한 수치이므로 일부 차이가 있을 수 있습니다.
                    </div>
                </Col>
                </>
            }
        </Row>
    )
}
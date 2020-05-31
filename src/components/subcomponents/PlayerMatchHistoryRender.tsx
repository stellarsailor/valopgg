import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import capitalizeFirstLetter from '../../logics/capitalizeFirstLetter'

export default function PlayerMatchHistoryRender(props){

    const { type, result, kda, score, rounds, agentName, mapName } = props

    const [ openDetail, setOpenDetail ] = useState(false)

    const toggleDetail = useCallback(() => {
        if(openDetail) setOpenDetail(false)
        else setOpenDetail(true)
    },[openDetail])

    const victory = {
        backgroundColor: '#5bb09f',
        marginBottom: '0.5rem',
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between'
    }

    const defeat = {
        backgroundColor: '#e24c4e',
        marginBottom: '0.5rem',
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-between'
    }

    return (
        <>
            <div style={result === 'victory' ? victory : defeat} >
                <div>
                    {type === 'rank' ? "Rank" : "Normal"}
                </div>
                <img src={require(`../../images/agents/${agentName}.png`)} style={{width: 150, height: 'auto', zIndex: 5, position: 'relative'}} alt="agent official" />
                <div>
                    <div>{kda}</div>
                    <div>{score}</div>
                    <div onClick={toggleDetail}>자세히 보기</div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{color: 'gold'}}>{capitalizeFirstLetter(result)}</div>
                    <div style={{fontWeight: 'bold', fontSize: '1.8rem'}}>{rounds}</div>
                </div>
                <img src={require(`../../images/map/${mapName}-illust.jpeg`)} style={{width: 150, height: 'auto', zIndex: 5, position: 'relative'}} alt="agent official" />
            </div>
            {
                openDetail ?
                <div style={{backgroundColor: '#f5f5f5', width: '100%', height: 400, marginBottom: '0.5rem' }}>

                </div>
                :
                null
            }
        </>
    )
}
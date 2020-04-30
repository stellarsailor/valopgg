import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';

export default function Guide() {

    return(
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{position: 'absolute', fontSize: '1.5rem'}}>.</div>
                <div style={{position: 'absolute', width: '100%', backgroundColor: 'black', opacity: 0.3}}></div>
                <img src={require('../images/official-background-wide-darken.png')} style={{width: '100%'}} />
            </div>
            발로란트는 라이엇 게임즈에서 만든 1인칭 슈팅 게임 입니다.
            각 요원이 무기와 스킬을 구매하여 매 라운드 격돌하게 됩니다. 
            라운드는 최대 25라운드까지 진행되며 먼저 13라운드를 가져가는 팀이 승리하게 됩니다.
에이스
한 명이 상대팀 전원을 처치 후 승리.
무결점 플레이
팀원이 한 명도 죽지 않고 승리.
팀 에이스
상대팀 플레이어들을 아군이 한 명씩 처치하여 승리.
클러치
1대 다수의 상황이 되었을 때 혼자서 라운드를 승리.
절약왕
상대팀보다 적은 크레드를 소비하여 승리.

등등 각 종 가이드 및 공략 여기다가 때려박기
        </>
    )
}
import React, { useCallback } from 'react'
import { Row, Col } from 'antd'
import { AudioOutlined, AudioMutedOutlined, EllipsisOutlined, CloseOutlined } from '@ant-design/icons';
import { agent } from '../../datas/agent'

export default function PartyRenderer (props){

    const { id, mode, tier, currentMember, micNeed, playtime, preferredAgent, username, description, ipAddress, updatedAt } = props

    const selectedAgent = preferredAgent === null ? [''] : preferredAgent.split(',')

    const modeToString = (modeNumber) => {
        if(modeNumber === 0) return '전체'
        else if(modeNumber === 1) return '일반'
        else if(modeNumber === 2) return '경쟁전'
        else if(modeNumber === 3) return '스파이크 돌격'
        else return null
    }

    const tierToString = (tierNumber) => {
        if(tierNumber === 0) return '전체'
        else if(tierNumber === 1) return '아이언'
        else if(tierNumber === 2) return '브론즈'
        else if(tierNumber === 3) return '실버'
        else if(tierNumber === 4) return '골드'
        else if(tierNumber === 5) return '플래티넘'
        else if(tierNumber === 6) return '다이아몬드'
        else if(tierNumber === 7) return '불멸'
        else if(tierNumber === 8) return '발로란트'
        else return null
    }

    const calcAgo = (updatedAt) => {
        const databaseMinute = updatedAt.substr(14,2)
        const currentMinute = new Date().getMinutes();
        if ( currentMinute < databaseMinute ){
            return currentMinute + 60 - databaseMinute
        } else {
            return currentMinute - databaseMinute 
        }
    }

    const deleteParty = useCallback(() => {
        console.log(id)
    },[])

    return(
        <Col xs={24} sm={12} md={12} lg={8} xl={8} style={{  }}>
            <div style={{backgroundColor: 'rgb(24, 35, 56)', padding: '1rem'}}>
                <Row style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{color: 'orange'}}>{calcAgo(updatedAt)}분 전</div> 
                    <CloseOutlined style={{fontSize: '0.8rem', color: 'gray'}} />
                </Row>
                <Row >
                    <Col span={6} style={{color: 'gray'}}>게임모드</Col>
                    <Col span={6} style={{color: 'gray'}}>적정티어</Col>
                    <Col span={6} style={{color: 'gray'}}>현재인원</Col>
                    <Col span={6} style={{color: 'gray'}}>마이크</Col>
                </Row>
                <Row>
                    <Col span={6}>{modeToString(mode)}</Col>
                    <Col span={6}>{tierToString(tier)}</Col>
                    <Col span={6}><span style={{fontWeight: 'bold'}}>{currentMember}</span> <span style={{color: 'gray'}}>/ 5</span></Col>
                    <Col span={6}> {micNeed === 1 ? <span ><AudioOutlined style={{color: 'red'}} /> 필수</span> : <span>자유</span> }</Col>
                </Row>
                {/* <div style={{color: 'gray'}}>게임모드 적정티어</div>
                <div style={{fontWeight: 'bold'}}>{modeToString(mode)} {tierToString(tier)}</div>
                <div style={{color: 'gray'}}>현재인원 마이크여부</div>
                <div style={{fontWeight: 'bold'}}> {currentMember} / 5 {micNeed === 1 ? <AudioOutlined /> : <AudioMutedOutlined /> } </div> */}
                <div style={{color: 'gray', marginTop: 10}}>선호 요원</div>
                {
                    selectedAgent[0] === '' ? <span>전체</span>
                    :
                    selectedAgent.map(v => <img key={Math.random()} src={require(`../../images/agents/${v}-headshot.png`)} style={{width: '2rem', borderRadius: '2rem', border: `2px solid ${agent.filter(original => original.name.toLowerCase() === v)[0].signature_color}`, margin: 5}} />)
                }
                <div style={{margin: '1rem 0', width: '100%', overflow: 'auto'}}>{description}</div>
                
                <div style={{fontWeight: 'bold', fontSize: '1.4rem', textAlign: 'right'}}>{username}</div>
                <Row style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
                    <div style={{color: 'gray'}}>예상 플레이 시간 : <span style={{color: 'white'}}>{playtime}시간</span></div>
                    <div style={{textAlign: 'right', color: 'gray'}}>({ipAddress})</div>
                </Row>
                
            </div>
        </Col>
    )
}
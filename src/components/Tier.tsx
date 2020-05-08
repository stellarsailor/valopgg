import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { agent } from '../datas/agent'
import { Row, Col, Tooltip, Divider } from 'antd';

const SideTitle = styled.div`
    font-weight: bold;
    font-size: 2rem;
    margin-left: 1rem;
`
const TierTitle = styled.div`
    font-weight: bold;
    font-size: 1.6rem;
    background-color: rgb(24, 35, 56);
    padding: 1rem;
`

const mapImageStyle = {
    width: '3rem', 
    borderRadius: '3rem',
    border: '1px gray solid',
    marginRight: '1rem',
}

export default function Tier(){

    const renderAgentImage = (v) => (
        <Link to={`/agent?name=${v.name.toLowerCase()}`}>
            <Tooltip title={v.name_ko} key={v.id}>
                <img src={require(`../images/agents/${v.name.toLowerCase()}-headshot.png`)} style={mapImageStyle} />
            </Tooltip>
        </Link>
    )

    return (
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{padding: '1rem 0'}}>
                <Row justify="center" style={{backgroundColor: '#202b43', padding: '3%'}}>
                    <Col xs={24} sm={22} md={12} lg={12} xl={12} >
                        <SideTitle>공격</SideTitle>
                        <TierTitle><div><span style={{color: 'red'}}>S</span> 티어</div>
                            {agent.filter(v => v.tier_offense === 's').map((v, index) => 
                                renderAgentImage(v))}
                        </TierTitle>
                        <TierTitle><div><span style={{color: 'gold'}}>A</span> 티어</div>
                            {agent.filter(v => v.tier_offense === 'a').map((v, index) => 
                                renderAgentImage(v))}
                        </TierTitle>
                        <TierTitle><div><span style={{color: 'green'}}>B</span> 티어</div>
                            {agent.filter(v => v.tier_offense === 'b').map((v, index) => 
                                renderAgentImage(v))}
                        </TierTitle>
                    </Col>
                    <Col xs={24} sm={22} md={12} lg={12} xl={12} >
                        <SideTitle>수비</SideTitle>
                        <TierTitle><div><span style={{color: 'red'}}>S</span> 티어</div>
                            {agent.filter(v => v.tier_defense === 's').map((v, index) => 
                                renderAgentImage(v))}
                        </TierTitle>
                        <TierTitle><div><span style={{color: 'gold'}}>A</span> 티어</div>
                            {agent.filter(v => v.tier_defense === 'a').map((v, index) => 
                                renderAgentImage(v))}
                        </TierTitle>
                        <TierTitle><div><span style={{color: 'green'}}>B</span> 티어</div>
                            {agent.filter(v => v.tier_defense === 'b').map((v, index) => 
                                renderAgentImage(v))}
                        </TierTitle>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
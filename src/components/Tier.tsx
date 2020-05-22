import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { agent } from '../datas/agent'
import { Row, Col, Tooltip, Divider } from 'antd';

const PageTitle = styled.div`
    font-weight: bold;
    font-size: 2rem;
`
const TierTitle = styled.div`
    font-weight: bold;
    font-size: 1.6rem;
    /* background-color: rgb(24, 35, 56); */
    padding: 1rem;
    margin-left: 1rem;
    margin-bottom: 1rem;
`

const mapImageStyle = (borderColor) => {
    return(
        {
            width: '4rem', 
            borderRadius: '4rem',
            border: '2px solid ' + borderColor,
            margin: '0 1.5rem',
        }
    )
}

const tierColor = [
    {
        tier: 's',
        color: 'crimson'
    },
    {
        tier: 'a',
        color: 'rgb(255, 148, 23)'
    },
    {
        tier: 'b',
        color: 'rgb(73, 171, 186)'
    },
    {
        tier: 'c',
        color: 'rgb(51, 113, 164)'
    },
    {
        tier: 'd',
        color: 'rgb(51, 83, 117)'
    },
]


export default function Tier(){

    const renderAgentImage = (v, borderColor) => (
        <Link to={`/agent/${v.name.toLowerCase()}`} key={v.id}>
            {/* <Tooltip title={v.name_ko} key={v.id}> */}
                <img src={require(`../images/agents/${v.name.toLowerCase()}-headshot.png`)} style={mapImageStyle(borderColor)} />
                <div style={{display: 'flex', justifyContent: 'center'}}>{v.name_ko}</div>
            {/* </Tooltip> */}
        </Link>
    )

    return (
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{margin: '1rem 0' , padding: '1rem', backgroundColor: '#202b43'}}>
                <div style={{paddingLeft: '1rem', margin: '1rem', marginBottom: '1.5rem'}}>
                    <PageTitle>대회용 요원 티어 리스트 Ver 0.50 Dafran</PageTitle>
                </div>
                {tierColor.map((arr) => (
                    <Row style={{margin: '1rem 0'}}>
                        <Col xs={24} sm={24} md={3} lg={3} xl={3} >
                            <TierTitle>
                                <div style={{backgroundColor: arr.color, width: '2rem', height: '2rem', borderRadius: 2, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{arr.tier.toUpperCase()}</div>
                            </TierTitle>
                        </Col>
                        <Col xs={24} sm={24} md={20} lg={20} xl={20} style={{display: 'flex', flexDirection: 'row'}}>
                            {agent.filter(v => v.tier_dafran === arr.tier).map((v, index) => renderAgentImage(v, arr.color))}
                        </Col>
                    </Row>
                ))}
                {/* <div style={{textAlign: 'left', marginTop: '4rem', marginLeft: '1rem'}}>
                    출처 : Twitch ATL Dafran - The grind never ends, lets GO (20/05/11) - 09:11:50
                </div> */}
            </Col>
        </Row>
    )
}
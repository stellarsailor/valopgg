import React, { useEffect, useState } from 'react'
import MetaTags from 'react-meta-tags';
import styled from 'styled-components'
import axios from 'axios'
import { Row, Col, Table, BackTop } from 'antd';
import { apiServer, staticServer } from '../../serverUrl'
import { agent } from '../../data/agent'
import { dynamicSort } from '../../logics/dynamicSort';
import { Link } from 'react-router-dom';
import SideAds from '../Ads/SideAds';

type agentStatType = {
    id: number;
    winRate: number;
    pickRate: number;
    killDeath: number;
}

const TableTdNumber = styled.div`
    font-weight: bold;
    font-size: 1.1rem;
`

export default function Statistics(){

    const [ agentStat, setAgentStat ] = useState<Array<agentStatType>>([])
    const [ statLoading, setStatLoading ] = useState(true)

    useEffect(() => {
        axios.get(`${apiServer}/statistics`)
        .then(res => {
            const data = res.data.agentStat;
            setAgentStat(data)
            setStatLoading(false)
        })
    },[])

    const columns = [
        {
            title: '요원',
            dataIndex: 'id',
            render: (v) => 
                <Link to={`/agent/${agent[v].name.toLowerCase()}`} key={v} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <img src={(`${staticServer}/agents/${agent[v].name.toLowerCase()}-headshot.png`)} style={{width: '3rem', borderRadius: '3rem', border: `3px solid ${agent[v].signature_color}`}} alt="Valorant agent select button" />
                    {
                        window.innerWidth < 576 ? null : 
                        <span style={{fontWeight: 'bold', fontSize: '1.2rem', margin: '0 1rem'}}>
                            {agent[v].name_ko}
                        </span>
                    }
                </Link>,
        },
        {
            title: '픽률',
            dataIndex: 'pickRate',
            defaultSortOrder: 'descend' as 'descend',
            sorter: (a, b) => a.pickRate - b.pickRate,
            render: v => <TableTdNumber>{v}%</TableTdNumber>
        },
        {
            title: '승률',
            dataIndex: 'winRate',
            sorter: (a, b) => a.winRate - b.winRate,
            render: v => <TableTdNumber>{v}%</TableTdNumber>
        },
        {
            title: 'K/D',
            dataIndex: 'killDeath',
            sorter: (a, b) => a.killDeath - b.killDeath,
            render: v => <TableTdNumber>{v}</TableTdNumber>
        },
    ];

    return (
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)'}} >
            <SideAds thicc={true} />
            <Col xs={24} sm={22} md={20} lg={20} xl={15} >
                <BackTop/>
                <MetaTags>
                    <title>발로란트 통계</title>
                    <meta name="description" content={`발로란트의 요원들의 픽률, 승률, 킬 데스 통계 정보를 확인가능합니다.`} />
                </MetaTags>
                <Row style={{width: '100%', height: '100%', backgroundColor: '#202b43'}} justify="center">
                    <div style={{fontWeight: 'bold', fontSize: '1.4rem', margin: '1.5rem'}}>요원별 통계(Beta)</div>
                    <Table columns={columns} dataSource={agentStat} style={{width: '100%'}} pagination={false} loading={statLoading} />
                    {/* <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                        {agentStat.map( v => (
                            <Row key={v.id}>
                                <Col span={6}>{agent[v.id].name_ko}</Col>
                                <Col span={6}>{v.pickRate}</Col>
                                <Col span={6}>{v.winRate}</Col>
                                <Col span={6}>{v.killDeath}</Col>
                            </Row>
                        ))}
                    </div> */}
                    <div style={{margin: '1rem'}}>해당 데이터는 발로란트의 공식 데이터가 아니며, 발로란트 북미 서버에서 수집된 경기를 종합한 데이터 입니다.</div>
                </Row>
            </Col>
            <SideAds />
        </Row>
    )
}
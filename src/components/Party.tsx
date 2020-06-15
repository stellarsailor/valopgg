import React, { useEffect, useState, useCallback } from 'react'
import MetaTags from 'react-meta-tags';
import styled from 'styled-components'
import axios from 'axios'
import { Row, Col, Spin, BackTop, Input, Select, Rate, Checkbox, Button, message, Tag, Empty, Typography } from 'antd';
import { EditOutlined, FileSearchOutlined, RedoOutlined, AudioOutlined, AudioMutedOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import { apiServer } from '../serverUrl';
import PartyRenderer from './subcomponents/PartyRenderer';
import PartyWrite from './subcomponents/PartyWrite';
const { Paragraph } = Typography

message.config({
    top: 250,
});   

export default function Party() {

    const [ filterMode, setFilterMode ] = useState(false)
    const [ writeMode, setWriteMode ] = useState(false)

    const [ partyList, setPartyList ] = useState<Array<any>>([])
    const [ asyncLoading, setAsyncLoading ] = useState(true)

    useEffect(() => {
        fetchParties()
    },[])

    const fetchParties = useCallback(() => {
        setAsyncLoading(true)
        axios.get(`${apiServer}/party/select/all`)
        .then(res => {
            // console.log(res.data)
            setPartyList(res.data)
            setAsyncLoading(false)
        })
    },[])

    const toggleWriteMode = useCallback(() => {
        if(writeMode) setWriteMode(false)
        else setWriteMode(true)
    },[writeMode])

    const toggleFilterMode = useCallback(() => {
        if(filterMode) setFilterMode(false)
        else setFilterMode(true)
    },[filterMode])
    
    return (
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 600}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15} >
                <BackTop/>
                <MetaTags>
                    <title>발로그 발로란트 파티 모집</title>
                    <meta name="description" content={`발로란트의 모든 무기에 대한 정보와 스킨 이미지를 확인가능합니다.`} />
                </MetaTags>
                <Row style={{width: '100%', height: '100%', backgroundColor: '#202b43'}}>
                    <div style={{width: '100%', padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}> 
                        <div style={{fontWeight: 'bold', fontSize: '1.6rem'}}>파티 모집(Beta) <Paragraph style={{color: 'white', fontSize: '1rem', textAlign: 'right', margin: '1rem 0'}} copyable={{ text: 'https://valog.gg/party' }}>링크 공유</Paragraph></div>
                        <div>
                            <EditOutlined onClick={toggleWriteMode} style={{fontSize: '2rem', marginRight: '1rem'}} />
                            <FileSearchOutlined onClick={toggleFilterMode} style={{fontSize: '2rem', marginRight: '1rem'}} />
                            <RedoOutlined onClick={fetchParties} style={{fontSize: '2rem', marginRight: '1rem'}} />
                        </div>
                    </div>
                    {
                        writeMode ? <PartyWrite fetchParties={fetchParties} /> : null
                    }
                    {
                        filterMode ? <div style={{width: '100%', textAlign: 'center'}}>하루 이틀 내에 필터 모드가 추가 될 예정입니다. 조금만 기다려주세요.</div> : null
                    }
                    {/* <Col span={24} style={{fontSize: '1.4rem'}}>
                        전체 / 노말 / 경쟁전 / 스파이크러쉬 / 아이언 플래 다이아 / 마이크 여부
                    </Col> */}
                    <Row gutter={[16, 16]} style={{padding: '1rem', width: '100%'}}>
                        {
                            asyncLoading ?
                            <div style={{width: '100%', height: 400, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Spin />
                            </div>
                            :
                                partyList.length === 0 ?    
                                    <div style={{margin: '2rem 0', width: '100%', height: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}><Empty description={false} />현재 기다리고 있는 파티가 없어요 ㅠ.ㅠ 파티를 직접 모집 해보시는건 어때요?</div>
                                :
                                partyList.map(v => <PartyRenderer key={v.id} 
                                id={v.id} mode={v.mode} tier={v.tier} currentMember={v.current_member} micNeed={v.mic_need} 
                                playtime={v.playtime} preferredAgent={v.preferred_agent}
                                username={v.username} description={v.description} ipAddress={v.ipAddress} updatedAt={v.updatedAt}  />)
                        }
                    </Row>
                    <div style={{margin: '1.5rem', textAlign: 'center'}}>
                        유효한 파티만 노출시키기위해 파티 모집 등록 후 30분 이내의 파티만 표시하고 있으며, 무분별한 재등록을 막기위한 필터가 적용되어 있습니다.
                        또한 타인을 사칭하거나 모욕하는 일은 법률에 의해 제재를 받을 수 있습니다.
                    </div>
                </Row>
            </Col>
        </Row>
    )
}
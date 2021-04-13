import React, { useEffect, useState } from 'react'
import MetaTags from 'react-meta-tags';
import styled from 'styled-components'
import { Row, Col, Table, BackTop } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import { prosetting } from '../../data/prosetting'
import { dynamicSort } from '../../logics/dynamicSort'
import axios from 'axios'
// import Adfit from './subcomponents/Adfit';
import { apiServer } from '../../serverUrl';
import SideAds from '../Ads/SideAds';

const Bold = styled.span`
    color: lightgreen;
`

export default function Prosetting() {

    const dataSource = prosetting.map(v => {
        let pair = { eDpi: Math.round(v.dpi * v.sensitivity) }
        return { ...v, ...pair}
    })

    let sum = 0;
    for(let i = 0; i < dataSource.length; i++ ){
        sum += dataSource[i].eDpi
    }
    let avgEDpi = Math.round(sum / dataSource.length);

    // const [ prosetting, setProsetting ] = useState([])
    // const [ prosettingLoading, setProsettingLoading ] = useState(true)

    // const [ avgEDpi, setAvgEDpi ] = useState(0)

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    //     axios.get(`${apiServer}/prosetting`)
    //     .then(res => {
    //         const data = res.data.prosetting;

    //         let eDpiCalculated = data.map(v => {
    //         let pair = { eDpi: Math.round(v.dpi * v.sensitivity) }
    //             return { ...v, ...pair}
    //         })

    //         let sum = 0;
    //         for(let i = 0; i < eDpiCalculated.length; i++ ){
    //             sum += eDpiCalculated[i].eDpi
    //         }
    //         setAvgEDpi(Math.round(sum / eDpiCalculated.length))
            
    //         setProsetting(eDpiCalculated)
    //         setProsettingLoading(false)
    //     })
    // },[])

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const columns_mobile = [
        {
            title: '이름',
            dataIndex: 'name',
            render: (v) => <Link to={`/prosetting/${v.toLowerCase()}`} style={{color: '#ff324c', fontWeight: 'bold'}} key={v}>{v} <SearchOutlined style={{color: 'white'}} /> </Link>,
        },
        {
            title: 'DPI',
            dataIndex: 'dpi',
            sorter: {
                compare: (a, b) => a.dpi - b.dpi,
                multiple: 1,
            },
        },
        {
            title: '감도',
            dataIndex: 'sensitivity',
            sorter: {
                compare: (a, b) => a.sensitivity - b.sensitivity,
                multiple: 1,
            },
        },
        {
            title: 'eDPI',
            dataIndex: 'eDpi',
            sorter: {
                compare: (a, b) => a.sensitivity - b.sensitivity,
                multiple: 1,
            },
        },
    ];

    const columns = [
        {
            title: '이름',
            dataIndex: 'name',
            render: (v) => <Link to={`/prosetting/${v.toLowerCase()}`} style={{color: '#ff324c', fontWeight: 'bold', fontSize: '1.15rem'}} key={v}>{v} <SearchOutlined style={{color: 'white'}} /> </Link>,
            width: '20%',
        },
        {
            title: '마우스',
            dataIndex: 'mouse',
        },
        {
            title: 'DPI',
            dataIndex: 'dpi',
            sorter: {
                compare: (a, b) => a.dpi - b.dpi,
                multiple: 3,
            },
        },
        {
            title: '감도',
            dataIndex: 'sensitivity',
            sorter: {
                compare: (a, b) => a.sensitivity - b.sensitivity,
                multiple: 3,
            },
        },
        {
            title: 'eDPI',
            dataIndex: 'eDpi',
            sorter: {
            compare: (a, b) => a.eDpi - b.eDpi,
                multiple: 3,
            },
        },
        {
            title: '모니터',
            dataIndex: 'monitor',
        },
        {
            title: '키보드',
            dataIndex: 'keyboard',
        },  
    ];
    
    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <SideAds thicc={true} />
            <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{padding: '1rem 0'}}>
                <BackTop />
                <MetaTags>
                    <title>발로란트 프로들의 마우스 감도, 조준선 설정, 키보드 설정</title>
                    <meta name="description" content={`발로란트 프로 혹은 스트리머들이 사용하는 마우스 감도, 키보드 설정, 그래픽 설정, 조준선 설정 등을 확인가능합니다!`} />
                </MetaTags>
                <div style={{backgroundColor: '#202b43', padding: '1rem', marginBottom: '1rem'}}>
                    <div style={{fontSize: '1.6rem'}}>최적의 세팅 가이드</div>
                    <div style={{fontSize: '1.1rem'}}>CS:GO 프로 선수 및 스트리머들이 발로란트에서 평균적으로 가장 많이 사용하는</div>
                    <div style={{fontSize: '1.1rem', marginLeft: '2rem'}}>DPI 는 <Bold>400</Bold> 입니다. <span style={{fontSize: '0.8rem'}}>(2순위 800)</span></div>
                    <div style={{fontSize: '1.1rem', marginLeft: '2rem'}}>평균 eDPI 는 <Bold>{avgEDpi}</Bold> 입니다. <span style={{fontSize: '0.8rem'}}>(eDPI = dpi × 감도)</span> </div>
                    <div style={{fontSize: '1.1rem', marginLeft: '2rem'}}>조준경 감도 배율은 <Bold>1.00</Bold> 입니다. <span style={{fontSize: '0.8rem'}}>(평균치 0.914)</span></div>
                    <div style={{fontSize: '1.1rem', marginLeft: '2rem'}}>마우스 폴링 레이트는 <Bold>1000 hz</Bold> 입니다.</div>
                    <div style={{fontSize: '1.1rem', marginLeft: '2rem'}}>미니맵 설정은 <Bold>회전:회전 / 플레이어 중앙에 고정:꺼짐 / 미니맵 크기:0.978 / 미니맵 확대:0.9 / 미니맵 시야 범위 표시:켜짐</Bold> 입니다.</div>
                    <div style={{fontSize: '1.1rem', marginLeft: '2rem'}}>조준선 설정은 <Bold>색상:녹색 / 1 / 4 / 2 / 2 / 화면 중앙 도트: 꺼짐 / 오류: 꺼짐</Bold> 입니다.</div>
                </div>
                {/* { window.innerWidth < 576 ? <Adfit adUnit="DAN-skxug7w2pkjd" adWidth="320" adHeight="100" /> : <Adfit adUnit="DAN-qe74ylevqulf" adWidth="728" adHeight="90" /> } */}

                <div style={{backgroundColor: '#fafafa'}}>
                    {
                        window.innerWidth < 576 ?
                        <Table columns={columns_mobile} dataSource={dataSource.slice(0).sort(dynamicSort('name'))} style={{width: '100%'}} pagination={false} />
                        :
                        <Table columns={columns} dataSource={dataSource.slice(0).sort(dynamicSort('name'))} style={{width: '100%'}} pagination={false} />
                    }
                </div>
            </Col>
            <SideAds />
        </Row>
    )
}
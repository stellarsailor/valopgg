import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { apiServer, staticServer } from '../../serverUrl'
import styled from 'styled-components'
import { Spin } from 'antd'
import Countdown from 'react-countdown';
import { isMobile } from 'react-device-detect'

const CountdownText = styled.div`
    font-size: ${props => props.isMobile ? '1.1rem' : '1.4rem' };
    font-weight: bold;
    background-color: rgb(0,0,0, 1);
    padding: 0px 5px;
    /* position: absolute;
    z-index: 10; */
`

export default function WeaponCollection () {

    const [ rotation, setRotation ] = useState({
        date: '',
        collection: '',
    })
    const [ asyncLoading, setAsyncLoading ] = useState(true)

    useEffect(() => {
        Axios.get(`${apiServer}/weapon/rotation`)
        .then(res => {
            const data = res.data;
            setRotation(data)
            setAsyncLoading(false)
        })
    },[])

    return (
        <div style={{width: '100%', height: '100%'}}>
        {asyncLoading ? 
            <div style={{width: '100%', height: 100, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Spin />
            </div>
        :
            <div style={{}}>
                <img src={`${staticServer}/weaponcollections/${rotation.collection}.png`} style={{width: '100%', alignSelf: 'flex-start', marginTop: '-1px'}} />
                <Countdown date={rotation.date} renderer={({ days, hours, minutes, seconds}) => 
                    <CountdownText isMobile={isMobile}>
                        스킨 할인 : {days === 0 ? "" : days + '일'} {hours === 0 ? "" : hours + '시간'} {minutes === 0 ? "" : minutes + '분'} {seconds === 0 ? "" : seconds + '초'} 남음
                    </CountdownText>
                } />
            </div>
        }
        </div>
    )
}
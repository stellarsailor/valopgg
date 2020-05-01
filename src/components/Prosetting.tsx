import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import { prosetting } from '../datas/prosetting'

export default function Prosetting() {

    return(
        <>
            {prosetting.map(v => v.name)}
        </>
    )
}
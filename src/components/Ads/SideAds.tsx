import React, { useState, useCallback, useEffect } from 'react'
import { Col } from 'antd'
import Adsense from './Adsense'
import { isMobile } from 'react-device-detect'
import Sticky from 'react-sticky-el';

export default function SideAds(props) {

    const { thicc } = props;

    if(isMobile){
        return null
    } else {
        return (
            <Col xs={0} sm={0} md={0} lg={0} xl={4} style={{width: '100%', paddingTop: '1rem'}}>
                <Sticky>
                    <Adsense type={ thicc ? "long300" : "long160"} />
                </Sticky>
            </Col>
        )
    }
}
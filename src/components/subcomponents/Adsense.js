import React, { useState, useCallback, useEffect } from 'react'
import AdSense from 'react-adsense';

export default function Adsense(props) {

    const { type } = props
    let adsWidth = 0
    let adsHeight = 0
    let adsSlot = ''

    if(type === 'square'){
        adsSlot = '1654741413'
        adsWidth = 300
        adsHeight = 250
    } else if(type === 'pcwide'){
        adsSlot = '2823633647'
        adsWidth = 728  
        adsHeight = 90
    } else if(type === 'mobilewide'){
        adsSlot = '2823633647'
        adsWidth = 300
        adsHeight = 50
    } else if(type === 'long300'){
        adsSlot = '1510551971'
        adsWidth = 260
        adsHeight = 520
    } else if(type === 'long160'){
        adsSlot = '1510551971'
        adsWidth = 160
        adsHeight = 600
    }

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <div style={{width: adsWidth, height: adsHeight, backgroundColor: 'white'}}>
                <AdSense.Google
                client='ca-pub-1635386604461382'
                slot={adsSlot}
                style={{ width: adsWidth, height: adsHeight, float: 'center' }}
                format=''
                />
            </div>
        </div>
    )
}
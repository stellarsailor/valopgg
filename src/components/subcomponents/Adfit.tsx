import React, { useEffect } from 'react';


export function Adfit() { 
    
    // let ba = window.ba; 

    // useEffect(() => {
    //     (ba.min = ba.min || []).push({});
    // },[])

    if(window.innerWidth < 576){
        return (<></>)
    } else {
        return (
            <ins className="kakao_ad_area" style={{display: 'none'}}
            data-ad-unit    = "DAN-qe74ylevqulf" 
            data-ad-width   = "728" 
            data-ad-height  = "90"></ins> 
        )
    }
}
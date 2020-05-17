import React, { useState, useCallback } from 'react'
import { CameraOutlined } from '@ant-design/icons';

export default function DicWordRender(props){

    const { id, word_ko, word_en, desc, isImg } = props; 
    const [ openImage, setOpenImage ] = useState(false)

    const handleImageOpen = useCallback(() => {
        if(openImage) setOpenImage(false)
        else setOpenImage(true)
    },[openImage])

    return (
        <div key={id} style={{fontSize: '1rem'}}>
            <div style={{marginBottom: '1.2rem'}}>
                <span style={{fontWeight: 'bold', fontSize: '1.4rem'}}>{word_ko}</span> {word_en !== '' ? <span>({word_en})</span> : null } 
                {isImg === true ? <CameraOutlined style={{color: 'dodgerblue', fontSize: '1.4rem', marginLeft: '0.5rem'}} onClick={() => handleImageOpen()} /> : null }
                <div style={{marginLeft: '0.5rem'}}>| {desc}</div>
                {openImage === true ? <img src={`https://d3s0uoqa61ipmr.cloudfront.net/dic/${word_en.toLowerCase()}.png`} style={{width: '100%', alignSelf: 'flex-start', marginTop: '0.5rem'}} /> : null}
            </div>
        </div>
    )
}

import React, { useState, useEffect, useCallback } from 'react'
import MetaTags from 'react-meta-tags';
import { Row, Col, Select, Input, Typography } from 'antd';
import styled from 'styled-components'
import Adfit from './subcomponents/Adfit';

const { Paragraph } = Typography

const { Option } = Select;

const TitleCaption = styled.div`
    font-size: 1.2rem;
    color: #212529;
`

export default function Calculator() {

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const [ prevGame, setPrevGame ] = useState('')

    const [ inputPrevDpi, setInputPrevDpi ] = useState<any>('')
    const [ inputPrevSensitivity, setInputPrevSensitivity ] = useState<any>('')
    const [ inputValorantDpi, setInputValorantDpi ] = useState<any>('')

    const [ resultValorantSensitivity, setResultValorantSensitivity ] = useState<number>(0)

    const handleChange = useCallback((value) => {
        setPrevGame(value)
    },[])

    const onChangePrevDpi = e => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            setInputPrevDpi(value);
        }
    };

    const onChangePrevSensitivity = e => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            setInputPrevSensitivity(value);
        }
    };

    const onChangeValorantDpi = e => {
        const { value } = e.target;
        const reg = /^-?\d*(\.\d*)?$/;
        if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
            setInputValorantDpi(value);
        }
    };

    useEffect(() => {
        let divide = 0
        if( prevGame !== '' && prevGame !== '0' 
        && inputPrevDpi !== '' && inputPrevDpi !== '0' 
        && inputPrevSensitivity !== '' && inputPrevSensitivity !== '0' 
        && inputValorantDpi !== '' && inputValorantDpi !== '0'){
            if(prevGame === 'Overwatch' || prevGame === 'Call of Duty Modern Warfare') divide = 10.6
            else if(prevGame === 'Counter Strike Global Offensive' || prevGame === 'Apex Legends') divide = 3.18
            else if(prevGame === "Tom Clancy's Rainbow Six Siege") divide = 12.2
            else if(prevGame === 'Fortnite') divide = 12.6
            else divide = 1
 
            setResultValorantSensitivity( Math.round((inputPrevDpi * inputPrevSensitivity / inputValorantDpi) / divide * 1000) / 1000)
        }
    },[prevGame, inputPrevDpi, inputPrevSensitivity, inputValorantDpi])
    
    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{padding: '4%', backgroundColor: '#f5f5f5'}}>
                <MetaTags>
                    <title>발로그 감도계산기 타 FPS 에서 발로란트로의 감도</title>
                    <meta name="description" content={'오버워치, 배틀그라운드, 배틀필드, 카스 글옵(CS:GO), 레인보우 식스 등 게임에서 발로란트로의 감도 변환기 계산기를 제공합니다.'} />
                </MetaTags>
                <div style={{textAlign: 'center', color: 'black', fontSize: '1.4rem', margin: '1rem 0', fontWeight: 'bold'}}>
                    Valop.gg 감도 계산기
                </div>
                {/* {window.innerWidth < 576 ? <Adfit adUnit="DAN-skxug7w2pkjd" adWidth="320" adHeight="100" /> : <Adfit adUnit="DAN-qe74ylevqulf" adWidth="728" adHeight="90" /> } */}
                <Paragraph style={{color: 'black', fontSize: '1rem', textAlign: 'right'}} copyable={{ text: 'https://valog.gg/calculator' }}>링크 복사</Paragraph>

                <div style={{backgroundColor: 'white', border: '1px solid lightgray', padding: '5%'}}>
                    <TitleCaption>어느 게임하다 오셨나요?</TitleCaption>
                    <Select defaultValue="게임을 선택해주세요" style={{ width: '80%', color: 'black', marginBottom: '1rem' }} onChange={handleChange}>
                        <Option value="Apex Legends">Apex Legends</Option>
                        <Option value="Call of Duty Modern Warfare">Call of Duty Modern Warfare</Option>
                        <Option value="Counter Strike Global Offensive">Counter Strike Global Offensive</Option>
                        <Option value="Fortnite">Fortnite</Option>
                        <Option value="Overwatch">Overwatch</Option>
                        <Option value="Tom Clancy's Rainbow Six Siege">Tom Clancy's Rainbow Six Siege</Option>
                    </Select>

                    <TitleCaption>{prevGame} DPI 입력</TitleCaption>
                    <Input
                    value={inputPrevDpi}
                    onChange={onChangePrevDpi}
                    placeholder="0"
                    maxLength={5}
                    style={{width: '50%', marginBottom: '1rem'}}
                    />

                    <TitleCaption>{prevGame} 감도 입력</TitleCaption>
                    <Input
                    value={inputPrevSensitivity}
                    onChange={onChangePrevSensitivity}
                    placeholder="0"
                    maxLength={5}
                    style={{width: '50%', marginBottom: '1rem'}}
                    />

                    <TitleCaption>발로란트 DPI 입력</TitleCaption>

                    <Input
                    value={inputValorantDpi}
                    onChange={onChangeValorantDpi}
                    placeholder="0"
                    maxLength={5}
                    style={{width: '50%', marginBottom: '1rem'}}
                    />

                    <TitleCaption>발로란트에서 설정할 감도</TitleCaption>
                    <div style={{fontSize: '1.2rem', fontWeight: 'bold', color: 'black'}}>
                        { resultValorantSensitivity }
                    </div>
                </div>
            </Col>
            <div style={{display: 'flex', justifyContent: 'center', margin: '2rem'}}>
                <img src={require('../images/mainLogo.png')} style={{width: '20%', alignSelf: 'flex-start'}} alt='valog.gg main logo' />
            </div>
        </Row>
    )
}
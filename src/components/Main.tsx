import React, { useState, useCallback } from 'react'
import MetaTags from 'react-meta-tags';
import styled from 'styled-components'
import { Row, Col, Button, Alert, Input, message } from 'antd';
import { MessageOutlined, CloseOutlined} from '@ant-design/icons';
import { Link } from 'react-router-dom'
import Jumbotron from '../images/official-background.jpg'
import AdSense from 'react-adsense';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import Adfit from './subcomponents/Adfit';
import { patchNotePhrase } from '../datas/guide'
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import { apiServer } from '../serverUrl';

const { Search } = Input;

message.config({
    top: 250,
});   

const MainTextTitle = styled.div`
    color: black;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1rem;
`

const MainTextDesc = styled.div`
    color: gray;
    font-size: 1.4rem;
`

const HR = styled.div`
    width: 100%;
    height: 1;
    border-bottom: 1px solid gray;
    margin-top: 1rem;
    margin-bottom: 1rem;
`

export default function Main(props) {

    const [ openHelpdesk, setOpenHelpdesk ] = useState(false)

    const [ inputEmail, setInputEmail ] = useState('')
    const [ inputDesc, setInputDesc ] = useState('')
    const [ emailError, setEmailError ] = useState(false)

    const toggleHelpdesk = useCallback(() => {
        if(openHelpdesk) setOpenHelpdesk(false)
        else setOpenHelpdesk(true)
    },[openHelpdesk])

    const sendHelpdesk = useCallback((email, desc) => {
        const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
        const result = pattern.test(email)

        if(result){
            setOpenHelpdesk(false)
            setInputEmail('')
            setInputDesc('')
            setEmailError(false)
            axios.post(`${apiServer}/helpdesk`, {
                data: {
                    email: email,
                    description: desc
                }
            })
            .then(res => {
                if(res.data.affectedRows === 1){
                    message.success(<span style={{color: 'black'}}>의견이 접수되었습니다. 최대한 신속하게 해당 이메일로 답변드리겠습니다.</span>);
                } else {
                    message.error(<span style={{color: 'black'}}>접수 중 에러가 발생했습니다. 나중에 다시 시도해주세요.</span>);
                }
            })
            .catch(function (error) {
                message.error(<span style={{color: 'black'}}>접수 중 에러가 발생했습니다. 나중에 다시 시도해주세요.</span>);
            });
        } else {
            setEmailError(true)
        }
    },[])

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(236, 232, 225, 0.95)', height: 'auto'}} >
            <MetaTags>              
                <title>발로그 - 발로란트 정보의 모든 것</title>
                <meta name="description" content={`발로그에서 요원, 무기, 스킨, 맵, 요원 별 전략 등 다양하고 유용한 정보를 습득하세요!`} />
            </MetaTags>
            {
                openHelpdesk ?
                <div style={{width: 320, backgroundColor: '#f5f5f5', position: 'fixed', right: '5%', bottom: 120, zIndex: 20, borderRadius: 4, boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 5px 30px 0px, rgba(0, 0, 0, 0.05) 0px 3px 3px 0px'}}>
                    <div style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', width: '100%', height: '20%', display: 'flex', flexDirection: 'column' , justifyContent: 'center', alignItems: 'center', padding: '2rem 0'}}>
                        <div style={{fontWeight: 'bold', fontSize: '1.2rem'}}>
                            무엇을 도와드릴까요?
                        </div>
                        <div>
                            문의, 건의, 버그 제보 등 각종 의견을 보내주세요.
                        </div>
                    </div>
                    <div style={{padding: '1rem'}}>
                        <Input placeholder="이메일 주소" value={inputEmail} onChange={e => setInputEmail(e.target.value)} />
                        { emailError ? <div style={{color: 'red'}}>유효한 이메일을 입력해주세요.</div> : null}
                        <TextArea rows={6} placeholder="내용을 입력해주세요." value={inputDesc} onChange={e => setInputDesc(e.target.value)} maxLength={400} style={{margin: '1rem 0'}} />
                        <Button type="primary" style={{margin: '1rem 0', width: '100%'}} onClick={() => sendHelpdesk(inputEmail, inputDesc)}>보내기</Button>
                    </div>
                </div>
                :
                null
            }
            {
                window.innerWidth < 576 ?
                null
                :
                <a style={{width: '4rem', height: '4rem', borderRadius: '4rem', backgroundColor: 'gray', position: 'fixed', right: '5%', bottom: 30, zIndex: 20, display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0.8}} onClick={toggleHelpdesk}>
                    { openHelpdesk ? <CloseOutlined style={{fontSize: '1.8rem'}} /> : <MessageOutlined style={{fontSize: '1.8rem'}} /> }
                </a>
            }
            <Col xs={24} sm={24} md={0} lg={0} xl={0} style={{marginBottom: '1rem'}}>
                {/* <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 30, backgroundColor: 'orange'}}>
                    발로란트 정식출시! 패치노트 1.0 바로가기
                </div> */}
                <Alert type="warning" message={<Link to="/guide" style={{color: 'black'}}>{patchNotePhrase}</Link>} showIcon={false} banner closable />
                <div style={{display: 'flex', width: '100%', height: 200, backgroundImage: `url(${Jumbotron})`, backgroundSize: 'cover', backgroundPosition: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        {/* <div style={{fontWeight: 'bold', fontSize: '1.2rem'}}>
                            발로란트 정보의 모든 것, 발로그
                        </div> */}
                        {/* <Search 
                        placeholder="유저 네임을 입력해주세요." 
                        size="large"
                        onSearch={value => props.history.push(`/player/${value}`)} 
                        enterButton style={{width: '90%'}} /> */}
                        {/* <div>
                            <Link to={`/guide/0/0`}><Button type="primary">0.50 패치노트 바로가기</Button></Link>
                        </div> */}
                </div>
            </Col>
            <Col xs={0} sm={0} md={24} lg={24} xl={24} style={{marginBottom: '1rem'}}>
                <div style={{display: 'flex', justifyContent: 'center'}} >
                    <div style={{position: 'absolute', fontSize: '2rem', top: '30%', textAlign: 'center'}}>
                        <div>
                            발로란트 정보의 모든 것, 발로그
                        </div>
                        {/* <Search
                        placeholder="유저 네임을 입력해주세요."
                        enterButton="검색"
                        size="large"
                        onSearch={value => props.history.push(`/player/${value}`)}
                        /> */}
                        {/* <div style={{fontSize: '1.2rem'}}>
                            <Link to={`/guide/0/0`}><Button type="primary">0.50 패치노트 바로가기</Button></Link>
                        </div> */}
                    </div>
                </div>
                <div >
                    <img src={require('../images/official-main-image.png')} style={{width: '100%'}} alt="background cut 20 degree" />   
                </div>
            </Col>
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                {/* <a target='_blank' href="https://play.google.com/store/apps/details?id=com.mobile_valopgg" style={{display: 'flex', justifyContent: 'center', marginTop: '1rem', marginLeft: '1rem', marginRight: '1rem'}}>
                    <Alert message="발로그 안드로이드 앱이 출시되었습니다! 바로가기" type="success" showIcon closable />
                </a> */}
                <Row style={{padding: '1rem'}}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        {/* <img src={require('../images/mainImages0.jpg')} style={{width: '100%'}} /> */}
                        <TwitterTimelineEmbed
                        sourceType="profile"
                        screenName="valoggg"
                        theme="light"
                        noHeader
                        noFooter
                        options={{width: '100%'}}
                        autoHeight
                        />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <MainTextTitle>
                            FPS 입문자들부터 고인물까지 모두 환영하는 사이트, Valog.gg
                        </MainTextTitle>
                        <MainTextDesc>
                            발로란트를 처음 하시나요? 발로그에서 자신에게 맞는 캐릭터를 찾아보고 주 캐릭터로 삼아보세요! 
                        </MainTextDesc>
                        
                        <Button style={{marginTop: 10}}><Link to="/agentrecom">바로가기</Link></Button>
                    </Col>
                    <HR />
                </Row>
                <Row style={{padding: '1rem'}}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <MainTextTitle>
                            발로란트 관련 정보 모음
                        </MainTextTitle>
                        <MainTextDesc>
                            발로그에서 요원, 무기, 스킨, 맵, 요원 별 전략 등 다양하고 유용한 정보를 습득하세요!
                        </MainTextDesc>
                        
                        <Button style={{marginTop: 10}}><Link to="/strat">바로가기</Link></Button>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <img src={require('../images/mainImages1.jpg')} style={{width: '100%'}} alt="helper to explain website" />
                    </Col>
                    <HR />
                </Row>
                <Row style={{padding: '1rem'}}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <img src={require('../images/mainImages2.jpg')} style={{width: '100%'}} alt="helper to explain website" />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <MainTextTitle>
                            중급자 이상을 위한 다양한 정보들
                        </MainTextTitle>
                        <MainTextDesc>
                            각종 프로들과 스트리머들의 마우스 감도 설정, 키보드 설정, 그래픽 설정, 감도 계산기 등을 발로그에서 확인하실 수 있습니다!
                        </MainTextDesc>
                        
                        <Button style={{marginTop: 10}}><Link to="/prosetting">바로가기</Link></Button>
                    </Col>
                </Row>

                {/* <AdSense.Google
                    key={Math.random()}
                    client="ca-pub-1635386604461382"
                    slot="1654741413"
                    style={{ display: 'block' }}
                    format="auto"
                    responsive="true"
                /> */}

                { window.innerWidth < 576 ? null : <Adfit adUnit="DAN-qecnqcrgj3n6" adWidth="728" adHeight="90" /> }

                {/* <Collapse defaultActiveKey={['1']} >
                    <Panel header="0.49 패치노트" key="1">
                        <div style={{color: 'black', width: '100%'}}>
                            <ReactMarkdown source={input} />
                            탑 10 랭킹
                        </div>
                    </Panel>
                </Collapse> */}
            </Col>
        </Row>
    )
}
import React, { useState, useCallback } from 'react'
import { Row, Col, Table, BackTop, Input, Select, Rate, Checkbox, Button, message, Tag } from 'antd';
import styled from 'styled-components'
import { AudioOutlined, AudioMutedOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios'
import { apiServer } from '../../serverUrl';
import { agent } from '../../datas/agent'
import { badWords } from '../../datas/badWords'

const { Option } = Select;
const { CheckableTag } = Tag;

const WriteEachTitle = styled.span`
    font-weight: bold;
    margin-right: 1rem;
    color: gray;
`

const eachColumn = {
    margin: '0.4rem 0'
}

const currentMemberArray = [1,2,3,4,5]
const modeArray = [ '전체', '일반', '경쟁전', '스파이크 돌격']
const tierArray = [ '전체', '아이언', '브론즈', '실버', '골드', '플래티넘', '다이아몬드', '불멸', '발로란트']

export default function PartyWrite(props){

    const { fetchParties, setWriteTab } = props;

    const [ writeMode, setWriteMode ] = useState<any>(null) //0무관 1노말 2경쟁 3스파이크러쉬
    const [ writeTier, setWriteTier ] = useState<any>(null) //0무관 1아이언 2브론즈 3실버 4골드 5플래티넘 6다이아몬드 7불멸 8발로란트
    const [ writeCurrentMember, setWriteCurrentMember ] = useState<any>(1)
    const [ writeMicNeed, setWriteMicNeed ] = useState<any>(0) //0무관 1필수
    const [ writePlaytime, setWritePlaytime ] = useState<any>(0)

    // const [ selectedAgent, setSelectedAgent ] = useState<any>([])
    // const handleSelectedAgent = useCallback((agentName, checked) => {
    //     const next = checked ? [...selectedAgent, agentName] : selectedAgent.filter(t => t !== agentName);
    //     console.log('You are interested in: ', next);
    //     setSelectedAgent(next)
    // },[selectedAgent])

    const [ preferredAgent, setPreferredAgent ] = useState<any>([])
    const handlePreferredAgent = useCallback((agentName, checked) => {
        const next = checked ? [...preferredAgent, agentName] : preferredAgent.filter(t => t !== agentName);
        // console.log('You are interested in: ', next);
        setPreferredAgent(next)
    },[preferredAgent])

    const [ writeUsername, setWriteUsername ] = useState('')
    const [ writeUsertag, setWriteUsertag ] = useState('')
    const [ writeDescription, setWriteDescription ] = useState('')
    const [ writePassword, setWritePassword ] = useState('')

    const submitWrite = useCallback(() => {
        //여기서 선택 다 했는지 입력 다 했는지 유효성 확인 필요
        if( writeMode === null || writeTier === null || writeUsername === '' ||  writeUsertag === '' || writeDescription === '' || writePlaytime === '' || writePassword === ''){
            message.error(<span style={{color: 'black'}}>빠뜨린 부분은 없는지 다시 확인해주세요.</span>);
        } else {
            let filteringString = writeDescription + ' ' + writeUsername + ' ' + writeUsertag //연결해서 셋 다 검사
            if(badWords.some( v => filteringString.includes(v))){
                window.location.reload()
            } else {
                // console.log('금지어 없음')
                axios.post( `${apiServer}/party/write`, { //'http://192.168.0.106:8181/party/write' ,{ //
                    data: {
                        mode: writeMode,
                        tier: writeTier,
                        current_member: writeCurrentMember,
                        mic_need: writeMicNeed === true ? '1' : '0',
                        playtime: writePlaytime,
                        preferred_agent: preferredAgent,
        
                        username: writeUsername,
                        usertag: writeUsertag,
                        description: writeDescription,
                        password: writePassword
                    }
                })
                .then(res => {
                    if(res.data.affectedRows === 1){
                        setWriteTab(false)
                        message.success(<span style={{color: 'black'}}>성공적으로 등록 되었습니다.</span>);
                        fetchParties()
                    } else {
                        message.error(<span style={{color: 'black'}}>잠시후 다시 시도해주세요.</span>);
                    }
                })
                .catch(function (error) {
                    message.error(<span style={{color: 'black'}}>잠시후 다시 시도해주세요.</span>);
                });
            }
        }
    },[writeMode, writeTier, writeCurrentMember, writeMicNeed, writePlaytime, preferredAgent, writeUsername, writeUsertag, writeDescription, writePassword])

    return (
        <Row style={{backgroundColor: 'rgb(24, 35, 56)', width: '100%', padding: '3%', border: '1px solid gray'}}>
            <div style={{fontWeight: 'bold', color: 'white', fontSize: '1.2rem', marginBottom: '1rem'}}> 파티 모집 신규 등록 </div>

            <Col span={24} style={eachColumn}>
                <WriteEachTitle>게임 모드 : </WriteEachTitle>
                <Select defaultValue="게임 모드" style={{ width: 120, color: 'black' }} onChange={v => setWriteMode(v)}>
                    {modeArray.map((v, index)=> <Option key={v} value={index}>{v}</Option>)}
                </Select>
            </Col>

            <Col span={24} style={eachColumn}>
                <WriteEachTitle>적정 티어 : </WriteEachTitle>
                <Select defaultValue="적정 티어" style={{ width: 120, color: 'black' }} onChange={v => setWriteTier(v)}>
                    {tierArray.map((v, index)=> <Option key={v} value={index}>{v}</Option>)}
                </Select>
            </Col>

            <Col span={24} style={eachColumn}>
                <WriteEachTitle>현재 인원 :</WriteEachTitle>
                {currentMemberArray.map(v => {
                    if(v <= writeCurrentMember) {
                        return <a key={Math.random()} onClick={() => setWriteCurrentMember(v)}><UserOutlined style={{color: 'gold', fontSize: '1.4rem', margin: 5}} /></a>
                    } else {
                        return <a key={Math.random()} onClick={() => setWriteCurrentMember(v)}><UserOutlined style={{color: 'gray', fontSize: '1.4rem', margin: 5}} /></a>
                    }
                })}
                {/* <Rate character={<UserOutlined />} value={writeCurrentMember} onChange={v => setWriteCurrentMember(v)} /> */}
            </Col>

            <Col span={24} style={eachColumn}>
                <WriteEachTitle>마이크 필수 여부 : </WriteEachTitle>
                <Checkbox onChange={(e) => setWriteMicNeed(e.target.checked)} style={{color: 'white'}}>
                    {writeMicNeed ? <span><AudioOutlined style={{color: '#ff324c'}} /> 필수</span> : <span><AudioMutedOutlined /> 자유</span> }
                </Checkbox>
            </Col>

            <Col span={24} style={eachColumn}>
                <WriteEachTitle>예상 플레이 시간 : </WriteEachTitle> 
                <Input maxLength={1} style={{width: 20, padding: 0}} onChange={v => setWritePlaytime(v.target.value)} /> 시간
            </Col>

            {/* <div>
                선택된 요원
                {agent.map(v =>
                    <CheckableTag
                    key={v.id}
                    checked={selectedAgent.indexOf(v.name.toLowerCase()) > -1}
                    onChange={checked => handleSelectedAgent(v.name.toLowerCase(), checked)}
                    >
                        <img src={require(`../images/agents/${v.name.toLowerCase()}-headshot.png`)} style={{width: '2rem', borderRadius: '0rem', border: `0px solid ${v.signature_color}`}} alt="Valorant agent select button" />
                    </CheckableTag>
                )}
            </div> */}

            <Col span={24} style={eachColumn}>
                <div>
                    <WriteEachTitle>나 혹은 파티 멤버가 플레이를 선호하는 요원</WriteEachTitle>
                </div>
                <div style={{margin: 10, width: '100%'}}>
                    {agent.map(v =>
                        <CheckableTag
                        key={v.id}
                        checked={preferredAgent.indexOf(v.name.toLowerCase()) > -1}
                        onChange={checked => handlePreferredAgent(v.name.toLowerCase(), checked)}
                        style={{margin: '3px 3px'}}
                        >
                            <img src={require(`../../images/agents/${v.name.toLowerCase()}-headshot.png`)} style={{width: '2rem', borderRadius: '0rem', border: `0px solid ${v.signature_color}`}} alt="Valorant agent select button" />
                        </CheckableTag>
                    )}
                </div>
            </Col>

            <Col span={24} style={eachColumn}>
                <div>
                    <WriteEachTitle>유저네임</WriteEachTitle>
                </div>
                <Input onChange={v => setWriteUsername(v.target.value)} placeholder="닉네임" style={{width: 150}} />
                <span style={{fontWeight: 'bold', fontSize: '1.4rem', margin: '0 0.5rem'}}>#</span> <Input onChange={v => setWriteUsertag(v.target.value)} placeholder="태그" style={{width: 100}} />
            </Col>

            <Col span={24} style={eachColumn}>
                <WriteEachTitle>내용</WriteEachTitle>
                <Input.TextArea onChange={v => setWriteDescription(v.target.value)} placeholder="간단히 설명해주세요." maxLength={160} />
            </Col>

            <Col span={24} style={eachColumn}>
                <WriteEachTitle>비밀번호</WriteEachTitle>
                <Input.Password onChange={v => setWritePassword(v.target.value)} placeholder="비밀번호" maxLength={16} style={{width: 150}} />
                <div style={{color: 'gray', margin: '1rem 0'}}>비밀번호는 암호화되어 저장되며, 파티 모집 갱신/삭제 시 이용됩니다. 영어와 숫자 이용을 권장드립니다.</div>
                타인을 사칭하거나 악의적인 도배는 법률에 의해 제재를 받을 수 있으며 해당 ip는 수집되어 웹사이트 이용에 제한이 있을 수 있습니다.
            </Col>

            <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', width: '100%', margin: '1rem 0'}}>
                <Button type="primary" onClick={submitWrite} style={{width: '40%'}}> 작성 </Button>
            </div>
        </Row>
    )
}
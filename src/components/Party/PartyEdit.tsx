import React, { useState, useCallback } from 'react'
import { Row, Col, Table, BackTop, Input, Select, Rate, Checkbox, Button, message, Tag } from 'antd';
import styled from 'styled-components'
import { AudioOutlined, AudioMutedOutlined, CloseOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios'
import { apiServer, staticServer } from '../../serverUrl';
import { agent } from '../../data/agent'

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

export default function PartyEdit(props){

    const { fetchParties, setEditTab, id, mode, tier, currentMember, micNeed, playtime, preferredAgent, username, description, ipAddress, updatedAt } = props

    const [ writeMode, setWriteMode ] = useState<any>(mode) //0무관 1노말 2경쟁 3스파이크러쉬
    const [ writeTier, setWriteTier ] = useState<any>(tier) //0무관 1아이언 2브론즈 3실버 4골드 5플래티넘 6다이아몬드 7불멸 8발로란트
    const [ writeCurrentMember, setWriteCurrentMember ] = useState<any>(currentMember)
    const [ writeMicNeed, setWriteMicNeed ] = useState<any>(micNeed) //0무관 1필수
    const [ writePlaytime, setWritePlaytime ] = useState<any>(playtime)

    // const [ selectedAgent, setSelectedAgent ] = useState<any>([])
    // const handleSelectedAgent = useCallback((agentName, checked) => {
    //     const next = checked ? [...selectedAgent, agentName] : selectedAgent.filter(t => t !== agentName);
    //     console.log('You are interested in: ', next);
    //     setSelectedAgent(next)
    // },[selectedAgent])

    const [ writePreferredAgent, setWritePreferredAgent ] = useState<any>(preferredAgent.split(','))
    const handlePreferredAgent = useCallback((agentName, checked) => {
        const next = checked ? [...writePreferredAgent, agentName] : writePreferredAgent.filter(t => t !== agentName);
        // console.log('You are interested in: ', next);
        setWritePreferredAgent(next)
    },[writePreferredAgent])

    const [ writeUsername, setWriteUsername ] = useState(username.split('#')[0])
    const [ writeUsertag, setWriteUsertag ] = useState(username.split('#')[1])
    const [ writeDescription, setWriteDescription ] = useState(description)
    const [ writePassword, setWritePassword ] = useState('')

    const submitEdit = useCallback(() => {
        if( writeMode === null || writeTier === null || writeUsername === '' ||  writeUsertag === '' || writeDescription === '' || writePlaytime === '' || writePassword === ''){
            message.error(<span style={{color: 'black'}}>빠뜨린 부분은 없는지 다시 확인해주세요.</span>);
        } else {
            axios.put(  `${apiServer}/party/update/${id}`, { //`http://192.168.0.106:8181/party/update/${id}` ,{ // 
                data: {
                    mode: writeMode,
                    tier: writeTier,
                    current_member: writeCurrentMember,
                    mic_need: writeMicNeed === true ? '1' : '0',
                    playtime: writePlaytime,
                    preferred_agent: writePreferredAgent,
    
                    username: writeUsername,
                    usertag: writeUsertag,
                    description: writeDescription,
                    password: writePassword
                }
            })
            .then(res => {
                // console.log(res.data)
                if(res.data.affectedRows === 1){
                    setEditTab(false)
                    message.success(<span style={{color: 'black'}}>성공적으로 수정/갱신 되었습니다.</span>);
                    fetchParties()
                } else {
                    message.error(<span style={{color: 'black'}}>빠뜨린 부분은 없는지, 비밀번호가 일치하는지 확인해주세요.</span>);
                }
            })
            .catch(function (error) {
                message.error(<span style={{color: 'black'}}>잠시후 다시 시도해주세요.</span>);
            });
        }
    },[writeMode, writeTier, writeCurrentMember, writeMicNeed, writePlaytime, writePreferredAgent, writeUsername, writeUsertag, writeDescription, writePassword])

    const deleteParty = useCallback(() => {
        //정말 삭제할건지 물어보는 팝업창 필요
        axios.post(  `${apiServer}/party/delete/${id}`, { //`http://192.168.0.106:8181/party/update/${id}` ,{ // 
            data: {
                password: writePassword
            }
        })
        .then(res => {
            // console.log(res.data)
            if(res.data.affectedRows === 1){
                setEditTab(false)
                message.success(<span style={{color: 'black'}}>파티 모집글이 삭제되었습니다.</span>);
                fetchParties()
            } else {
                message.error(<span style={{color: 'black'}}>비밀번호가 일치하는지 확인해주세요.</span>);
            }
        })
        .catch(function (error) {
            message.error(<span style={{color: 'black'}}>잠시후 다시 시도해주세요.</span>);
            });
    },[writePassword])

    return (
        <Row style={{backgroundColor: 'rgb(24, 35, 56)', width: '100%', padding: '3%', border: '1px solid gray'}}>
            <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem'}}>
                <div style={{fontWeight: 'bold', color: 'white', fontSize: '1.2rem'}}> 파티 모집 수정 </div>
                <CloseOutlined onClick={() => setEditTab(false)} style={{fontSize: '1.2rem'}} />
            </div>

            <Col span={24} style={eachColumn}>
                <WriteEachTitle>게임 모드 : </WriteEachTitle>
                <Select defaultValue={writeMode} style={{ width: 120, color: 'black' }} onChange={v => setWriteMode(v)}>
                    {modeArray.map((v, index)=> <Option key={v} value={index}>{v}</Option>)}
                </Select>
            </Col>

            <Col span={24} style={eachColumn}>
                <WriteEachTitle>적정 티어 : </WriteEachTitle>
                <Select defaultValue={tier} style={{ width: 120, color: 'black' }} onChange={v => setWriteTier(v)}>
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
            </Col>

            <Col span={24} style={eachColumn}>
                <WriteEachTitle>마이크 필수 여부 : </WriteEachTitle>
                <Checkbox checked={writeMicNeed} onChange={(e) => setWriteMicNeed(e.target.checked)} style={{color: 'white'}}>
                    {writeMicNeed ? <span><AudioOutlined style={{color: '#ff324c'}} /> 필수</span> : <span><AudioMutedOutlined /> 자유</span> }
                </Checkbox>
            </Col>

            <Col span={24} style={eachColumn}>
                <WriteEachTitle>예상 플레이 시간 : </WriteEachTitle> 
                <Input value={writePlaytime} maxLength={1} style={{width: 20, padding: 0}} onChange={v => setWritePlaytime(v.target.value)} /> 시간
            </Col>

            <Col span={24} style={eachColumn}>
                <div>
                    <WriteEachTitle>나 혹은 파티 멤버가 플레이를 선호하는 요원</WriteEachTitle>
                </div>
                <div style={{margin: 10, width: '100%'}}>
                    {agent.map(v =>
                        <CheckableTag
                        key={v.id}
                        checked={writePreferredAgent.indexOf(v.name.toLowerCase()) > -1}
                        onChange={checked => handlePreferredAgent(v.name.toLowerCase(), checked)}
                        style={{margin: '3px 3px'}}
                        >
                            <img src={(`${staticServer}/agents/${v.name.toLowerCase()}-headshot.png`)} style={{width: '2rem', borderRadius: '0rem', border: `0px solid ${v.signature_color}`}} alt="Valorant agent select button" />
                        </CheckableTag>
                    )}
                </div>
            </Col>

            <Col span={24} style={eachColumn}>
                <div>
                    <WriteEachTitle>유저네임</WriteEachTitle>
                </div>
                <Input onChange={v => setWriteUsername(v.target.value)} placeholder="닉네임" style={{width: 150}} value={writeUsername} />
                <span style={{fontWeight: 'bold', fontSize: '1.4rem', margin: '0 0.5rem'}}>#</span> 
                <Input onChange={v => setWriteUsertag(v.target.value)} placeholder="태그" style={{width: 100}} value={writeUsertag} />
            </Col>

            <Col span={24} style={eachColumn}>
                <WriteEachTitle>내용</WriteEachTitle>
                <Input.TextArea onChange={v => setWriteDescription(v.target.value)} placeholder="간단히 설명해주세요." maxLength={160} value={writeDescription} />
            </Col>
            
            <Col span={24} style={eachColumn}>
                <WriteEachTitle>비밀번호</WriteEachTitle>
                <Input.Password onChange={v => setWritePassword(v.target.value)} placeholder="비밀번호" maxLength={16} style={{width: 150}} />
            </Col>

            <div style={{display: 'flex', justifyContent:'space-evenly', alignItems: 'center', width: '100%', margin: '1rem 0'}}>
                <Button type="primary" onClick={submitEdit} style={{width: '40%'}}> 수정/갱신 </Button>
                <Button type="default" onClick={deleteParty} style={{width: '40%'}} icon={<DeleteOutlined />}> 삭제 </Button>
            </div>
        </Row>
    )
}
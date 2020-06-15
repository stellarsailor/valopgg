import React, { useState, useCallback } from 'react'
import { Row, Col, Table, BackTop, Input, Select, Rate, Checkbox, Button, message, Tag } from 'antd';
import { AudioOutlined, AudioMutedOutlined, EllipsisOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios'
import { apiServer } from '../../serverUrl';
import { agent } from '../../datas/agent'

const { Option } = Select;
const { CheckableTag } = Tag;

export default function PartyWrite(props){

    const { fetchParties } = props;

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
        if( writeMode === null || writeTier === null || writeUsername === '' ||  writeUsertag === '' || writeDescription === '' || writePassword === ''){
            message.error(<span style={{color: 'black'}}>빠뜨린 부분은 없는지 다시 확인해주세요.</span>);
        }
        // console.log(writeMode)
        // console.log(writeTier)
        // console.log(writeCurrentMember)
        // console.log(writeMicNeed)
        // console.log(writeUsername)
        // console.log(writeUsertag)
        // console.log(writeDescription)
        // console.log(writePassword)

        axios.post( `${apiServer}/party/write`, { //'http://192.168.0.106:8181/party/write' ,{ //
            data: {
                mode: writeMode,
                tier: writeTier,
                current_member: writeCurrentMember + '',
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
                message.success(<span style={{color: 'black'}}>성공적으로 등록 되었습니다.</span>);
                fetchParties()
            } else {
                message.error(<span style={{color: 'black'}}>잠시후 다시 시도해주세요.</span>);
            }
        })
        .catch(function (error) {
            message.error(<span style={{color: 'black'}}>잠시후 다시 시도해주세요.</span>);
        });
    },[writeMode, writeTier, writeCurrentMember, writeMicNeed, writePlaytime, preferredAgent, writeUsername, writeUsertag, writeDescription, writePassword])

    return (
        <div style={{backgroundColor: 'rgb(24, 35, 56)', width: '100%', padding: '1rem', margin: '0 1rem'}}>
            <Select defaultValue="게임 모드" style={{ width: 120, color: 'black' }} onChange={v => setWriteMode(v)}>
                <Option value="0">전체</Option>
                <Option value="1">일반</Option>
                <Option value="2">경쟁전</Option>
                <Option value="3">스파이크 러쉬</Option>
            </Select>
            <Select defaultValue="적정 티어" style={{ width: 120, color: 'black' }} onChange={v => setWriteTier(v)}>
                <Option value="0">전체</Option>
                <Option value="1">아이언</Option>
                <Option value="2">브론즈</Option>
                <Option value="3">실버</Option>
                <Option value="4">골드</Option>
                <Option value="5">플래티넘</Option>
                <Option value="6">다이아몬드</Option>
                <Option value="7">불멸</Option>
                <Option value="8">발로란트</Option>
            </Select>
            <div style={{backgroundColor: 'black'}}>
                <Rate character={<UserOutlined />} value={writeCurrentMember} onChange={v => setWriteCurrentMember(v)} />
            </div>

            <Checkbox onChange={(e) => setWriteMicNeed(e.target.checked)} style={{color: 'white'}}>마이크 필수</Checkbox>

            예상 플레이 시간 : <Input maxLength={1} style={{width: 30}} onChange={v => setWritePlaytime(v.target.value)} />

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

            <div style={{padding: 10}}>
                <div style={{fontWeight: 'bold', marginBottom: 5}}>선호 요원</div>
                {agent.map(v =>
                    <CheckableTag
                    key={v.id}
                    checked={preferredAgent.indexOf(v.name.toLowerCase()) > -1}
                    onChange={checked => handlePreferredAgent(v.name.toLowerCase(), checked)}
                    >
                        <img src={require(`../../images/agents/${v.name.toLowerCase()}-headshot.png`)} style={{width: '2rem', borderRadius: '0rem', border: `0px solid ${v.signature_color}`}} alt="Valorant agent select button" />
                    </CheckableTag>
                )}
            </div>

            <div>
            <Input onChange={v => setWriteUsername(v.target.value)} placeholder="닉네임" style={{width: 100}} />
            <span style={{fontWeight: 'bold', fontSize: '1.4rem', margin: '0 0.5rem'}}>#</span> <Input onChange={v => setWriteUsertag(v.target.value)} placeholder="태그" style={{width: 100}} />
            </div>
            <div style={{margin: '1rem 0'}}>
                내용 <Input onChange={v => setWriteDescription(v.target.value)} placeholder="간단히 설명해주세요." maxLength={160} />
            </div>
            <div>
                비밀번호 <Input.Password onChange={v => setWritePassword(v.target.value)} placeholder="비밀번호" maxLength={16} style={{width: 120}} />
                <div>비밀번호는 암호화되어 저장되며, 파티 모집 갱신/삭제 시 이용됩니다. 현재 한글 버그가 있어 수정중입니다.</div>
            </div>
            <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', width: '100%', margin: '1rem 0'}}>
                <Button type="primary" onClick={submitWrite} style={{width: '40%'}}> 작성 </Button>
            </div>
        </div>
    )
}
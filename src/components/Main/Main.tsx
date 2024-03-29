import React, { useState, useCallback, useEffect } from "react"
import MetaTags from "react-meta-tags"
import styled from "styled-components"
import { Row, Col, Button, Alert, Input, message, Spin, Empty } from "antd"
import { MessageOutlined, CloseOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import TextArea from "antd/lib/input/TextArea"
import axios from "axios"
import { apiServer } from "../../serverUrl"
import PartyRenderer from "../Party/PartyRenderer"
import WeaponCollection from "../Weapon/WeaponCollection"
import { isMobile } from "react-device-detect"
import { battlepass } from "../../data/battlepass"

message.config({
  top: 250,
})

export default function Main(props) {
  const [openHelpdesk, setOpenHelpdesk] = useState(false)

  const [inputEmail, setInputEmail] = useState("")
  const [inputDesc, setInputDesc] = useState("")
  const [emailError, setEmailError] = useState(false)

  const [partyList, setPartyList] = useState<Array<any>>([])
  const [asyncLoading, setAsyncLoading] = useState(true)

  useEffect(() => {
    fetchParties()
  }, [])

  const fetchParties = useCallback(() => {
    setAsyncLoading(true)
    axios.get(`${apiServer}/party/select/all`).then((res) => {
      // console.log(res.data)
      setPartyList(res.data)
      setAsyncLoading(false)
    })
  }, [])

  const toggleHelpdesk = useCallback(() => {
    if (openHelpdesk) setOpenHelpdesk(false)
    else setOpenHelpdesk(true)
  }, [openHelpdesk])

  const sendHelpdesk = useCallback((email, desc) => {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g
    const result = pattern.test(email)

    if (result) {
      setOpenHelpdesk(false)
      setInputEmail("")
      setInputDesc("")
      setEmailError(false)
      axios
        .post(`${apiServer}/helpdesk`, {
          data: {
            email: email,
            description: desc,
          },
        })
        .then((res) => {
          if (res.data.affectedRows === 1) {
            message.success(
              <span style={{ color: "black" }}>
                의견이 접수되었습니다. 최대한 신속하게 해당 이메일로
                답변드리겠습니다.
              </span>,
            )
          } else {
            message.error(
              <span style={{ color: "black" }}>
                접수 중 에러가 발생했습니다. 나중에 다시 시도해주세요.
              </span>,
            )
          }
        })
        .catch(function (error) {
          message.error(
            <span style={{ color: "black" }}>
              접수 중 에러가 발생했습니다. 나중에 다시 시도해주세요.
            </span>,
          )
        })
    } else {
      setEmailError(true)
    }
  }, [])

  return (
    <Row
      justify="center"
      style={{ backgroundColor: "rgba(19, 28, 46, 0.95)", height: "auto" }}
    >
      <MetaTags>
        <title>발로그 지지 - 발로란트 정보의 모든 것</title>
        <meta
          name="description"
          content={`발로그 지지에서 요원 정보, 요원 별 전략 및 가이드, 무기 정보 및 총기 스킨, 맵 용어, 맵 콜아웃, 반응속도 측정 테스트, 배틀패스 계산기, 감도 변환기, 발로란트 파티 모집 등 등 다양하고 유용한 정보를 습득하세요!`}
        />
      </MetaTags>
      {openHelpdesk ? (
        <div
          style={{
            width: 320,
            backgroundColor: "#f5f5f5",
            position: "fixed",
            right: "5%",
            bottom: 120,
            zIndex: 20,
            borderRadius: 4,
            boxShadow:
              "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 5px 30px 0px, rgba(0, 0, 0, 0.05) 0px 3px 3px 0px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(19, 28, 46, 0.95)",
              width: "100%",
              height: "20%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem 0",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
              무엇을 도와드릴까요?
            </div>
            <div>문의, 건의, 버그 제보 등 각종 의견을 보내주세요.</div>
          </div>
          <div style={{ padding: "1rem" }}>
            <Input
              placeholder="이메일 주소"
              value={inputEmail}
              onChange={(e) => setInputEmail(e.target.value)}
            />
            {emailError ? (
              <div style={{ color: "red" }}>유효한 이메일을 입력해주세요.</div>
            ) : null}
            <TextArea
              rows={6}
              placeholder="내용을 입력해주세요."
              value={inputDesc}
              onChange={(e) => setInputDesc(e.target.value)}
              maxLength={400}
              style={{ margin: "1rem 0" }}
            />
            <Button
              type="primary"
              style={{ margin: "1rem 0", width: "100%" }}
              onClick={() => sendHelpdesk(inputEmail, inputDesc)}
            >
              보내기
            </Button>
          </div>
        </div>
      ) : null}
      {window.innerWidth < 576 ? null : (
        <CursorSpan
          style={{
            width: "4rem",
            height: "4rem",
            borderRadius: "4rem",
            backgroundColor: "gray",
            position: "fixed",
            right: "5%",
            bottom: 30,
            zIndex: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0.8,
          }}
          onClick={toggleHelpdesk}
        >
          {openHelpdesk ? (
            <CloseOutlined style={{ fontSize: "1.8rem" }} />
          ) : (
            <MessageOutlined style={{ fontSize: "1.8rem" }} />
          )}
        </CursorSpan>
      )}
      <Col
        xs={24}
        sm={24}
        md={0}
        lg={0}
        xl={0}
        style={{ backgroundColor: "lightgray" }}
      >
        <Alert
          type="warning"
          message={
            <a
              href={props.patchNoteData.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "black" }}
            >
              {props.patchNoteData.title}
            </a>
          }
          showIcon={false}
          banner
          closable
        />
      </Col>
      <Row
        style={{
          width: "100%",
          backgroundColor: "rgb(32, 43, 67, 0.0)",
          margin: "1rem 0",
        }}
        justify="center"
      >
        <Col
          xs={24}
          sm={22}
          md={20}
          lg={20}
          xl={15}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Row style={{ width: "100%" }}>
            <Col
              span={isMobile ? 24 : 12}
              style={{ width: "100%", padding: "1rem" }}
            >
              <Link to="/reaction" onClick={() => window.scrollTo(0, 0)}>
                <Row
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "1px solid black",
                  }}
                >
                  <Col span={24}>
                    <div
                      style={{
                        position: "absolute",
                        zIndex: 6,
                        bottom: "1rem",
                        left: "1rem",
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                      }}
                    >
                      반응 속도 측정{" "}
                      <span style={{ fontSize: "1rem" }}>{`${
                        isMobile ? "(모바일)" : "(데스크톱)"
                      }`}</span>
                    </div>
                    <div
                      style={{
                        background:
                          "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30% ,rgba(0,0,0,0.8) 100%)",
                        zIndex: 5,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <img
                      src={require("../../images/main01.png")}
                      style={{ width: "100%", height: "100%", zIndex: -1 }}
                      alt="main"
                    />
                  </Col>
                </Row>
              </Link>
            </Col>
            <Col
              span={isMobile ? 24 : 12}
              style={{ width: "100%", padding: "1rem" }}
            >
              <Row>
                <Col
                  span={24}
                  style={{ marginBottom: "2rem", border: "1px solid black" }}
                >
                  <Link to="/weapon" onClick={() => window.scrollTo(0, 0)}>
                    <div
                      style={{
                        backgroundColor: "black",
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        paddingLeft: 10,
                      }}
                    >
                      무기 스킨 및 번들 할인
                    </div>
                    <div>
                      <WeaponCollection />
                    </div>
                  </Link>
                </Col>
                <Col span={24} style={{ border: "1px solid black" }}>
                  <Link to="/battlepass" onClick={() => window.scrollTo(0, 0)}>
                    <div
                      style={{
                        position: "absolute",
                        zIndex: 6,
                        bottom: "1rem",
                        left: "1rem",
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                      }}
                    >
                      배틀패스 계산기{" "}
                      <span style={{ fontSize: "1rem" }}>
                        ({battlepass[battlepass.length - 1].title})
                      </span>
                    </div>
                    <div
                      style={{
                        background:
                          "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0) 30% ,rgba(0,0,0,1) 100%)",
                        zIndex: 5,
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                    <img
                      src={require("../../images/main02.png")}
                      style={{ width: "100%", zIndex: -1 }}
                      alt="main2"
                    />
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row
        style={{ width: "100%", backgroundColor: "rgb(32, 43, 67, 0.5)" }}
        justify="center"
      >
        <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: "10px 0",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                margin: "0 1rem",
                color: "white",
              }}
            >
              현재 모집 중인 파티 목록
            </span>
            <Link to="/party" style={{ marginLeft: "0rem", color: "white" }}>
              더 보기
            </Link>
          </div>
          <Row gutter={[8, 8]} style={{ padding: "1rem", width: "100%" }}>
            {asyncLoading ? (
              <div
                style={{
                  width: "100%",
                  height: 250,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Spin />
              </div>
            ) : partyList.length === 0 ? (
              <div
                style={{
                  margin: "2rem 0",
                  width: "100%",
                  height: 250,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Empty description={false} />
                <div style={{ margin: "1rem", textAlign: "center" }}>
                  현재 모집 중인 파티가 없어요 ㅠ.ㅠ 파티를 직접 모집 해보시는건
                  어때요?
                </div>
                <Link to="/party">
                  <Button type="primary" style={{ margin: "1rem 0" }}>
                    파티 모집
                  </Button>
                </Link>
              </div>
            ) : (
              partyList.map((v, index) =>
                index < 3 ? (
                  <PartyRenderer
                    key={v.id}
                    iconDisabled={true}
                    fetchParties={fetchParties}
                    id={v.id}
                    mode={v.mode}
                    tier={v.tier}
                    currentMember={v.current_member}
                    micNeed={v.mic_need}
                    playtime={v.playtime}
                    preferredAgent={v.preferred_agent}
                    username={v.username}
                    description={v.description}
                    ipAddress={v.ipAddress}
                    updatedAt={v.updatedAt}
                  />
                ) : null,
              )
            )}
          </Row>
        </Col>
      </Row>
      {/* <Col xs={24} sm={22} md={20} lg={20} xl={15}>
            <Row style={{padding: '1rem'}}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
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
                    
                    <Button style={{marginTop: 10}}><Link to="/weapon">바로가기</Link></Button>
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                    <img src={require('../../images/mainImages1.jpg')} style={{width: '100%'}} alt="helper to explain website" />
                </Col>
            </Row>
            <Row style={{marginBottom: '1rem', padding: '5%'}}>
                <WeaponCollection />
            </Row>
            <Row style={{padding: '1rem'}}>
                <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                    <img src={require('../../images/mainImages2.jpg')} style={{width: '100%'}} alt="helper to explain website" />
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

        </Col> */}
    </Row>
  )
}

const CursorSpan = styled.span`
  cursor: pointer;
`
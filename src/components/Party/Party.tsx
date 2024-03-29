import React, { useEffect, useState, useCallback } from "react"
import MetaTags from "react-meta-tags"
import axios from "axios"
import {
  Row,
  Col,
  Spin,
  BackTop,
  Button,
  message,
  Empty,
} from "antd"
import {
  EditOutlined,
  FileSearchOutlined,
  ReloadOutlined,
} from "@ant-design/icons"
import { Element, scroller } from "react-scroll"
import { apiServer } from "../../serverUrl"
import PartyRenderer from "./PartyRenderer"
import PartyWrite from "./PartyWrite"
import SideAds from "../Ads/SideAds"
import Adsense from "../Ads/Adsense"

message.config({
  top: 250,
})

export default function Party() {
  const [filterTab, setFilterTab] = useState(false)
  const [writeTab, setWriteTab] = useState(false)

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

  const toggleWriteTab = useCallback(() => {
    if (writeTab) setWriteTab(false)
    else {
      scroller.scrollTo("scroll-to-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      })
      setWriteTab(true)
    }
  }, [writeTab])

  const toggleFilterTab = useCallback(() => {
    if (filterTab) setFilterTab(false)
    else setFilterTab(true)
  }, [filterTab])

  return (
    <Row
      justify="center"
      style={{ backgroundColor: "rgba(19, 28, 46, 0.95)", minHeight: 600 }}
    >
      <SideAds thicc={true} />
      <Col xs={24} sm={22} md={20} lg={20} xl={15}>
        <BackTop />
        <MetaTags>
          <title>발로그 발로란트 파티 모집</title>
          <meta
            name="description"
            content={`발로란트 같이 하실분? 여기 다 모여있다! 발로란트 파티모집 발로그. 게임모드, 적정티어, 현재인원, 마이크 필수 여부, 선호 요원 등 상세한 조건에 맞추어 찾아보세요!`}
          />
        </MetaTags>
        <Row
          style={{
            width: "100%",
            backgroundColor: "#202b43",
            margin: "1rem 0",
          }}
        >
          <div
            style={{
              width: "100%",
              padding: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontWeight: "bold", fontSize: "1.6rem" }}>
              파티 모집(Beta){" "}
            </div>
            <div>
              <EditOutlined
                onClick={toggleWriteTab}
                style={{ fontSize: "2rem", marginRight: "1rem" }}
              />
              <FileSearchOutlined
                onClick={toggleFilterTab}
                style={{ fontSize: "2rem", marginRight: "1rem" }}
              />
              <ReloadOutlined
                onClick={fetchParties}
                style={{ fontSize: "2rem", marginRight: "1rem" }}
              />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <Adsense type="pcwide" />
          </div>
          <Element name="scroll-to-element">
            <div style={{ padding: "1rem" }}>
              {writeTab ? (
                <PartyWrite
                  fetchParties={fetchParties}
                  setWriteTab={setWriteTab}
                />
              ) : null}
            </div>
          </Element>
          {filterTab ? (
            <div style={{ width: "100%", textAlign: "center" }}>
              빠른 시일 내에 필터 모드가 추가 될 예정입니다. 조금만
              기다려주세요.
            </div>
          ) : null}
          <Row gutter={[8, 8]} style={{ padding: "1rem", width: "100%" }}>
            {asyncLoading ? (
              <div
                style={{
                  width: "100%",
                  height: 400,
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
                  height: 400,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Empty description={false} />
                <div style={{ margin: "1rem", textAlign: "center" }}>
                  현재 현재 모집 중인 파티가 없어요 ㅠ.ㅠ 파티를 직접 모집
                  해보시는건 어때요?
                </div>
                <Button
                  type="primary"
                  style={{ margin: "1rem 0" }}
                  onClick={toggleWriteTab}
                >
                  파티 모집
                </Button>
              </div>
            ) : (
              partyList.map((v) => (
                <PartyRenderer
                  key={v.id}
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
              ))
            )}
          </Row>
          <div style={{ margin: "1.5rem", textAlign: "center" }}>
            유효한 파티만 노출시키기위해 파티 모집 등록 후 1시간 이내의 파티만
            표시하고 있으며, 무분별한 재등록을 막기위한 필터가 적용되어
            있습니다.
          </div>
        </Row>
      </Col>
      <SideAds />
    </Row>
  )
}

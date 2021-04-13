import React from "react"
import { isMobile } from "react-device-detect"
import MetaTags from "react-meta-tags"
import { Row, Col, Typography } from "antd"
import styled from "styled-components"
import CalculatorBattlepass from "./Calculator"
import SideAds from "../Ads/SideAds"

const { Paragraph } = Typography

export default function Battlepass() {
  return (
    <Row
      justify="center"
      style={{ backgroundColor: "rgba(19, 28, 46, 0.95)", minHeight: 800 }}
    >
      <SideAds thicc={true} />
      <Col
        xs={24}
        sm={22}
        md={20}
        lg={20}
        xl={15}
        style={{
          padding: "4%",
          backgroundColor: "rgb(32, 43, 67)",
          margin: "1rem 0",
        }}
      >
        <MetaTags>
          <title>발로그 발로란트 배틀패스 경험치 계산기</title>
          <meta
            name="description"
            content={
              "발로란트 배틀패스 경험치 요구량 및 보상 스킨 아이템 목록 등의 정보를 제공합니다."
            }
          />
        </MetaTags>
        <div style={{ borderBottom: "0px solid gray" }}>
          <TabMenu isMobile={isMobile} selected={true}>
            배틀패스 계산기
          </TabMenu>
        </div>
        <Paragraph
          style={{ color: "white", fontSize: "1rem", textAlign: "right" }}
          copyable={{ text: `https://valog.gg/battlepass` }}
        >
          링크 복사
        </Paragraph>
        <CalculatorBattlepass />
      </Col>
      <SideAds />
    </Row>
  )
}

const TabMenu = styled.span`
  font-size: ${(props) => (props.isMobile ? "1.2rem" : "1.8rem")};
  margin-right: ${(props) => (props.isMobile ? "1.5rem" : "3rem")};
  border-bottom: ${(props) =>
    props.selected ? "1px solid white" : "0px solid gray"};
  color: ${(props) => (props.selected ? "white" : "gray")};
`

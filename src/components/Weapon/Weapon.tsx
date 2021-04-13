import React from "react"
import MetaTags from "react-meta-tags"
import styled from "styled-components"
import { Row, Col, BackTop } from "antd"
import { weapon } from "../../data/weapon"
import WeaponRender from "./WeaponRender"
import WeaponCollection from "./WeaponCollection"
import SideAds from "../Ads/SideAds"

const WeaponCategory = styled.div`
  background-color: #273552;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
  width: 100%;
  text-align: center;
`

export default function Weapon() {
  return (
    <Row justify="center" style={{ backgroundColor: "rgba(19, 28, 46, 0.95)" }}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24}>
        <BackTop />
        <MetaTags>
          <title>발로란트 무기 정보 및 스킨</title>
          <meta
            name="description"
            content={`발로란트의 모든 무기에 대한 정보와 스킨 이미지를 확인가능합니다. 현재 특별 판매중인 발로란트 번들 세트 카운트다운도 확인해보세요!`}
          />
        </MetaTags>
      </Col>
      <SideAds thicc={true} />
      <Col
        xs={24}
        sm={22}
        md={20}
        lg={20}
        xl={15}
        style={{ marginBottom: "1rem" }}
      >
        <Row
          style={{ width: "100%", backgroundColor: "#202b43" }}
          justify="center"
        >
          <WeaponCollection />
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={4}
            xl={4}
            style={{
              padding: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <WeaponCategory>보조 무기</WeaponCategory>
            {weapon
              .filter((v) => v.category === "Sidearm")
              .map((v, index) => (
                <WeaponRender
                  key={index}
                  name={v.name}
                  name_kr={v.name_ko}
                  cost={v.cost}
                  resize={true}
                />
              ))}
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            style={{
              padding: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <WeaponCategory>기관단총</WeaponCategory>
            {weapon
              .filter((v) => v.category === "SMG")
              .map((v, index) => (
                <WeaponRender
                  key={index}
                  name={v.name}
                  name_kr={v.name_ko}
                  cost={v.cost}
                />
              ))}
            <WeaponCategory>산탄총</WeaponCategory>
            {weapon
              .filter((v) => v.category === "Shotgun")
              .map((v, index) => (
                <WeaponRender
                  key={index}
                  name={v.name}
                  name_kr={v.name_ko}
                  cost={v.cost}
                />
              ))}
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            xl={7}
            style={{
              padding: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <WeaponCategory>소총</WeaponCategory>
            {weapon
              .filter((v) => v.category === "Rifle")
              .map((v, index) => (
                <WeaponRender
                  key={index}
                  name={v.name}
                  name_kr={v.name_ko}
                  cost={v.cost}
                />
              ))}
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            xl={7}
            style={{
              padding: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <WeaponCategory>저격소총</WeaponCategory>
            {weapon
              .filter((v) => v.category === "Sniper")
              .map((v, index) => (
                <WeaponRender
                  key={index}
                  name={v.name}
                  name_kr={v.name_ko}
                  cost={v.cost}
                />
              ))}
            <WeaponCategory>중기관총</WeaponCategory>
            {weapon
              .filter((v) => v.category === "Heavy")
              .map((v, index) => (
                <WeaponRender
                  key={index}
                  name={v.name}
                  name_kr={v.name_ko}
                  cost={v.cost}
                />
              ))}
          </Col>
          <Col
            xs={24}
            sm={12}
            md={12}
            lg={7}
            xl={7}
            style={{
              padding: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <WeaponCategory>근접 무기</WeaponCategory>
            <WeaponRender
              key="10"
              name="Knife"
              name_kr="전술용 나이프"
              cost="0"
            />
          </Col>
        </Row>
      </Col>
      <SideAds />
    </Row>
  )
}

import React from "react"
import MetaTags from "react-meta-tags"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { Row, Col } from "antd"
import { staticServer } from "../../serverUrl"

const Images = [
  `${staticServer}/map/bind-illust.jpeg`,
  `${staticServer}/map/haven-illust.jpeg`,
  `${staticServer}/map/split-illust.jpeg`,
  `${staticServer}/map/ascent-illust.jpeg`,
  `${staticServer}/map/icebox-illust.jpeg`,
  `${staticServer}/map/breeze-illust.jpeg`,
]

export default function Map() {
  const arr = ["Bind", "Haven", "Split", "Ascent", "Icebox", "Breeze"]

  return (
    <Row
      justify="center"
      style={{ backgroundColor: "rgba(19, 28, 46, 0.95)", minHeight: 800 }}
    >
      <Col xs={24} sm={22} md={20} lg={20} xl={15}>
        <MetaTags>
          <title>발로란트 맵 정보, 용어(콜아웃)</title>
          <meta
            name="description"
            content={`발로란트 맵에 대한 정보와 용어(콜아웃)를 확인할 수 있습니다.`}
          />
        </MetaTags>
        <Row>
          {arr.map((v, index) => (
            <Col
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={12}
              style={{
                width: "100%",
                height: 300,
                backgroundColor: "#202b43",
                padding: 10,
                marginTop: 15,
              }}
              key={index}
            >
              <Link to={`/map/${v.toLowerCase()}`}>
                <div
                  style={{
                    backgroundImage: `url(${Images[index]})`,
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 5,
                  }}
                >
                  <BottomText>{v}</BottomText>
                </div>
              </Link>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

const BottomText = styled.div`
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 2rem;
  font-weight: bold;
`

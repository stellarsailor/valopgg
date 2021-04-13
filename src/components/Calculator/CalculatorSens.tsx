import React, { useState, useEffect, useCallback } from "react"
import { Row, Col, Select, Input } from "antd"
import styled from "styled-components"

const { Option } = Select

export default function CalculatorSens() {
  const [prevGame, setPrevGame] = useState("")

  const [inputPrevDpi, setInputPrevDpi] = useState<any>("")
  const [inputPrevSensitivity, setInputPrevSensitivity] = useState<any>("")
  const [inputValorantDpi, setInputValorantDpi] = useState<any>("")

  const [
    resultValorantSensitivity,
    setResultValorantSensitivity,
  ] = useState<number>(0)

  const handleChange = useCallback((value) => {
    setPrevGame(value)
  }, [])

  const onChangePrevDpi = (e) => {
    const { value } = e.target
    const reg = /^-?\d*(\.\d*)?$/
    if ((!isNaN(value) && reg.test(value)) || value === "" || value === "-") {
      setInputPrevDpi(value)
    }
  }

  const onChangePrevSensitivity = (e) => {
    const { value } = e.target
    const reg = /^-?\d*(\.\d*)?$/
    if ((!isNaN(value) && reg.test(value)) || value === "" || value === "-") {
      setInputPrevSensitivity(value)
    }
  }

  const onChangeValorantDpi = (e) => {
    const { value } = e.target
    const reg = /^-?\d*(\.\d*)?$/
    if ((!isNaN(value) && reg.test(value)) || value === "" || value === "-") {
      setInputValorantDpi(value)
    }
  }

  useEffect(() => {
    let divide = 0
    if (
      prevGame !== "" &&
      prevGame !== "0" &&
      inputPrevDpi !== "" &&
      inputPrevDpi !== "0" &&
      inputPrevSensitivity !== "" &&
      inputPrevSensitivity !== "0" &&
      inputValorantDpi !== "" &&
      inputValorantDpi !== "0"
    ) {
      if (
        prevGame === "Overwatch" ||
        prevGame === "Call of Duty Modern Warfare"
      )
        divide = 10.6
      else if (
        prevGame === "Counter Strike Global Offensive" ||
        prevGame === "Apex Legends"
      )
        divide = 3.18
      else if (prevGame === "Tom Clancy's Rainbow Six Siege") divide = 12.2
      else if (prevGame === "Fortnite") divide = 12.6
      else divide = 1

      setResultValorantSensitivity(
        Math.round(
          ((inputPrevDpi * inputPrevSensitivity) / inputValorantDpi / divide) *
            1000,
        ) / 1000,
      )
    }
  }, [prevGame, inputPrevDpi, inputPrevSensitivity, inputValorantDpi])

  return (
    <Row style={{ marginTop: "1rem" }}>
      <Col
        xs={24}
        sm={24}
        md={24}
        lg={12}
        xl={12}
        style={{
          backgroundColor: "#dcdbdc",
          border: "1px solid gray",
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "black",
            backgroundColor: "#434343",
            textAlign: "right",
            padding: "1rem",
          }}
        >
          <div style={{ color: "white" }}>발로란트에서 설정할 감도</div>
          <span style={{ color: "white", fontSize: "1.4rem" }}>
            {resultValorantSensitivity}
          </span>
        </div>
        <div style={{ padding: "5%" }}>
          <div style={{ borderBottom: "1px solid gray" }}>
            <TitleCaption>어느 게임하다 오셨나요?</TitleCaption>
            <Select
              defaultValue="게임을 선택해주세요"
              style={{ width: "80%", color: "black", marginBottom: "1rem" }}
              onChange={handleChange}
            >
              <Option value="Apex Legends">Apex Legends</Option>
              <Option value="Call of Duty Modern Warfare">
                Call of Duty Modern Warfare
              </Option>
              <Option value="Counter Strike Global Offensive">
                Counter Strike Global Offensive
              </Option>
              <Option value="Fortnite">Fortnite</Option>
              <Option value="Overwatch">Overwatch</Option>
              <Option value="Tom Clancy's Rainbow Six Siege">
                Tom Clancy's Rainbow Six Siege
              </Option>
            </Select>
          </div>

          <div style={{ borderBottom: "1px solid gray" }}>
            <TitleCaption>{prevGame} DPI 입력</TitleCaption>
            <Input
              value={inputPrevDpi}
              onChange={onChangePrevDpi}
              placeholder="0"
              maxLength={5}
              style={{ width: "50%", marginBottom: "1rem" }}
            />
          </div>

          <div style={{ borderBottom: "1px solid gray" }}>
            <TitleCaption>{prevGame} 감도 입력</TitleCaption>
            <Input
              value={inputPrevSensitivity}
              onChange={onChangePrevSensitivity}
              placeholder="0"
              maxLength={5}
              style={{ width: "50%", marginBottom: "1rem" }}
            />
          </div>

          <TitleCaption>발로란트 DPI 입력</TitleCaption>
          <Input
            value={inputValorantDpi}
            onChange={onChangeValorantDpi}
            placeholder="0"
            maxLength={5}
            style={{ width: "50%", marginBottom: "1rem" }}
          />
        </div>
      </Col>
      <Col xs={24} sm={24} md={24} lg={12} xl={12} style={{ padding: "1rem" }}>
        <div></div>
        <div>
          통상적으로 edpi(dpi * 인게임 감도)기준 250 미만의 경우 저감도, 250이상
          500 미만의 경우 중감도, 500 이상의 경우 고감도로 인식되어지고
          있습니다.
        </div>
      </Col>
    </Row>
  )
}

const TitleCaption = styled.div`
  margin-top: 5;
  font-size: 1rem;
  color: black;
`

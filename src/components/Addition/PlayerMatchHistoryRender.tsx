import React, { useState, useCallback } from "react"
import capitalizeFirstLetter from "../../logics/capitalizeFirstLetter"
import { UpOutlined, DownOutlined } from "@ant-design/icons"
import { Tooltip } from "antd"
import { staticServer } from "../../serverUrl"

export default function PlayerMatchHistoryRender(props) {
  const { type, result, kda, score, rounds, agentName, mapName } = props
  const mapBackground = `${staticServer}/map/${mapName}-illust.jpeg`

  const [openDetail, setOpenDetail] = useState(false)

  const toggleDetail = useCallback(() => {
    if (openDetail) setOpenDetail(false)
    else setOpenDetail(true)
  }, [openDetail])

  const victory = {
    backgroundColor: "rgb(24, 35, 56)",
    borderLeft: "10px solid #5bb09f",
    marginBottom: "0.7rem",
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-between",
  }

  const defeat = {
    backgroundColor: "rgb(24, 35, 56)",
    borderLeft: "10px solid #e24c4e",
    marginBottom: "0.7rem",
    display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-between",
  }

  const centerAlign = {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
  }

  return (
    <>
      <div style={result === "victory" ? victory : defeat}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontWeight: "bold" }}>
            {type === "rank" ? "Rank" : "Normal"}
          </div>
          <div style={{ fontSize: "0.7rem" }}>
            <Tooltip title="정확한시간">
              <div>10시간 전</div>
            </Tooltip>
          </div>
        </div>
        <div
          style={{
            width: 100,
            backgroundImage: `url(${mapBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src={require(`../../images/agents/${agentName}.png`)}
            style={{ width: "100%", backgroundColor: "rgb(24, 35, 56, 0.7)" }}
            alt="agent official"
          />
        </div>
        {window.innerWidth < 576 ? null : (
          <div style={centerAlign}>
            <div>{agentName}</div>
            <div>{mapName}</div>
          </div>
        )}
        <div style={centerAlign}>
          <div style={{ fontWeight: "bold" }}>{kda}</div>
          <div>{score}</div>
        </div>
        <div style={centerAlign}>
          <div
            style={result === "victory" ? { color: "gold" } : { color: "gray" }}
          >
            {capitalizeFirstLetter(result)}
          </div>
          <div style={{ fontWeight: "bold", fontSize: "1.4rem" }}>{rounds}</div>
        </div>
        <div
          onClick={toggleDetail}
          style={{
            width: "1.5rem",
            backgroundColor: "#273552",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          {openDetail ? (
            <UpOutlined style={{ fontSize: "1rem", marginBottom: 10 }} />
          ) : (
            <DownOutlined style={{ fontSize: "1rem", marginBottom: 10 }} />
          )}
        </div>
      </div>
      {openDetail ? (
        <div
          style={{
            backgroundColor: "rgb(24, 35, 56)",
            width: "100%",
            height: 300,
            marginBottom: "0.7rem",
          }}
        >
          <div style={centerAlign}>상세 정보를 수집 중 입니다.</div>
        </div>
      ) : null}
    </>
  )
}

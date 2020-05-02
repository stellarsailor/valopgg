import React from 'react'
import styled from 'styled-components'
import { Row, Col, Collapse, Button, Alert } from 'antd';
import Jumbo from '../images/official-image.png'
import ReactMarkdown from 'react-markdown'
const { Panel } = Collapse;

const MainTextTitle = styled.div`
    color: black;
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 1rem;
`

const MainTextDesc = styled.div`
    color: gray;
    font-size: 1.4rem;
`

const HR = styled.div`
    width: 100%;
    height: 1;
    border-bottom: 1px solid gray;
    margin-top: 2rem;
    margin-bottom: 1.5rem;
`

export default function Main() {

    const input = `
발로란트 클로즈 베타가 시작된 지 벌써 3주나 되었다는 게 믿기시나요? 4주를 채워 한 달이 된 것을 기념하고 싶지만, 사실 기간은 그리 중요하지 않죠. 다양한 게임 환경이 업데이트된 이번 패치 노트를 확인해 보세요.

피닉스가 주력인 플레이어 여러분은 역습 사용 시 발생하는 두 가지 버그에서 해방되셨습니다. 관전자 모드도 개선되었으며 이제 버튼 하나만 클릭하면 사용자 설정 게임에서 나올 수 있게 되었죠. 스파이크가 드물게 맵에 끼던 상황도 해결되었습니다.

또한 향후 플레이 가능한 '경쟁전 모드'가 추가되었습니다. 저희도 기대되네요.

아래에서 모든 변경 사항을 확인하세요.

## 게임플레이와 밸런스

### 오멘
- 이제 오멘이 그림자 형태에서 벗어난 직후 취약 상태가 되며 검게 보이지 않습니다.
  - 순간 이동을 하는 적 오멘을 발견하면 언제 쏴야 처치할 수 있는지, 원래 있던 곳으로 돌려보낼 수 있는지 헷갈리는 경우가 많았습니다. 따라서 이번 업데이트로 무적 버그를 해결하고 명확성도 높였습니다.
- 오멘이 그림자 습격으로 도착할 때 나는 소리의 감쇠 반경이 2,250으로 줄었습니다.
  - 감쇠 반경이 있다는 것은 오멘이 순간 이동으로 도착하는 위치를 감지하려면 오멘과 가까워야 한다는 뜻입니다. 이제 오멘을 찾아내면 즉시 처치할 수 있게 되었기 때문에 오멘의 능력을 보완하고자 했습니다.

### 세이지

- 장벽 구슬이 지면 위에서만 넓은 범위로 발동됩니다. 발동되는 곳이 좁을 경우 장벽이 두 칸만 생성될 수 있습니다.
- 더 이상 장벽 구슬을 "좁은" 평면 위에 사용할 수 없습니다. 지면 혹은 상자 위에서만 사용해야 합니다.
  - 높은 곳으로 도약하는 플레이는 바람직하다고 생각합니다. 특히 여러 캐릭터가 스킬을 함께 사용해야 할 때 더 멋지죠. (제트와 오멘을 생각해 보세요.) 하지만 현재 조건에서는 캐릭터들이 의도치 않은 곳까지 올라갈 수 있는 것으로 보입니다. 이번 변경사항이 적용되어도 캐릭터가 평범하지 않은 위치까지 올라가는 일은 여전히 가능하지만, 스파이크 지점에서 10미터 상공으로 도약해 작은 틈으로 맵 너머를 엿보는 일은 불가능해집니다.

### 캐릭터 업데이트

- 오멘의 외관을 업데이트했습니다.
- 브리치의 외관을 업데이트했습니다.

## 맵 업데이트

- 세이지의 장벽 구슬 위에 올라가 헤이븐의 이중문 위쪽 은색 부분을 통해 반대편을 보지 못하도록 문 위에 커튼을 추가했습니다.
- 사이퍼 카메라가 헤이븐 A 메인 박스 위에 놓이는 문제를 해결했습니다.
- 더 나은 밸런스와 게임플레이를 위해 헤이븐, 바인드, 스플릿의 구조를 다수 수정했습니다. 문제를 파악할 수 있게 도와주신 모든 분께 정말 감사드립니다! 저희는 여러분의 의견을 항상 귀담아듣고 있습니다.
- 전체적으로 표면을 좀 더 일정하게 만들기 위해 바인드와 헤이븐에 있는 물질을 업데이트했습니다.
- 전체적인 그래픽을 통일하기 위해 레디어나이트 상자의 색상을 변경했습니다.

## 경쟁전 업데이트
- 조만간 플레이 가능한 경쟁전 모드와 랭크 게임 대전 검색을 추가했습니다.

## 관전자 모드
- 사용자 설정 게임에서 치트를 사용하여 노클립 모드로 맵을 자유롭게 돌아다닐 수 있는 '유령' 설정을 추가했습니다.
- 관전자가 자유 시점 관전을 시작할 때 더는 스킬 HUD가 표시되지 않습니다.
- 이제 자유 시점 관전을 종료하면 가장 최근 본 플레이어를 관전하게 됩니다. (대상이 관전할 수 있는 상태일 때)
- 이제 관전하는 플레이어를 변경하면 해당 팀의 플레이어를 전부 관전한 후 다른 팀으로 넘어갑니다.

## HUD & 사용자 인터페이스

- 게임 내
  - 피해 방향을 표시하는 시각 효과가 새로 추가되었습니다.
  - 체력 및 탄약 수가 낮을 때의 시각 효과가 새로 추가되었습니다.
  - 플레이어 아이콘을 더 쉽게 구분할 수 있도록 미니맵에서 캐릭터 초상이 삭제되었습니다. 향후 아이콘에 색상이 추가되고 더 다듬어질 예정입니다.
  - 아군의 머리 위에 음성 채팅 활동이 표시됩니다.
  - 아군의 머리 위에 표시되는 스파이크 아이콘에 색상을 추가하여 가시성을 높였습니다.
  - 아군이 1 궁극기 포인트를 획득했을 때 궁극기가 완전히 충전된 것처럼 아군의 머리 위에 잘못 표시되는 버그를 수정했습니다.
  - 플레이어가 조준할 때 신호 관련 효과들이 모두 사라집니다. (기존에는 텍스트만 사라졌습니다.)

- 게임 외
  - '대전 찾기' 버튼을 친목 패널에서 플레이 화면으로 옮겼습니다. 버튼 이름을 '시작'으로 변경했습니다.
  - '연습' 버튼을 친목 패널에서 플레이 화면으로 옮겼습니다.
  - 게임 종료 화면에 '다시 플레이하기' 버튼을 추가했습니다.
  - 진척도 위젯의 알림 창을 클릭할 수 있게 만들었습니다.
  - 주요 메뉴 버튼을 더 클릭하기 쉽게 만들었습니다.
  - 플레이어의 시작 진영이 항상 미니맵 하단에 표시되도록 미니맵 방향을 고정하는 설정을 추가했습니다.
  - 방향을 완전히 고정했을 때 공격팀이 하단에 배치되고 수비팀이 상단에 배치되도록 모든 맵 요소를 변경했습니다.
  - 수집품의 미리 보기 이미지에 마우스 커서를 올리면 아이템 이름이 표시됩니다.
  - 친목 패널에서의 스크롤이 더 부드러워지도록 스크롤 속도를 조정했습니다.
  - 설정의 조준점 미리 보기를 짧게 만들어 조정 공간을 더 넓혔습니다.

### 게임 편의성

- 멀티플레이 사용자 설정 게임에서 나가는 기능을 추가했습니다. ESC 메뉴에서 '메뉴로 나가기' 버튼을 누르면 페널티를 받지 않고 게임에서 영구히 나갈 수 있습니다. 클라이언트를 종료하거나 ALT+F4 키를 누르는 등 다른 방식으로 나가면 다시 해당 게임으로 돌아올 수 있습니다.
- 플레이어가 소리로 거리를 더 잘 구분할 수 있도록 소리 차폐 시스템을 업데이트했습니다. 예를 들어 헤이븐 B에서 A로 가는 짧은 길에서 들리는 소리는 바로 옆에서 나는 것처럼 들리지 않고 떨어진 거리에 따라 다르게 들릴 것입니다.
- 빠른 대전 또는 요원 선택 도중 나가는 플레이어는 이제 일정 시간 동안 대기열 입장이 제한됩니다. 이러한 행위가 잦을수록 대기열 입장이 제한되는 시간도 길어집니다. 중간에 나가면 다른 플레이어들에게 피해를 끼친다는 점을 유념해주세요.
- 라이엇의 다른 게임에서 온라인 상태인 발로란트 플레이어를 볼 수 있는 기능이 활성화되었습니다.
- 대기열 버튼을 로비 화면으로 옮겨 플레이 흐름 UX를 조정했습니다.
- 추가 공간을 확보하기 위해 소셜 패널 UX를 조정했습니다.
- 다양한 위젯 디자인을 정리하기 위해 게임 종료 UX를 조정했습니다.
- 채팅 연결 오류 상태를 조정했습니다.
- 사격장에서 F3 메뉴에 있던 연습 봇 생성 설정이 게임 내에서 총으로 맞힐 수 있는 스위치로 변경되었습니다.
- 모든 산탄총의 조준점 중앙 도트를 화면 가운데로 1픽셀 더 가까이 옮겼습니다. 이로써 산탄총 살상력이 4,000% 오를 것으로 예상됩니다. (농담입니다.)

### 버그 수정: 게임 내
- 피닉스가 줄사다리에 닿은 상태에서 역습 사용 도중 죽으면 부활 후 다시 줄사다리로 순간 이동하는 버그를 해결했습니다.
- 피닉스가 역습이 끝난 후 잠시 동안 원래 있던 위치에서 피해를 입을 수 있는 버그를 해결했습니다.
- 벽의 틈을 표시할 수 있도록 미니맵에서 보이는 바이퍼의 독성 장막을 업데이트했습니다.
- 바이퍼가 독사의 구덩이 애니메이션을 취소할 수 있는 버그를 해결했습니다.
- 라운드 종료 후 '스파이크 설치됨' 안내가 나타나 라운드 종료 안내가 보이지 않는 문제를 해결했습니다. 이제 제한 시간 이후 설치 시 라운드 결과가 제대로 표시됩니다.
- 사이퍼의 사이버 감옥이 의도한 것보다 넓은 범위에 발동되어 상호작용이 중복되는 버그를 수정했습니다.
- 스파이크 운반자 처치 안내 시 아군 해체 안내도 함께 표시되는 문제를 해결했습니다.
- 플레이어의 무기가 드물게 플레이어 앞에서 떠다니는 문제를 해결했습니다.
- 해체를 두 번 누르면 드물게 3인칭 플레이어 모델링이 서버와 동기화가 되지 않아 사격이 빗나가는 문제를 해결했습니다.
- 낮은 감도를 사용하는 일부 플레이어의 마우스 움직임이 살짝 둔해지는 조준 문제를 해결했습니다.
- 설치나 구슬 획득을 취소할 때 더 느린 재장착 애니메이션이 잘못 재생되어 마치 플레이어가 취소 후 훨씬 빨리 공격할 수 있는 것처럼 보이는 문제를 해결했습니다. (타이밍은 정확했지만 애니메이션이 잘못 나왔죠.)
- 맵 구역명이 제대로 현지화되지 않은 채 미니맵 아래에 나타나는 문제를 해결했습니다.
- 플레이어 간 충돌 시 움직임을 부드럽게 다듬었습니다.
- 게임 내에서 아이템 관련 사용자 인터페이스 메시지가 총알을 막는 버그를 수정했습니다.
- Z 신호 선택지가 맵 신호 선택지와 함께 열리는 버그를 수정했습니다. 이 버그로 여러 개의 신호 선택지가 동시에 표시되는 경우도 발생했습니다.
- 키로 설정된 신호가 사용 제한에 도달했을 때 신호 선택지가 비활성화되지 않는 버그를 수정했습니다.
- 스파이크가 해체되는 동시에 양 팀이 전멸한 라운드에서 양 팀 모두 승리 포인트를 가져가는 희귀한 버그를 수정했습니다.
- 아군 설치 안내가 겹치는 문제를 수정했습니다.
- 무전 지시를 선택하지 않고 선택지 메뉴를 켜고 끄기만 해도 신호 사용 횟수 제한에 걸리는 버그를 수정했습니다.
- 일부 게임에서 모든 플레이어에게 미니맵이 표시되지 않는 버그를 수정했습니다.
- 버키로 보조 공격 시 즉시 적용되는 히트스캔 방식으로 피해를 입히도록 업데이트했습니다.
기존 보조 공격은 투사체 방식이어서 플레이어가 처치된 후에도 투사체가 적을 처치할 수 있었습니다. 하지만 다른 무기 중 이런 식으로 작동하는 무기는 없기 때문에 이 보조 공격에도 히트스캔 방식을 적용했습니다.

### 버그 수정: 게임 클라이언트
- 플레이어가 상점에서 구매 불가능한 아이템을 구매할 수 있는 문제를 해결했습니다.
- 플레이어가 보유하지 않은 콘텐츠를 장착할 수 있는 문제를 해결했습니다.
- 게임에 입장하거나 게임에서 나갈 때 디스플레이 설정이 다시 적용되어 드물게 창이 이동하거나 표시 방식이 변경되는 문제를 해결했습니다.
- 플레이어 간 충돌 시 움직임을 부드럽게 다듬었습니다.
- 네트워크 안정성 표시가 비활성화된 상태에서 나타나는 문제를 해결했습니다.
- 맵의 일부 위치에서 스파이크가 물체 안에 끼는 문제를 해결했습니다.
- 이제 플레이어가 스파이크를 가릴 때 스파이크를 획득하기 위해 시야를 확보할 필요가 없습니다.
- 가끔 스파이크를 회수할 수 없는 문제를 해결했습니다.
- 플레이어 신고가 제출되지 않는 문제를 해결했습니다.
- 음성 채팅 시 발생하는 다양한 연결 문제를 해결했습니다.
- 텍스트 채팅 시 발생하는 다양한 연결 문제를 해결했습니다.
- 소셜 패널에서 플레이어 상태가 잘못 표시되는 문제를 해결했습니다.
- 일부 플레이어가 다시 대기열에 입장하려면 로그아웃 후 다시 로그인해야 하는 문제를 해결했습니다.
- 파티 초대를 받을 때 발생하는 문제를 해결했습니다.
- 사용자 설정 게임 로비에서 플레이어 카드 아이콘이 투명하게 보이는 문제를 해결했습니다.
- 설정에서 음성 채팅 조작 방법이 초기화되는 문제를 해결했습니다.
- 사용자 설정 게임에서 음성이 기본으로 자동 전송되는 문제를 해결했습니다.
- 사용자 설정 게임 옵션을 탐색할 때 음성이 중단되는 문제를 해결했습니다.
- 메뉴 화면에서 발생하는 몇몇 현지화 문제를 해결했습니다.
    `
    return(
        <Row justify="center" style={{backgroundColor: 'rgba(236, 232, 225, 0.95)', height: 'auto'}} >
            {
                window.innerWidth < 576 ?
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div style={{position: 'absolute', fontSize: '1rem', fontWeight: 'bold', textAlign: 'center'}}>발로란트 클로즈 베타 테스트가 진행 중입니다.</div>
                    <div style={{position: 'absolute', width: '100%', backgroundColor: 'black', opacity: 0.5}}></div>
                    <img src={require('../images/official-background.png')} style={{width: '100%'}} />
                </div>
                :
                <Col xs={0} sm={0} md={24} lg={24} xl={24} style={{marginBottom: '2rem'}}>
                    <div style={{display: 'flex', justifyContent: 'center'}} >
                        <div style={{position: 'absolute', fontSize: '2rem', top: '33%', textAlign: 'center'}}>
                            <div>
                                발로란트 클로즈 베타 테스트가 진행 중입니다.
                            </div>
                            <div style={{fontSize: '1.2rem'}}>
                                <Button type="primary" href="https://beta.playvalorant.com/ko-kr/" target="_blank">베타 테스트 참여하기</Button>
                            </div>
                        </div>
                    </div>
                    <div >
                        <img src={require('../images/official-image.png')} style={{width: '100%'}} />   
                    </div>
                </Col>
            }
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
                    <a href="https://beta.playvalorant.com/ko-kr/news/game-updates/valorant-patch-notes-0-49/" target="_blank"><Alert message="0.49 패치 업데이트 완료 - 내용 확인하기" type="success" showIcon /></a>
                </div>
                <Row style={{padding: '1rem'}}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <img src={require('../images/mainImages0.jpg')} style={{width: '100%'}} />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <MainTextTitle>
                            입문자들을 위한 사이트, Valog.gg
                        </MainTextTitle>
                        <MainTextDesc>
                            발로란트를 처음 하시나요? 발로그에서 자신에게 맞는 캐릭터를 찾아보고 주 캐릭터로 삼아보세요! 
                        </MainTextDesc>
                    </Col>
                    <HR />
                </Row>
                <Row style={{padding: '1rem'}}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <MainTextTitle>
                            발로란트 관련 정보 모음
                        </MainTextTitle>
                        <MainTextDesc>
                            발로그에서 요원, 무기, 맵, 요원 별 전략 등 다양한 정보를 습득하세요!
                        </MainTextDesc>
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <img src={require('../images/mainImages1.jpg')} style={{width: '100%'}} />
                    </Col>
                    <HR />
                </Row>
                <Row style={{padding: '1rem'}}>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <img src={require('../images/mainImages2.jpg')} style={{width: '100%'}} />
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={12} xl={12} style={{padding: '5%'}}>
                        <MainTextTitle>
                            중급자 이상을 위한 다양한 정보들
                        </MainTextTitle>
                        <MainTextDesc>
                            각종 프로들과 스트리머들의 마우스 감도 설정, 키보드 설정, 그래픽 설정 등을 발로그에서 확인하실 수 있습니다!
                        </MainTextDesc>
                    </Col>
                </Row>

                {/* <Collapse defaultActiveKey={['1']} >
                    <Panel header="0.49 패치노트" key="1">
                        <div style={{color: 'black', width: '100%'}}>
                            <ReactMarkdown source={input} />
                            탑 10 랭킹
                        </div>
                    </Panel>
                </Collapse> */}
            </Col>
        </Row>
    )
}
import { agentMD } from './markdown/agentMD'

type agentType = {
    id: number;
    name: string;
    name_ko: string;
    voice_en?: string;
    voice_ko?: string;
    origin: string;
    type: string;
    signature_color: string;
    quote: string;
    skill: Array<{
        id: number;
        name: string;
        count: number;
        cost: string;
        desc: string;
    }>;
    inline_guide: string;
    ally_ult: string;
    enemy_ult: string;
}


export const agent: Array<agentType> = [
    {
        id: 0,
        name: "Breach",
        name_ko: '브리치',
        origin: '스웨덴',
        type: '척후대',
        signature_color: '#9E644B',
        quote: "뇌진탕이다!",
        skill: [
            {
                id: 0,
                name: '여진',
                count: 2,
                cost: '100 크레드',
                desc: '융합 에너지탄을 장착합니다. 발사하면 벽을 통과하고 느리게 효과가 발생하는 폭발을 일으켜 대상 범위 내의 모든 적에게 큰 피해를 입힙니다.',
            },
            {
                id: 1,
                name: '섬광 폭발',
                count: 3,
                cost: '200 크레드',
                desc: '실명탄을 장착합니다. 발사하면 벽을 통과하고 빠르게 효과가 발생하는 폭발을 일으켜 섬광을 본 모든 플레이어를 실명시킵니다.',
            },
            {
                id: 2,
                name: '균열',
                count: 1,
                cost: '라운드 당 1회, 35초 쿨다운',
                desc: '지진파를 장착합니다. 발사를 길게 누르면 사거리가 늘어납니다. 키를 떼면 지진파를 날려 경로상에 있는 적과 대상 범위 내의 모든 적을 멍하게 합니다.',
            },
            {
                id: 3,
                name: '지진 강타',
                count: 1,
                cost: '7(킬/데스, 구슬, 스파이크 설치/해제)',
                desc: '지진탄을 장착합니다. 발사하면 모든 지형을 통과하는 지진 파동을 날려 경로상에 있는 모든 적을 멍하게 하고 공중으로 띄웁니다.',
            }
        ],
        inline_guide: agentMD[0],
        ally_ult: '간다!',
        enemy_ult: '저리 꺼져!',
    },
    {
        id: 1,
        name: "Brimstone",
        name_ko: '브림스톤',
        origin: '미국',
        type: '전략가',
        signature_color: '#468EB7',
        quote: "집중해. 하나씩 배워들 가라고.",
        skill: [
            {
                id: 0,
                name: '자극제 신호기',
                count: 2,
                cost: '100 크레드',
                desc: '자극제 신호기를 장착합니다. 발사하면 브림스톤 앞에 자극제 신호기를 던집니다. 신호기가 떨어진 곳에는 플레이어에게 속사 효과를 부여하는 영역이 생깁니다.',
            },
            {
                id: 1,
                name: '소이탄',
                count: 1,
                cost: '300 크레드',
                desc: '소이탄 발사기를 장착합니다. 발사하면 바닥에 떨어졌을 때 폭발하는 소이탄을 날려 적에게 피해를 입히는 화염 구역을 생성합니다. 생성된 구역은 일정 시간 유지됩니다.',
            },
            {
                id: 2,
                name: '공중 연막',
                count: 3,
                cost: '라운드 당 1회, 100 크레드',
                desc: '전술 지도를 장착합니다. 발사하면 브림스톤의 연막을 퍼뜨릴 위치를 설정합니다. 보조 공격 시 위치 확정 후 연막을 날려 한동안 선택한 지역의 시야를 차단합니다.',
            },
            {
                id: 3,
                name: '궤도 일격',
                count: 1,
                cost: '7(킬/데스, 구슬, 스파이크 설치/해제)',
                desc: '전술 지도를 장착합니다. 발사하면 선택한 위치에 궤도 일격 레이저를 쏘아 해당 영역에 있는 플레이어에게 큰 지속 피해를 입힙니다.',
            }
        ],
        inline_guide: agentMD[1],
        ally_ult: '하늘이 열린다!',
        enemy_ult: '지옥불을 받아라!',
    },
    {
        id: 2,
        name: "Cypher",
        name_ko: '사이퍼',
        origin: '모로코',
        type: '감시자',
        signature_color: '#A9AD96',
        quote: "네 위치는 파악됐다.",
        skill: [
            {
                id: 0,
                name: '함정',
                count: 2,
                cost: '200 크레드',
                desc: '함정을 장착합니다. 발사하면 지정 위치에 파괴 가능한 위장 함정을 설치하여 설치 위치와 반대쪽 벽 사이를 연결하는 선을 생성합니다. 함정을 넘어가는 적 플레이어는 제때 장치를 파괴하지 않으면 잠시 후 속박되어 위치가 드러나며 멍해집니다. 이 스킬은 회수하여 다시 설치할 수 있습니다.',
            },
            {
                id: 1,
                name: '사이버 감옥',
                count: 2,
                cost: '100 크레드',
                desc: '사이버 감옥을 장착합니다. 발사하면 사이퍼 옆에 사이버 감옥을 던집니다. 활성화하면 시야를 차단하는 구역이 생성됩니다. 해당 구역에 아군이 아닌 적이 들어오면 사운드가 납니다.',
            },
            {
                id: 2,
                name: '스파이캠',
                count: 1,
                cost: '라운드 당 1회, 회수하여 재사용 가능',
                desc: '스파이캠을 장착합니다. 발사하면 지정 위치에 스파이캠을 설치합니다. 스킬을 다시 사용하면 카메라 화면을 조작할 수 있습니다. 카메라를 조작하는 동안 발사를 누르면 표식용 다트가 발사됩니다. 다트에 맞은 플레이어는 위치가 드러납니다.',
            },
            {
                id: 3,
                name: '신경 절도',
                count: 1,
                cost: '7(킬/데스, 구슬, 스파이크 설치/해제)',
                desc: '적 플레이어가 처치된 즉시 조준한 후 사용하면 생존한 모든 적 플레이어의 위치가 드러납니다.',
            }
        ],
        inline_guide: agentMD[2],
        ally_ult: '자, 다들 어디 숨어있지?',
        enemy_ult: '네 위치는 파악됐다!',
    },
    {
        id: 3,
        name: "Jett",
        name_ko: '제트',
        origin: '대한민국',
        type: '타격대',
        signature_color: '#55D1E0',
        quote: "잘해보자고.",
        skill: [
            {
                id: 0,
                name: '연막 폭발',
                count: 3,
                cost: '100 크레드',
                desc: '표면에 닿아 충격을 받으면 구름으로 팽창해 잠시 시야를 가리는 투사체를 즉시 던집니다. 스킬 키를 길게 누르면 연기가 조준점 방향으로 휘어집니다.',
            },
            {
                id: 1,
                name: '상승 기류',
                count: 2,
                cost: '100 크레드',
                desc: '제트가 즉시 높이 날아오릅니다.',
            },
            {
                id: 2,
                name: '순풍',
                count: 1,
                cost: '라운드 당 1회, 2킬시 충전',
                desc: '제트가 즉시 이동 방향으로 빠르게 이동합니다. 제트가 가만히 서 있을 경우에는 앞으로 빠르게 이동합니다.',
            },
            {
                id: 3,
                name: '칼날 폭풍',
                count: 1,
                cost: '6(킬/데스, 구슬, 스파이크 설치/해제)',
                desc: '명중률이 높으며 적 처치 시 다시 충전되는 투척용 단검을 장착합니다. 발사하면 대상에게 단검 하나를 던집니다. 보조 공격 시 대상에게 남은 단검을 전부 던집니다. 단검 1개당 데미지 : 50(거리에 따라 12m부터 최대 35의 피해까지 감소)',
            }
        ],
        inline_guide: agentMD[3],
        ally_ult: '똑똑히 봐라!',
        enemy_ult: '저리 비켜!',
    },
    {
        id: 4,
        name: "Omen",
        name_ko: '오멘',
        origin: '불명',
        type: '전략가',
        signature_color: '#543EFF',
        quote: "안전할 줄 알았나.",
        skill: [
            {
                id: 0,
                name: '어둠의 발자국',
                count: 2,
                cost: '100 크레드',
                desc: '그림자 걸음 스킬을 장착하고 사거리를 표시합니다. 발사하면 짧은 정신 집중 후 표시한 위치로 순간 이동합니다.',
            },
            {
                id: 1,
                name: '피해망상',
                count: 1,
                cost: '200 크레드',
                desc: '그림자 스킬을 장착하고 발사한 방향으로 발사합니다. 피격된 적은 가시거리가 줄어듭니다. 이 투사체는 벽을 통과할 수 있습니다.',
            },
            {
                id: 2,
                name: '어둠의 장막',
                count: 2,
                cost: '30초 쿨타임',
                desc: '그림자 구슬을 장착하고 발사할 위치를 선정합니다. 발사하면 표시한 위치에 그림자 구슬을 던져 한동안 시야를 차단하는 그림자 영역을 생성합니다. 주 공격 버튼으로 투사체 사거리를 늘리고 보조 공격 버튼으로 사거리를 줄이며, 스킬 키로 투사체를 발사할 수 있습니다.',
            },
            {
                id: 3,
                name: '그림자 습격',
                count: 1,
                cost: '7(킬/데스, 구슬, 스파이크 설치/해제)',
                desc: '전술 지도를 장착합니다. 발사하면 선택한 위치로 순간 이동을 시작합니다. 순간 이동 중에는 오멘이 그림자로 나타나며 이때 적이 그림자를 파괴하면 순간 이동이 취소됩니다. 또한 오멘이 그림자 형태일 때 스킬 키를 다시 눌러 순간 이동을 취소할 수 있습니다. 다만 취소 시 모든 궁극기 포인트를 잃습니다.',
            }
        ],
        inline_guide: agentMD[4],
        ally_ult: '어디, 도망쳐봐라.',
        enemy_ult: '흩어져라!',
    },
    {
        id: 5,
        name: "Phoenix",
        name_ko: '피닉스',
        origin: '영국',
        type: '타격대',
        signature_color: '#F0753A',
        quote: "내가 누군진 잘 알고 있지?",
        skill: [
            {
                id: 0,
                name: '불길',
                count: 1,
                cost: '200 크레드',
                desc: '화염 장벽을 장착합니다. 발사하면 앞으로 이동하는 여러 개의 화염을 일렬로 생성하여 시야를 차단하고, 통과하는 플레이어에게 피해를 입히는 화염 장벽을 생성합니다. 발사를 길게 누르면 조준점 방향으로 장벽 궤적을 바꿉니다.',
            },
            {
                id: 1,
                name: '커브볼',
                count: 2,
                cost: '200 크레드',
                desc: '던지면 휘어져 날아간 후 곧 폭발하는 섬광 구슬을 장착합니다. 발사하면 섬광 구슬이 왼쪽으로 휘어지며 폭발합니다. 이때 구슬을 바라보는 플레이어는 전부 실명합니다. 보조 공격 시 섬광 구슬이 오른쪽으로 휘어집니다. ',
            },
            {
                id: 2,
                name: '뜨거운 손',
                count: 1,
                cost: '라운드 당 1회, 2킬시 충전',
                desc: '화염구를 장착합니다. 발사하면 일정 시간이 지나거나 땅에 닿은 후 폭발하는 화염구를 던집니다. 폭발 지점에는 일정 시간 유지되는 화염 구역이 생성되어 적에게 피해를 입힙니다.',
            },
            {
                id: 3,
                name: '역습',
                count: 1,
                cost: '6(킬/데스, 구슬, 스파이크 설치/해제)',
                desc: '즉시 피닉스의 위치에 표식을 놓습니다. 스킬 사용 도중 죽거나 지속시간이 끝나면 해당 위치에서 최대 체력으로 부활합니다.',
            }
        ],
        inline_guide: agentMD[5],
        ally_ult: '좋아, 가자!',
        enemy_ult: '장난 끝이야, 넌 죽었어!',
    },
    {
        id: 6,
        name: "Raze",
        name_ko: '레이즈',
        origin: '브라질',
        type: '타격대',
        signature_color: '#F6AD40',
        quote: "폭탄 받아라~!",
        skill: [
            {
                id: 0,
                name: '폭발 봇',
                count: 1,
                cost: '200 크레드',
                desc: '폭발 봇을 장착합니다. 발사하면 폭발 봇이 지면에서 일직선으로 이동하며 벽을 만나면 튕겨 나옵니다. 폭발 봇의 정면 원뿔형 시야 안에 적이 포착되면 해당 적에게 돌진하며 폭발해 치명적인 피해를 입힙니다. ',
            },
            {
                id: 1,
                name: '폭발 팩',
                count: 2,
                cost: '200 크레드',
                desc: '표면에 부착되는 폭발 팩을 던집니다. 부착 후 다시 사용하면 팩이 폭발하며 적중한 대상에게 피해를 입히고 밀어냅니다.',
            },
            {
                id: 2,
                name: '페인트탄',
                count: 1,
                cost: '라운드 당 1회, 2킬 시 충전',
                desc: '집속탄을 장착합니다. 발사하면 집속탄을 던집니다. 집속탄은 피해를 입히고 여러 개의 자탄을 퍼뜨립니다. 자탄은 각각의 범위 내에 있는 모든 대상에게 피해를 입힙니다.',
            },
            {
                id: 3,
                name: '대미 장식',
                count: 1,
                cost: '7(킬/데스, 구슬, 스파이크 설치/해제)',
                desc: '로켓 발사기를 장착합니다. 발사하면 충돌 시 대량의 광역 피해를 입히는 로켓을 발사합니다.',
            }
        ],
        inline_guide: agentMD[6],
        ally_ult: '파티를 열어볼까?',
        enemy_ult: '폭탄 받아라!',
    },
    {
        id: 7,
        name: "Sage",
        name_ko: '세이지',
        origin: '중국',
        type: '감시자',
        signature_color: '#21CEAF',
        quote: "저들은 결코 날 뚫지 못할 거야.",
        skill: [
            {
                id: 0,
                name: '장벽 구슬',
                count: 1,
                cost: '300 크레드',
                desc: '장벽 구슬을 장착합니다. 발사하면 단단한 장벽을 설치합니다. 보조 공격 시 장벽이 회전합니다. ',
            },
            {
                id: 1,
                name: '둔화 구슬',
                count: 2,
                cost: '100 크레드',
                desc: '둔화 구슬을 장착합니다. 발사하면 땅에 닿은 후, 폭발하여 일정 시간 동안 둔화 영역을 생성하는 구슬을 던집니다. 둔화 영역에 있는 플레이어는 속도가 느려집니다.',
            },
            {
                id: 2,
                name: '회복 구슬',
                count: 1,
                cost: '35초 쿨타임',
                desc: '회복 구슬을 장착합니다. 피해를 입은 아군을 조준한 후 발사하면 해당 아군이 서서히 체력을 회복합니다. 세이지가 피해를 입었을 때 보조 공격 시 자신의 체력을 서서히 회복합니다.',
            },
            {
                id: 3,
                name: '부활',
                count: 1,
                cost: '7(킬/데스, 구슬, 스파이크 설치/해제)',
                desc: '부활 스킬을 장착합니다. 죽은 아군을 조준한 후 발사하면 해당 아군이 부활하기 시작합니다. 짧은 정신 집중이 끝나면 아군이 최대 체력으로 되살아납니다.',
            }
        ],
        inline_guide: agentMD[7],
        ally_ult: '네 임무는 끝나지 않았어!',
        enemy_ult: '내 동료를 죽이게 두진 않겠어!',
    },
    {
        id: 8,
        name: "Sova",
        name_ko: '소바',
        origin: '러시아',
        type: '척후대',
        signature_color: '#325FFF',
        quote: "어디로 도망가든, 내가 찾아내겠어.",
        skill: [
            {
                id: 0,
                name: '올빼미 드론',
                count: 1,
                cost: '300 크레드',
                desc: '올빼미 드론을 장착합니다. 발사하면 드론을 날려 조종합니다. 드론을 조종하는 동안 발사를 누르면 표식용 다트가 발사됩니다. 다트에 맞은 플레이어는 위치가 드러납니다.',
            },
            {
                id: 1,
                name: '충격 화살',
                count: 2,
                cost: '100 크레드',
                desc: '충격 화살을 발사하는 활을 장착합니다. 발사하면 충돌 시 폭발하여 주변 플레이어에게 피해를 입히는 화살을 전방으로 날립니다. 발사를 길게 누르면 화살의 사거리가 늘어납니다. 보조 공격 시 화살이 최대 두 번 더 튕깁니다. ',
            },
            {
                id: 2,
                name: '정찰용 화살',
                count: 1,
                cost: '35초 쿨타임',
                desc: '정찰 화살을 발사하는 활을 장착합니다. 발사하면 정착 화살을 전방으로 날려 화살이 꽂힌 곳을 기준으로 모습이 드러난 주변 적의 위치를 표시합니다. 적이 이 화살을 파괴할 수 있습니다. 발사를 길게 누르면 화살의 사거리가 늘어납니다. 보조 공격 시 화살이 최대 두 번 더 튕깁니다.',
            },
            {
                id: 3,
                name: '사냥꾼의 분노',
                count: 1,
                cost: '7(킬/데스, 구슬, 스파이크 설치/해제)',
                desc: '벽을 관통하는 에너지 3개를 장거리로 발사하는 활을 장착합니다. 발사하면 전방에 일직선상으로 에너지를 날려 닿은 적에게 피해를 입히고 위치를 드러냅니다. 스킬 지속시간이 활성화된 상태에서 최대 두 번 더 다시 사용할 수 있습니다.',
            }
        ],
        inline_guide: agentMD[8],
        ally_ult: '내가 바로 사냥꾼이다!',
        enemy_ult: '도망칠 곳은 없다!',
    },
    {
        id: 9,
        name: "Viper",
        name_ko: '바이퍼',
        origin: '미국',
        type: '전략가',
        signature_color: '#2AC849',
        quote: "영원히 숨을 참을 수는 없을걸.",
        skill: [
            {
                id: 0,
                name: '뱀 이빨',
                count: 2,
                cost: '100 크레드',
                desc: '화학 물질 발사기를 장착합니다. 발사하면 바닥에 떨어졌을 때 폭발하는 통을 날립니다. 통은 폭발하며 적에게 피해를 입히고 둔화시키는 화학 물질 지역을 일정 시간 동안 생성합니다.',
            },
            {
                id: 1,
                name: '독성 연기',
                count: 1,
                cost: '200 크레드, 회수하여 재사용 가능',
                desc: '가스 방사기를 장착합니다. 발사하면 라운드 내내 유지되는 방사기를 던집니다. 스킬을 다시 사용하면 연료를 소모해 독성 가스 구름을 만듭니다. 이 스킬은 여러 번 재사용이 가능하며 주운 후 다시 배치할 수 있습니다.',
            },
            {
                id: 2,
                name: '독성 장막',
                count: 1,
                cost: '라운드 당 1회',
                desc: '가스 방사기 발사기를 장착합니다. 발사하면 여러 개의 가스 방사기를 일렬로 길게 배치합니다. 이때 벽을 조준하고 사용 시 벽을 관통하여 바닥에 배치합니다. 스킬을 다시 사용하면 연료를 소모해 높은 독성 연기 장벽을 생성합니다. 라운드 당 1회만 사용가능합니다.',
            },
            {
                id: 3,
                name: '독사의 구덩이',
                count: 1,
                cost: '7(킬/데스, 구슬, 스파이크 설치/해제)',
                desc: '화학 물질 분사기를 장착합니다. 발사하면 사방으로 화학 물질 연기를 분사해 안에 있는 플레이어의 가시거리와 최대 체력을 감소시키는 거대 연기를 생성합니다.',
            }
        ],
        inline_guide: agentMD[9],
        ally_ult: '비키는게 좋을걸?',
        enemy_ult: '이게 내 세상이야!',
    },
    {
        id: 10,
        name: "Reyna",
        name_ko: '레이나',
        origin: '멕시코',
        type: '타격대',
        signature_color: '#a34bee',
        quote: "벌벌 떨어라!",
        skill: [
            {
                id: 0,
                name: '눈총',
                count: 2,
                cost: '200 크레드',
                desc: '파괴 가능한 천상의 눈을 장착합니다. 활성화하면 눈을 짧게 앞으로 던집니다. 눈을 본 적은 모두 시야가 제한됩니다.',
            },
            {
                id: 1,
                name: '포식',
                count: 2,
                cost: '100 크레드',
                desc: '영혼 수확: 레이나가 처치한 적은 3초 동안 유지되는 영혼 구슬을 남깁니다. 포식: 즉시 근처에 있는 영혼 구슬을 흡수하여 짧은 시간 동안 순식간에 체력을 회복합니다. 이 스킬로 회복한 체력이 100을 넘어가면 초과분은 시간이 흐르면서 사라집니다. 여제 활성화 시 이 스킬이 자동으로 사용되며 영혼 구슬을 흡수하지 않습니다.',
            },
            {
                id: 2,
                name: '무시',
                count: 2,
                cost: '없음',
                desc: '즉시 근처에 있는 영혼 구슬을 흡수하여 짧은 시간 동안 무형 상태가 됩니다. 여제 활성화 시 추가로 투명 상태가 됩니다.',
            },
            {
                id: 3,
                name: '여제',
                count: 1,
                cost: '6(킬/데스, 구슬, 스파이크 설치/해제)',
                desc: '즉시 광란 상태가 되어 사격, 장착, 재장전 속도가 크게 증가합니다. 영혼 수확의 충전량을 무제한으로 얻습니다. 적을 처치하면 지속시간이 초기화됩니다.',
            }
        ],
        inline_guide: agentMD[10],
        ally_ult: '벌벌 떨어라!',
        enemy_ult: '사냥 시작이다!',
    },
    {
        id: 11,
        name: "Killjoy",
        name_ko: '킬조이',
        origin: '독일',
        type: '감시자',
        signature_color: '#ffff00',
        quote: "진정해. 이미 다 생각해놨으니까",
        skill: [
            {
                id: 0,
                name: '나노스웜',
                count: 2,
                cost: '200 크레드',
                desc: '나노스웜 수류탄을 장착합니다. 발사하면 수류탄을 투척합니다. 수류탄은 지면에 닿으면 잠복 상태가 됩니다. 수류탄을 활성화하면 적에게 피해를 입히는 나노스웜을 발사합니다.',
            },
            {
                id: 1,
                name: '알람 봇',
                count: 1,
                cost: '200 크레드',
                desc: '잠복 알람봇을 장착합니다. 발사하면 사거리 내에 들어온 적을 추적하는 봇을 배치합니다. 대상에 도달하면 봇은 폭발하여 적을 취약 상태로 만들고 피해를 입힙니다. 장착을 길게 누르면 배치된 봇을 회수합니다.',
            },
            {
                id: 2,
                name: '포탑',
                count: 1,
                cost: '없음',
                desc: '포탑을 장착합니다. 발사하면 전방 180도 원뿔형 범위 안에 들어온 적을 공격하는 포탑을 배치합니다. 장착을 길게 누르면 배치된 포탑을 회수합니다.',
            },
            {
                id: 3,
                name: '봉쇄',
                count: 1,
                cost: '7(킬/데스, 구슬, 스파이크 설치/해제)',
                desc: '봉쇄 장치를 장착합니다. 발사하면 장치를 배치합니다. 대기시간이 지나면 범위 내 탐지된 모든 적을 구속합니다. 봉쇄 장치는 적에 의해 파괴될 수 있습니다.',
            }
        ],
        inline_guide: agentMD[11],
        ally_ult: '카운트 다운 시작!',
        enemy_ult: '허! 도망치는게 좋을걸?',
    },
    {
        id: 12,
        name: "Skye",
        name_ko: '스카이',
        origin: '호주',
        type: '척후대',
        signature_color: '#03fcad',
        quote: "...",
        skill: [
            {
                id: 0,
                name: '재생',
                count: 1,
                cost: '',
                desc: '치유 장신구를 장착합니다. 발사 버튼을 누르고 있으면 스카이가 정신을 집중해 시야 안에 있는 사거리 내 아군의 체력을 회복합니다. 치유 능력이 바닥날 때까지 다시 사용할 수 있습니다. 자기 자신의 체력은 회복할 수 없습니다.',
            },
            {
                id: 1,
                name: '정찰자',
                count: 1,
                cost: '',
                desc: '태즈매니아 호랑이 장신구를 장착합니다. 발사하면 호랑이가 전진하고 호랑이를 조종할 수 있습니다. 조종 도중에 발사하면 호랑이가 앞으로 도약해 폭발하고 직접 타격한 적에게 뇌진탕과 피해를 입힙니다.',
            },
            {
                id: 2,
                name: '인도하는 빛',
                count: 3,
                cost: '',
                desc: '매 장신구를 장착합니다. 발사하면 매가 전방으로 날아갑니다. 발사 버튼을 누르고 있으면 매를 십자선 방향으로 유도할 수 있습니다. 매가 비행 중에 스킬을 다시 사용하면 매가 섬광을 내뿜으며 시야 안에 있는 사거리 내 적을 실명시킵니다.',
            },
            {
                id: 3,
                name: '추적자',
                count: 1,
                cost: '6(킬/데스, 구슬, 스파이크 설치/해제)',
                desc: '추적 장신구를 장착합니다. 발사하면 가장 가까운 적을 추격하는 추적자 3개가 전진합니다. 추적자가 적에게 도달하면 적의 시야를 제한합니다.',
            }
        ],
        inline_guide: agentMD[12],
        ally_ult: '...',
        enemy_ult: '...',
    },
]
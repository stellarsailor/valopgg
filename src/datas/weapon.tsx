type weaponType = {
    category: string;
    category_ko: string;
    name: string;
    name_ko: string;
    cost: number;
    damage: Array<damageType>;
    primaryMode: string;
    primaryRate: string;
    altMode?: string;
    altRate?: string;
    capacity: number;
    equipTime: number;
    reloadTime: number;
    penetration: "없음" | "낮음" | "보통" | "높음";
}

type damageType = {
    distance: string;
    damageSpec: Array<number>;
}

export const weapon: Array<weaponType> = [
    {
        category: "Knife",
        category_ko: "나이프",
        name: "Knife",
        name_ko: "나이프",
        cost: 0,
        damage: [
            {
                distance: "정면 0-1",
                damageSpec: [50, 50, 50],
            },
            {
                distance: "백어택 0-1",
                damageSpec: [100, 100, 100],
            },
        ],
        primaryMode: "베기",
        primaryRate: "초당 2회",
        altMode: "찍기(베기 데미지의 1.5배)",
        altRate: "초당 1회",
        capacity: 0,
        equipTime: 0,
        reloadTime: 0,
        penetration: "없음"
    },
    {
        category: "Sidearm",
        category_ko: "보조무기",
        name: "Classic",
        name_ko: "클래식",
        cost: 0,
        damage: [
            {
                distance: "0-30",
                damageSpec: [78, 26, 22],
            },
            {
                distance: "30-50",
                damageSpec: [66, 22, 18],
            }
        ],
        primaryMode: "반자동",
        primaryRate: "초당 6.75발",
        altMode: "3점사, 탄 퍼짐 증가",
        altRate: "초당 2.22발",
        capacity: 12,
        equipTime: 0.75,
        reloadTime: 1.75,
        penetration: "낮음"
    },
    {
        category: "Sidearm",
        category_ko: "보조무기",
        name: "Shorty",
        name_ko: "쇼티",
        cost: 200,
        damage: [
            {
                distance: "0-7",
                damageSpec: [24, 12, 10],
            },
            {
                distance: "7-15",
                damageSpec: [16, 8, 6],
            },
            {
                distance: "15-50",
                damageSpec: [6, 3, 2],
            },
        ],
        primaryMode: "반자동",
        primaryRate: "초당 3.3발",
        capacity: 2,
        equipTime: 0.75,
        reloadTime: 1.75,
        penetration: "낮음"
    },
    {
        category: "Sidearm",
        category_ko: "보조무기",
        name: "Frenzy",
        name_ko: "프렌지",
        cost: 400,
        damage: [
            {
                distance: "0-20",
                damageSpec: [78, 26, 22],
            },
            {
                distance: "9-15",
                damageSpec: [63, 21, 17],
            },
        ],
        primaryMode: "자동",
        primaryRate: "초당 10발",
        capacity: 13,
        equipTime: 1,
        reloadTime: 1.5,
        penetration: "낮음"
    },
    {
        category: "Sidearm",
        category_ko: "보조무기",
        name: "Ghost",
        name_ko: "고스트",
        cost: 500,
        damage: [
            {
                distance: "0-30",
                damageSpec: [105, 30, 26],
            },
            {
                distance: "30-50",
                damageSpec: [88, 25, 21],
            },
        ],
        primaryMode: "반자동",
        primaryRate: "초당 6.75발",
        capacity: 15,
        equipTime: 0.75,
        reloadTime: 1.5,
        penetration: "보통"
    },
    {
        category: "Sidearm",
        category_ko: "보조무기",
        name: "Sheriff",
        name_ko: "셰리프",
        cost: 800,
        damage: [
            {
                distance: "0-30",
                damageSpec: [160, 55, 47],
            },
            {
                distance: "30-50",
                damageSpec: [145, 50, 43],
            },
        ],
        primaryMode: "반자동",
        primaryRate: "초당 4발",
        capacity: 6,
        equipTime: 1,
        reloadTime: 2.25,
        penetration: "높음"
    },
    {
        category: "SMG",
        category_ko: "기관단총",
        name: "Stinger",
        name_ko: "스팅어",
        cost: 1000,
        damage: [
            {
                distance: "0-20",
                damageSpec: [67, 27, 23],
            },
            {
                distance: "20-50",
                damageSpec: [62, 25, 21],
            },
        ],
        primaryMode: "자동",
        primaryRate: "초당 18발",
        altMode: "1.15배율 4점사, 탄퍼짐 감소",
        altRate: "초당 4발",
        capacity: 20,
        equipTime: 0.75,
        reloadTime: 2.25,
        penetration: "낮음"
    },
    {
        category: "SMG",
        category_ko: "기관단총",
        name: "Spectre",
        name_ko: "스펙터",
        cost: 1600,
        damage: [
            {
                distance: "0-20",
                damageSpec: [78, 26, 22],
            },
            {
                distance: "20-50",
                damageSpec: [66, 22, 18],
            },
        ],
        primaryMode: "자동",
        primaryRate: "초당 13.33발",
        altMode: "1.15배율, 탄퍼짐 감소",
        altRate: "초당 12발",
        capacity: 30,
        equipTime: 0.75,
        reloadTime: 2.25,
        penetration: "보통"
    },
    {
        category: "Shotgun",
        category_ko: "산탄총",
        name: "Bucky",
        name_ko: "버키",
        cost: 900,
        damage: [
            {
                distance: "0-8",
                damageSpec: [44, 22, 19],
            },
            {
                distance: "8-12",
                damageSpec: [34, 17, 14],
            },
            {
                distance: "12-50",
                damageSpec: [18, 9, 8],
            },
        ],
        primaryMode: "반자동",
        primaryRate: "초당 1.1발",
        altMode: "반자동(주 공격보다 확장된 거리)",
        altRate: "초당 1.1발",
        capacity: 5,
        equipTime: 1,
        reloadTime: 2.5,
        penetration: "낮음"
    },
    {
        category: "Shotgun",
        category_ko: "산탄총",
        name: "Judge",
        name_ko: "저지",
        cost: 1600,
        damage: [
            {
                distance: "0-10",
                damageSpec: [34, 17, 14],
            },
            {
                distance: "10-15",
                damageSpec: [26, 13, 11],
            },
            {
                distance: "15-50",
                damageSpec: [20, 10, 9],
            },
        ],
        primaryMode: "반자동",
        primaryRate: "초당 3.5발",
        capacity: 7,
        equipTime: 1,
        reloadTime: 2.2,
        penetration: "보통"
    },
    {
        category: "Rifle",
        category_ko: "소총",
        name: "Bulldog",
        name_ko: "불독",
        cost: 2100,
        damage: [
            {
                distance: "0-50",
                damageSpec: [116, 35, 30],
            },
        ],
        primaryMode: "자동",
        primaryRate: "초당 9.15발",
        altMode: "1.25배율 3점사",
        altRate: "초당 3발",
        capacity: 24,
        equipTime: 1,
        reloadTime: 2.5,
        penetration: "보통"
    },
    {
        category: "Rifle",
        category_ko: "소총",
        name: "Guardian",
        name_ko: "가디언",
        cost: 2400,
        damage: [
            {
                distance: "0-50",
                damageSpec: [195, 65, 49],
            },
        ],
        primaryMode: "반자동",
        primaryRate: "초당 5.25발",
        altMode: "1.5배율, 탄퍼짐 감소",
        altRate: "초당 5.25발",
        capacity: 12,
        equipTime: 1,
        reloadTime: 2.5,
        penetration: "높음"
    },
    {
        category: "Rifle",
        category_ko: "소총",
        name: "Vandal",
        name_ko: "밴달",
        cost: 2900,
        damage: [
            {
                distance: "0-50",
                damageSpec: [156, 40, 33],
            },
        ],
        primaryMode: "자동",
        primaryRate: "초당 9.75발",
        altMode: "1.25배율, 탄퍼짐 감소",
        altRate: "초당 8.32발",
        capacity: 25,
        equipTime: 1,
        reloadTime: 2.5,
        penetration: "보통"
    },
    {
        category: "Rifle",
        category_ko: "소총",
        name: "Phantom",
        name_ko: "팬텀",
        cost: 2900,
        damage: [
            {
                distance: "0-15",
                damageSpec: [156, 39, 33],
            },
            {
                distance: "15-30",
                damageSpec: [140, 35, 30],
            },
            {
                distance: "30-50",
                damageSpec: [124, 31, 26],
            },
        ],
        primaryMode: "자동",
        primaryRate: "초당 11발",
        altMode: "1.25배율, 탄퍼짐 감소",
        altRate: "초당 9.9발",
        capacity: 30,
        equipTime: 1,
        reloadTime: 2.5,
        penetration: "보통"
    },
    {
        category: "Sniper",
        category_ko: "저격총",
        name: "Marshal",
        name_ko: "마샬",
        cost: 1100,
        damage: [
            {
                distance: "0-50",
                damageSpec: [202, 101, 85],
            },
        ],
        primaryMode: "반자동",
        primaryRate: "초당 1.5발",
        altMode: "2.5배율, 탄퍼짐 감소",
        altRate: "초당 1.2발",
        capacity: 5,
        equipTime: 1.25,
        reloadTime: 2.5,
        penetration: "보통"
    },
    {
        category: "Sniper",
        category_ko: "저격총",
        name: "Operator",
        name_ko: "오퍼레이터",
        cost: 4500,
        damage: [
            {
                distance: "0-50",
                damageSpec: [255, 150, 127],
            },
        ],
        primaryMode: "반자동",
        primaryRate: "초당 0.75발",
        altMode: "2.5, 5배율, 탄퍼짐 감소",
        altRate: "초당 0.75발",
        capacity: 5,
        equipTime: 1.5,
        reloadTime: 3.7,
        penetration: "높음"
    },
    {
        category: "Heavy",
        category_ko: "기관총",
        name: "Ares",
        name_ko: "아레스",
        cost: 1600,
        damage: [
            {
                distance: "0-30",
                damageSpec: [72, 30, 25],
            },
            {
                distance: "30-50",
                damageSpec: [67, 28, 23],
            },
        ],
        primaryMode: "자동",
        primaryRate: "초당 10발에서 13발(발사 중 증가)",
        altMode: "1.25배율, 탄퍼짐 감소",
        altRate: "초당 10발에서 13발(발사 중 증가)",
        capacity: 50,
        equipTime: 1.25,
        reloadTime: 3.25,
        penetration: "높음"
    },
    {
        category: "Heavy",
        category_ko: "기관총",
        name: "Odin",
        name_ko: "오딘",
        cost: 3200,
        damage: [
            {
                distance: "0-30",
                damageSpec: [95, 38, 32],
            },
            {
                distance: "30-50",
                damageSpec: [77, 31, 26],
            },
        ],
        primaryMode: "자동",
        primaryRate: "초당 12발에서 15.6발(발사 중 증가)",
        altMode: "1.25배율, 탄퍼짐 감소",
        altRate: "초당 15.6발",
        capacity: 100,
        equipTime: 1.25,
        reloadTime: 5,
        penetration: "높음"
    },
]
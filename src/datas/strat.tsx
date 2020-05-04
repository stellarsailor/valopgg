type agentType = {
    breach: {
        bind: Array<stratType>;
        haven: Array<stratType>;
        split: Array<stratType>;
    },
    brimstone: {
        bind: Array<stratType>;
        haven: Array<stratType>;
        split: Array<stratType>;
    },
    cypher: {
        bind: Array<stratType>;
        haven: Array<stratType>;
        split: Array<stratType>;
    },
    jett: {
        bind: Array<stratType>;
        haven: Array<stratType>;
        split: Array<stratType>;
    },
    omen: {
        bind: Array<stratType>;
        haven: Array<stratType>;
        split: Array<stratType>;
    },
    phoenix: {
        bind: Array<stratType>;
        haven: Array<stratType>;
        split: Array<stratType>;
    },
    raze: {
        bind: Array<stratType>;
        haven: Array<stratType>;
        split: Array<stratType>;
    },
    sage: {
        bind: Array<stratType>;
        haven: Array<stratType>;
        split: Array<stratType>;
    },
    sova: {
        bind: Array<stratType>;
        haven: Array<stratType>;
        split: Array<stratType>;
    },
    viper: {
        bind: Array<stratType>;
        haven: Array<stratType>;
        split: Array<stratType>;
    },
}

type stratType = {
    id: number;
    abilityIcon: 0 | 1 | 2 | 3;
    title: string;
    identifier: string;
    difficulty: '쉬움' | '보통' | '어려움'
    type: 'image' | 'video' | 'youtube';
    method: Array<number>;
}

export const strat: agentType = {
    breach: {
        bind: [

        ],
        haven: [

        ],
        split: [
            
        ]
    },
    brimstone: {
        bind: [
                {
                    id: 0,
                    abilityIcon: 1,
                    title: '미드 A 헤븐 소이탄',
                    identifier: 'alink-heaven-molly',
                    difficulty: '보통',
                    type: 'image',
                    method: [
                        1,2,3
                    ],
                },
                {
                    id: 1,
                    abilityIcon: 1,
                    title: 'A숏 A사이트 소이탄',
                    identifier: 'ashort-asite-molly',
                    difficulty: '쉬움',
                    type: 'image',
                    method: [
                        1,2
                    ]
                },
                {
                    id: 2,
                    abilityIcon: 1,
                    title: 'A숏 U홀 소이탄',
                    identifier: 'ashort-uhall-molly',
                    difficulty: '어려움',
                    type: 'image',
                    method: [
                        1,2,3
                    ]
                },
                {
                    id: 3,
                    abilityIcon: 2,
                    title: 'A사이트 연막',
                    identifier: 'asite-smoke',
                    difficulty: '쉬움',
                    type: 'image',
                    method: [
                        1,2
                    ]
                },
                {
                    id: 4,
                    abilityIcon: 1,
                    title: 'B숏 후카 소이탄',
                    identifier: 'bshort-hookah-molly',
                    difficulty: '보통',
                    type: 'image',
                    method: [
                        1,2
                    ]
                },
                {
                    id: 5,
                    abilityIcon: 1,
                    title: 'B사이트 소이탄',
                    identifier: 'bsite-molly',
                    difficulty: '쉬움',
                    type: 'image',
                    method: [
                        1,2
                    ]
                },
                {
                    id: 6,
                    abilityIcon: 2,
                    title: 'B사이트 연막',
                    identifier: 'bsite-smoke',
                    difficulty: '쉬움',
                    type: 'image',
                    method: [
                        1,2
                    ]
                },
                {
                    id: 7,
                    abilityIcon: 1,
                    title: '샤워 A코너 소이탄',
                    identifier: 'shower-acorner-molly',
                    difficulty: '어려움',
                    type: 'image',
                    method: [
                        1,2,3
                    ]
                },
                {
                    id: 8,
                    abilityIcon: 1,
                    title: '샤워 B사이트 소이탄',
                    identifier: 'shower-bsite-molly',
                    difficulty: '보통',
                    type: 'image',
                    method: [
                        1,2
                    ]
                },
            ],
        haven: [
            {
                id: 0,
                abilityIcon: 1,
                title: 'C사이트 진입 시 코너 소이탄',
                identifier: 'ccorner-molly',
                difficulty: '보통',
                type: 'image',
                method: [
                    1,2
                ],
            },
            {
                id: 1,
                abilityIcon: 1,
                title: 'A링크 A사이트 소이탄',
                identifier: 'alink-asite-molly',
                difficulty: '보통',
                type: 'image',
                method: [
                    1,2
                ],
            },
            {
                id: 2,
                abilityIcon: 1,
                title: 'A롱 A사이트 소이탄',
                identifier: 'along-asite-molly',
                difficulty: '어려움',
                type: 'image',
                method: [
                    1,2,3
                ],
            },
            {
                id: 3,
                abilityIcon: 1,
                title: 'B사이트 윈도우 소이탄',
                identifier: 'bsite-window-molly',
                difficulty: '어려움',
                type: 'image',
                method: [
                    1,2
                ],
            },
            {
                id: 4,
                abilityIcon: 1,
                title: '공격팀 스폰 C사이트 소이탄',
                identifier: 'spawn-csite-molly',
                difficulty: '어려움',
                type: 'image',
                method: [
                    1,2,3
                ],
            },
            {
                id: 5,
                abilityIcon: 1,
                title: 'A링크 A사이트 코너 소이탄',
                identifier: 'alink-acorner-molly',
                difficulty: '보통',
                type: 'image',
                method: [
                    1,2,3
                ],
            },
            {
                id: 6,
                abilityIcon: 2,
                title: 'C사이트 진입 연막',
                identifier: 'csite-smoke',
                difficulty: '보통',
                type: 'image',
                method: [
                    1,2
                ],
            },
        ],
        split: [
            {
                id: 0,
                abilityIcon: 1,
                title: '미드 하수도 환기구 소이탄',
                identifier: 'sewer-vent-molly',
                difficulty: '보통',
                type: 'image',
                method: [
                    1,2
                ],
            },
            {
                id: 1,
                abilityIcon: 1,
                title: '미드 봇 환기구 앞 소이탄',
                identifier: 'midbot-midtop',
                difficulty: '보통',
                type: 'image',
                method: [
                    1,2
                ],
            },
            {
                id: 2,
                abilityIcon: 1,
                title: 'B사이트 소이탄',
                identifier: 'bsite-molly',
                difficulty: '보통',
                type: 'image',
                method: [
                    1,2
                ],
            },
            {
                id: 3,
                abilityIcon: 1,
                title: 'A헤븐 소이탄',
                identifier: 'aheaven-molly',
                difficulty: '보통',
                type: 'image',
                method: [
                    1,2,3
                ],
            },
            {
                id: 4,
                abilityIcon: 1,
                title: 'A헤븐 A사이트 소이탄',
                identifier: 'aheaven-asite-molly',
                difficulty: '보통',
                type: 'image',
                method: [
                    1,2
                ],
            },
            {
                id: 5,
                abilityIcon: 1,
                title: 'A사이트 코너 소이탄',
                identifier: 'acorner-molly',
                difficulty: '보통',
                type: 'image',
                method: [
                    1,2,3
                ],
            },
            {
                id: 6,
                abilityIcon: 2,
                title: 'A사이트 진입 연막',
                identifier: 'asite-smoke',
                difficulty: '쉬움',
                type: 'image',
                method: [
                    1,2
                ],
            },
            {
                id: 7,
                abilityIcon: 1,
                title: 'A사이트 진입 소이탄',
                identifier: 'asite-stair-molly',
                difficulty: '어려움',
                type: 'image',
                method: [
                    1,2,3
                ],
            },
            {
                id: 8,
                abilityIcon: 1,
                title: 'A사이트 스크린방 소이탄',
                identifier: 'asite-screen-molly',
                difficulty: '보통',
                type: 'image',
                method: [
                    1,2,3
                ],
            },
            {
                id: 9,
                abilityIcon: 1,
                title: 'B헤븐 B사이트 소이탄',
                identifier: 'bheaven-bsite-molly',
                difficulty: '보통',
                type: 'image',
                method: [
                    1,2
                ],
            },
        ]
    },
    cypher: {
        bind: [

        ],
        haven: [

        ],
        split: [
            
        ]
    },
    jett: {
        bind: [

        ],
        haven: [

        ],
        split: [
            
        ]
    },
    omen: {
        bind: [

        ],
        haven: [

        ],
        split: [
            
        ]
    },
    phoenix: {
        bind: [

        ],
        haven: [

        ],
        split: [
            
        ]
    },
    raze: {
        bind: [

        ],
        haven: [

        ],
        split: [
            
        ]
    },
    sage: {
        bind: [

        ],
        haven: [

        ],
        split: [
            
        ]
    },
    sova: {
        bind: [

        ],
        haven: [

        ],
        split: [
            
        ]
    },
    viper: {
        bind: [

        ],
        haven: [

        ],
        split: [
            
        ]
    },
}

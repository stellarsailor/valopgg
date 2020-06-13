type agentType = {
    breach: mapType;
    brimstone: mapType;
    cypher: mapType;
    jett: mapType;
    omen: mapType;
    phoenix: mapType;
    raze: mapType;
    sage: mapType;
    sova: mapType;
    viper: mapType;
    reyna: mapType;
}

type stratType = {
    id: number;
    abilityIcon: 0 | 1 | 2 | 3;
    title: string;
    identifier: string;
    difficulty: '쉬움' | '보통' | '어려움'
    type: 'image' | 'video' | 'youtube';
    version: string;
    method: Array<number>;
}

type mapType = {
    bind: Array<stratType>;
    haven: Array<stratType>;
    split: Array<stratType>;
    ascent: Array<stratType>;
}

export const strat: agentType = {
    breach: {
        bind: [
            {
                id: 0,
                abilityIcon: 1,
                title: 'A사이트 미드 수비 섬광',
                identifier: 'asite-mid-defense-flash',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1
                ],
            },
            {
                id: 1,
                abilityIcon: 1,
                title: 'A사이트 샤워실 수비 섬광',
                identifier: 'asite-shower-defense-flash',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1
                ],
            },
            {
                id: 2,
                abilityIcon: 1,
                title: 'B로비 후카 진입 섬광',
                identifier: 'blobby-hookah-offense-flash',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1
                ],
            },
            {
                id: 3,
                abilityIcon: 1,
                title: 'B사이트 B롱 수비 섬광',
                identifier: 'bsite-blong-defense-flash',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 4,
                abilityIcon: 1,
                title: '미드 A사이트 진입 섬광',
                identifier: 'mid-asite-offense-flash',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1
                ],
            },
        ],
        haven: [
            {
                id: 0,
                abilityIcon: 1,
                title: 'A연결부 수비 섬광',
                identifier: 'aconnector-flash',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 1,
                abilityIcon: 1,
                title: 'A롱 푸시 섬광',
                identifier: 'along-flash',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 2,
                abilityIcon: 1,
                title: 'A숏 미드 수비 섬광',
                identifier: 'ashort-mid-defense-flash',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 3,
                abilityIcon: 1,
                title: 'C사이트 창고 수비 섬광',
                identifier: 'csite-garage-defense-flash',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
        ],
        split: [
            {
                id: 0,
                abilityIcon: 1,
                title: 'B헤븐 창고 수비 섬광',
                identifier: 'bheaven-garage-flash',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 1,
                abilityIcon: 1,
                title: '우편함 미드 수비 섬광',
                identifier: 'mail-mid-flash',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 2,
                abilityIcon: 1,
                title: '환기구 A램프 수비 섬광',
                identifier: 'vent-ramps-flash',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1
                ],
            },
        ],
        ascent: [

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
                    version: '0.50',
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
                    version: '0.50',
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
                    version: '0.50',
                    method: [
                        1,2,3
                    ]
                },
                {
                    id: 3,
                    abilityIcon: 2,
                    title: '샤워 A사이트 진입 연막',
                    identifier: 'asite-smoke',
                    difficulty: '쉬움',
                    type: 'image',
                    version: '0.50',
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
                    version: '0.50',
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
                    version: '0.50',
                    method: [
                        1,2
                    ]
                },
                {
                    id: 6,
                    abilityIcon: 2,
                    title: 'B숏 B사이트 진입 연막',
                    identifier: 'bsite-smoke',
                    difficulty: '쉬움',
                    type: 'image',
                    version: '0.50',
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
                    version: '0.50',
                    method: [
                        1,2,3
                    ]
                },
                {
                    id: 8,
                    abilityIcon: 1,
                    title: '샤워 A사이트 소이탄',
                    identifier: 'shower-bsite-molly',
                    difficulty: '보통',
                    type: 'image',
                    version: '0.50',
                    method: [
                        1,2
                    ]
                },
                {
                    id: 9,
                    abilityIcon: 2,
                    title: 'B롱 B사이트 진입 연막',
                    identifier: 'blong-bsite-offense-smoke',
                    difficulty: '보통',
                    type: 'image',
                    version: '1.0',
                    method: [
                        1,2,3,4
                    ]
                },
                {
                    id: 10,
                    abilityIcon: 2,
                    title: 'A숏 A사이트 진입 연막',
                    identifier: 'ashort-asite-offense-smoke',
                    difficulty: '보통',
                    type: 'image',
                    version: '1.0',
                    method: [
                        1,2
                    ]
                },
                {
                    id: 11,
                    abilityIcon: 2,
                    title: 'A사이트 수비 원웨이 연막',
                    identifier: 'asite-defense-oneway-smoke',
                    difficulty: '보통',
                    type: 'image',
                    version: '1.0',
                    method: [
                        1,2,3
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
                version: '0.50',
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
                version: '0.50',
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
                version: '0.50',
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
                version: '0.50',
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
                version: '0.50',
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
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 6,
                abilityIcon: 2,
                title: 'C사이트 진입 연막',
                identifier: 'csite-smoke',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 7,
                abilityIcon: 2,
                title: 'B사이트 진입 연막 1',
                identifier: 'bsite-smoke',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 8,
                abilityIcon: 2,
                title: 'B사이트 진입 연막 2',
                identifier: 'bsite-smoke-2nd',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 9,
                abilityIcon: 2,
                title: 'A롱 A사이트 진입 연막',
                identifier: 'along-asite-smoke',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 10,
                abilityIcon: 2,
                title: 'A숏 A사이트 진입 연막',
                identifier: 'ashort-asite-smoke',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
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
                version: '0.50',
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
                version: '0.50',
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
                version: '0.50',
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
                version: '0.50',
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
                version: '0.50',
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
                version: '0.50',
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
                version: '0.50',
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
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 8,
                abilityIcon: 1,
                title: 'A사이트 스크린룸 소이탄',
                identifier: 'asite-screen-molly',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
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
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 10,
                abilityIcon: 2,
                title: 'B사이트 진입 연막',
                identifier: 'bsite-smoke',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 11,
                abilityIcon: 2,
                title: '미드 A사이트 진입 연막',
                identifier: 'mid-asite-smoke',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 12,
                abilityIcon: 2,
                title: '미드 B사이트 진입 연막',
                identifier: 'mid-bsite-smoke',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
        ],
        ascent: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A사이트 진입 연막',
                identifier: 'asite-offense-smoke',
                difficulty: '보통',
                type: 'image',
                version: '1.0',
                method: [
                    1,2
                ],
            },
            {
                id: 1,
                abilityIcon: 2,
                title: 'B사이트 진입 연막',
                identifier: 'bsite-offense-smoke',
                difficulty: '보통',
                type: 'image',
                version: '1.0',
                method: [
                    1,2
                ],
            },
            {
                id: 2,
                abilityIcon: 2,
                title: '미드 컨트롤 연막(공격 진영)',
                identifier: 'mid-control-offense-smoke',
                difficulty: '보통',
                type: 'image',
                version: '1.0',
                method: [
                    1,2,3,4
                ],
            },
        ]
    },
    cypher: {
        bind: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A숏 스파이캠 1',
                identifier: 'ashort-spycam',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 1,
                abilityIcon: 2,
                title: 'A숏 스파이캠 2',
                identifier: 'ashort-spycam-2nd',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 2,
                abilityIcon: 2,
                title: 'B사이트 스파이캠',
                identifier: 'bsite-spycam',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 4,
                abilityIcon: 2,
                title: '후카 스파이캠',
                identifier: 'hookah-spycam-2nd',
                difficulty: '보통',
                type: 'image',
                version: '1.01',
                method: [
                    1,2
                ],
            },
            {
                id: 5,
                abilityIcon: 2,
                title: '샤워실 스파이캠',
                identifier: 'shower-spycam',
                difficulty: '보통',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 6,
                abilityIcon: 0,
                title: 'A숏 수비 셋업',
                identifier: 'ashort-defense-setup',
                difficulty: '보통',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3,4,5
                ],
            },
            {
                id: 7,
                abilityIcon: 0,
                title: '후카 수비 셋업',
                identifier: 'hookah-defense-setup',
                difficulty: '보통',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3,4,5,6,7
                ],
            },
        ],
        haven: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A정원 A롱 스파이캠',
                identifier: 'agarden-along-spycam',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 1,
                abilityIcon: 2,
                title: 'A사이트 스파이캠',
                identifier: 'asite-spycam',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 2,
                abilityIcon: 2,
                title: 'C사이트 스파이캠 1',
                identifier: 'csite-spycam',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 3,
                abilityIcon: 2,
                title: 'C사이트 스파이캠 2',
                identifier: 'csite-spycam-2nd',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 4,
                abilityIcon: 0,
                title: 'A사이트 수비 셋업',
                identifier: 'asite-defense-setup',
                difficulty: '쉬움',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3,4,5
                ],
            },
            {
                id: 5,
                abilityIcon: 0,
                title: 'C사이트 수비 셋업',
                identifier: 'csite-defense-setup',
                difficulty: '쉬움',
                type: 'image',
                version: '1.01',
                method: [
                    1,2
                ],
            },
        ],
        split: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A난간 A로비 스파이캠',
                identifier: 'alobby-spycam',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 1,
                abilityIcon: 2,
                title: 'A램프 스파이캠',
                identifier: 'aramps-spycam',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 2,
                abilityIcon: 2,
                title: 'B사이트 스파이캠',
                identifier: 'bsite-spycam',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 3,
                abilityIcon: 2,
                title: '미드봇 스파이캠',
                identifier: 'midbot-spycam',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 4,
                abilityIcon: 2,
                title: '우편함 미드 스파이캠',
                identifier: 'midmail-spycam',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 5,
                abilityIcon: 0,
                title: 'A메인 수비 셋업',
                identifier: 'amain-defense-setup',
                difficulty: '보통',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3,4,5,6,7
                ],
            },
            {
                id: 6,
                abilityIcon: 0,
                title: 'A경사로 수비 함정',
                identifier: 'aramps-defense-setup',
                difficulty: '보통',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3
                ],
            },
            {
                id: 7,
                abilityIcon: 1,
                title: 'A경사로 진입 사이버 장막',
                identifier: 'aramps-offense-smoke',
                difficulty: '보통',
                type: 'image',
                version: '1.01',
                method: [
                    1,2
                ],
            },
            {
                id: 8,
                abilityIcon: 1,
                title: 'B사이트 수비 셋업',
                identifier: 'bsite-defense-setup',
                difficulty: '어려움',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3,4,5,6
                ],
            },
        ],
        ascent: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A숏 수비 스파이캠',
                identifier: 'ashort-defense-spycam',
                difficulty: '보통',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 1,
                abilityIcon: 0,
                title: 'A숏 수비 함정',
                identifier: 'ashort-defense-spycam',
                difficulty: '보통',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 2,
                abilityIcon: 1,
                title: 'A사이트 수비 원웨이 스모크',
                identifier: 'asite-defense-oneway-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3,4,5,6
                ],
            },
            {
                id: 3,
                abilityIcon: 2,
                title: 'A사이트 수비 스파이캠',
                identifier: 'asite-defense-spycam',
                difficulty: '쉬움',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3
                ],
            },
            {
                id: 4,
                abilityIcon: 0,
                title: 'A사이트 수비 함정',
                identifier: 'asite-defense-trap',
                difficulty: '보통',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 5,
                abilityIcon: 1,
                title: 'B사이트 수비 원웨이 스모크',
                identifier: 'bsite-defense-oneway-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 6,
                abilityIcon: 2,
                title: 'B사이트 수비 스파이캠',
                identifier: 'bsite-defense-spycam',
                difficulty: '쉬움',
                type: 'image',
                version: '1.01',
                method: [
                    1,2
                ],
            },
            {
                id: 7,
                abilityIcon: 2,
                title: 'B사이트 수비 스파이캠',
                identifier: 'bsite-defense-spycam-2nd',
                difficulty: '쉬움',
                type: 'image',
                version: '1.01',
                method: [
                    1,2
                ],
            },
            {
                id: 8,
                abilityIcon: 2,
                title: 'B사이트 진입 스파이캠',
                identifier: 'bsite-offense-spycam',
                difficulty: '어려움',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3,4,5,6,7,8,9
                ],
            },
            {
                id: 9,
                abilityIcon: 1,
                title: '미드 수비 원웨이 스모크',
                identifier: 'mid-defense-oneway-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '1.01',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 10,
                abilityIcon: 1,
                title: '미드 수비 스파이캠 1',
                identifier: 'mid-defense-spycam',
                difficulty: '쉬움',
                type: 'image',
                version: '1.01',
                method: [
                    1,2
                ],
            },
            {
                id: 11,
                abilityIcon: 1,
                title: '미드 수비 스파이캠 2',
                identifier: 'mid-defense-spycam-2nd',
                difficulty: '쉬움',
                type: 'image',
                version: '1.01',
                method: [
                    1,2
                ],
            },
        ]
    },
    jett: {
        bind: [
            {
                id: 0,
                abilityIcon: 0,
                title: 'A숏 헤븐 연막',
                identifier: 'ashort-heaven-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 1,
                abilityIcon: 0,
                title: 'A숏 연막',
                identifier: 'ashort-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 2,
                abilityIcon: 0,
                title: 'B홀 후카 연막',
                identifier: 'bhall-hookah-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 3,
                abilityIcon: 0,
                title: '후카 B홀 연막',
                identifier: 'hookah-bhall-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 4,
                abilityIcon: 0,
                title: '샤워 헤븐 연막',
                identifier: 'shower-heaven-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
        ],
        haven: [
            {
                id: 0,
                abilityIcon: 0,
                title: 'C롱 연막',
                identifier: 'clong-smoke',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 1,
                abilityIcon: 0,
                title: '창고 연막',
                identifier: 'garage-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 2,
                abilityIcon: 0,
                title: '윈도우 B사이트 연막',
                identifier: 'garage-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 3,
                abilityIcon: 3,
                title: 'A롱 궁 저격',
                identifier: 'along-ult',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1
                ],
            },
        ],
        split: [
            {
                id: 0,
                abilityIcon: 0,
                title: '헤븐 A메인 연막',
                identifier: 'heaven-amain-smoke',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 1,
                abilityIcon: 0,
                title: '수비 미드 연막',
                identifier: 'mid-smoke',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
        ],
        ascent: [

        ]
    },
    omen: {
        bind: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A사이트 공격 장막',
                identifier: 'asite-attack-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 1,
                abilityIcon: 2,
                title: 'B사이트 공격 장막',
                identifier: 'bsite-attack-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
        ],
        haven: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A사이트 공격 장막',
                identifier: 'asite-attack-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 1,
                abilityIcon: 2,
                title: 'B사이트 공격 장막',
                identifier: 'bsite-attack-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 2,
                abilityIcon: 2,
                title: 'C사이트 공격 장막',
                identifier: 'csite-attack-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
        ],
        split: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A사이트 공격 장막',
                identifier: 'asite-attack-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 1,
                abilityIcon: 2,
                title: '미드 공격 장막',
                identifier: 'mid-attack-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 2,
                abilityIcon: 2,
                title: 'A사이트 공격 장막',
                identifier: 'asite-attack-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
        ],
        ascent: [

        ]
    },
    phoenix: {
        bind: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A숏 A코너 뜨거운 손',
                identifier: 'ashort-corner-molly',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 1,
                abilityIcon: 2,
                title: 'A숏 뜨거운 손',
                identifier: 'ashort-molly',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 2,
                abilityIcon: 2,
                title: 'A숏 트럭 뜨거운 손',
                identifier: 'ashort-truck-molly',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 3,
                abilityIcon: 2,
                title: 'B숏 B은신처 뜨거운 손',
                identifier: 'bshort-bcubby-molly',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 4,
                abilityIcon: 2,
                title: 'B숏 후카 뜨거운 손',
                identifier: 'bshort-hookah-molly',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 5,
                abilityIcon: 2,
                title: '샤워 A코너 뜨거운 손',
                identifier: 'shower-acorner-molly',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
        ],
        haven: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A링크 A사이트 뜨거운 손',
                identifier: 'alink-asite-molly',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 1,
                abilityIcon: 2,
                title: 'A롱 A숏 뜨거운 손',
                identifier: 'along-ashort-molly',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
        ],
        split: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A난간 A메인 뜨거운 손',
                identifier: 'arafters-amain-molly',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 1,
                abilityIcon: 2,
                title: 'A난간 A사이트 뜨거운 손',
                identifier: 'arafters-asite-molly',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 2,
                abilityIcon: 2,
                title: '우편함 미드봇 뜨거운 손',
                identifier: 'mail-midbot-molly',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 3,
                abilityIcon: 2,
                title: '미드봇 우편함 뜨거운 손',
                identifier: 'midbot-mail-molly',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 4,
                abilityIcon: 2,
                title: '미드탑 미드봇 뜨거운 손',
                identifier: 'midtop-midbot-molly',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
        ],
        ascent: [

        ]
    },
    raze: {
        bind: [
            {
                id: 0,
                abilityIcon: 0,
                title: 'B숏 방어 폭발 봇',
                identifier: 'bshort-defense-boombot',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
        ],
        haven: [
            {
                id: 0,
                abilityIcon: 0,
                title: '이중문 공격 폭발 봇',
                identifier: 'doubledoor-garage-boombot',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5
                ],
            },
            {
                id: 1,
                abilityIcon: 0,
                title: '미드 A링크 공격 폭발 봇',
                identifier: 'mid-alink-boombot',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5
                ],
            },
            {
                id: 2,
                abilityIcon: 0,
                title: '미드 C링크 공격 폭발 봇',
                identifier: 'mid-clink-boombot',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
        ],
        split: [
            {
                id: 0,
                abilityIcon: 0,
                title: 'A메인 A사이트 공격 폭발 봇',
                identifier: 'amain-asite-boombot',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 1,
                abilityIcon: 0,
                title: '우편함 미드봇 수비 폭발 봇',
                identifier: 'mail-midbot-boombot',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5,6
                ],
            },
            {
                id: 2,
                abilityIcon: 0,
                title: '미드봇 미드탑 공격 폭발 봇',
                identifier: 'midbot-midtop-boombot',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5,6
                ],
            },
        ],
        ascent: [

        ]
    },
    sage: {
        bind: [
            {
                id: 0,
                abilityIcon: 0,
                title: 'A숏 장벽',
                identifier: 'ashort-wall',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 1,
                abilityIcon: 0,
                title: 'B사이트 장벽',
                identifier: 'bsite-wall',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 2,
                abilityIcon: 0,
                title: 'B윈도우 장벽',
                identifier: 'bwindow-wall',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
        ],
        haven: [
            {
                id: 0,
                abilityIcon: 0,
                title: 'A숏 장벽',
                identifier: 'asite-wall',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 1,
                abilityIcon: 0,
                title: 'B사이트 장벽',
                identifier: 'bsite-wall',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
        ],
        split: [
            {
                id: 0,
                abilityIcon: 0,
                title: 'A사이트 장벽',
                identifier: 'asite-wall',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 1,
                abilityIcon: 0,
                title: 'B사이트 장벽',
                identifier: 'bsite-wall',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 2,
                abilityIcon: 0,
                title: '미드 장벽',
                identifier: 'mid-wall',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
        ],
        ascent: [
            {
                id: 0,
                abilityIcon: 0,
                title: 'B메인 B사이트 진입 장벽',
                identifier: 'bmain-bsite-offense-wall',
                difficulty: '보통',
                type: 'image',
                version: '1.0',
                method: [
                    1,2,3,4,5
                ],
            },
            {
                id: 1,
                abilityIcon: 0,
                title: 'B사이트 수비 장벽',
                identifier: 'bsite-defense-wall',
                difficulty: '보통',
                type: 'image',
                version: '1.0',
                method: [
                    1,2,3,4,5
                ],
            },
            {
                id: 2,
                abilityIcon: 0,
                title: '미드 수비 장벽',
                identifier: 'mid-defense-wall',
                difficulty: '보통',
                type: 'image',
                version: '1.0',
                method: [
                    1,2,3,4,5
                ],
            },
        ]
    },
    sova: {
        bind: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A숏 A사이트 정찰화살',
                identifier: 'ashort-asite-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 1,
                abilityIcon: 2,
                title: 'A숏 B미드 정찰화살',
                identifier: 'ashort-bmid-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5
                ],
            },
            {
                id: 2,
                abilityIcon: 2,
                title: 'A숏 정찰화살',
                identifier: 'ashort-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5
                ],
            },
            {
                id: 3,
                abilityIcon: 2,
                title: 'B미드 B사이트 정찰화살',
                identifier: 'bmid-bsite-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 4,
                abilityIcon: 2,
                title: 'B숏 B사이트 정찰화살',
                identifier: 'bshort-bsite-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 5,
                abilityIcon: 2,
                title: '후카 B미드 정찰화살',
                identifier: 'hookah-bmid-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 6,
                abilityIcon: 2,
                title: '샤워 A숏 정찰화살',
                identifier: 'shower-ashort-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 7,
                abilityIcon: 2,
                title: '샤워 A사이트 정찰화살',
                identifier: 'shower-asite-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 8,
                abilityIcon: 2,
                title: 'A사이트 트럭 A숏 정찰화살',
                identifier: 'truck-ashort-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
        ],
        haven: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A링크 A사이트 정찰화살',
                identifier: 'alink-asite-recon',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 1,
                abilityIcon: 2,
                title: 'A롱 A사이트 정찰화살',
                identifier: 'along-asite-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 2,
                abilityIcon: 2,
                title: 'A사이트 정원 정찰화살',
                identifier: 'asite-garden-recon',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5
                ],
            },
            {
                id: 3,
                abilityIcon: 2,
                title: 'B사이트 미드 윈도우 정찰화살',
                identifier: 'bsite-midwindow-recon',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5,6
                ],
            },
            {
                id: 4,
                abilityIcon: 2,
                title: 'B사이트 정찰화살',
                identifier: 'bsite-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,
                ],
            },
            {
                id: 5,
                abilityIcon: 2,
                title: 'C롱 C사이트 정찰화살',
                identifier: 'clong-csite-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5
                ],
            },
            {
                id: 6,
                abilityIcon: 2,
                title: '미드 창고 정찰화살',
                identifier: 'middoors-garage-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
        ],
        split: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A헤븐 공격진 스폰지역 정찰화살',
                identifier: 'aheaven-tspawn-recon',
                difficulty: '쉬움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 1,
                abilityIcon: 2,
                title: 'A램프 공격진 스폰지역 정찰화살',
                identifier: 'aramp-tspawn-recon',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 2,
                abilityIcon: 2,
                title: 'B헤븐 B사이트 정찰화살',
                identifier: 'bheaven-bsite-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 3,
                abilityIcon: 2,
                title: 'B사이트 B로비 정찰화살',
                identifier: 'bsite-blobby-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 4,
                abilityIcon: 2,
                title: '우편함 미드 정찰화살',
                identifier: 'mail-mid-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 5,
                abilityIcon: 2,
                title: '미드 정찰화살',
                identifier: 'mid-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 6,
                abilityIcon: 2,
                title: '미드 정찰화살2',
                identifier: 'mid-recon-2nd',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2
                ],
            },
            {
                id: 7,
                abilityIcon: 2,
                title: '공격진 스폰 지역 A램프 정찰화살',
                identifier: 'tspawn-aramp-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 8,
                abilityIcon: 2,
                title: '공격진 스폰 지역 A사이트 정찰화살',
                identifier: 'tspawn-asite-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 9,
                abilityIcon: 2,
                title: '공격진 스폰 지역 B사이트 정찰화살',
                identifier: 'tspawn-bsite-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 10,
                abilityIcon: 2,
                title: 'A헤븐 A로비 수비 정찰화살',
                identifier: 'aheaven-alobby-defense-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 11,
                abilityIcon: 2,
                title: 'A로비 A경사로 공격 정찰화살',
                identifier: 'alobby-aramps-offense-recon',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 12,
                abilityIcon: 2,
                title: 'B헤븐 B사이트 수비 정찰화살',
                identifier: 'bheaven-bsite-defense-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 13,
                abilityIcon: 2,
                title: 'B로비 B사이트 공격 정찰화살',
                identifier: 'blobby-bsite-offense-recon',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
        ],
        ascent: [

        ]
    },
    viper: {
        bind: [
            {
                id: 0,
                abilityIcon: 1,
                title: 'A사이트 숏 수비 연막',
                identifier: 'asite-short-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 1,
                abilityIcon: 1,
                title: 'A사이트 샤워 수비 연막',
                identifier: 'asite-shower-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 2,
                abilityIcon: 1,
                title: 'B롱 B사이트 공격 연막',
                identifier: 'blong-bsite-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5
                ],
            },
            {
                id: 3,
                abilityIcon: 1,
                title: 'B숏 B백사이드 연막',
                identifier: 'bshort-bback-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5,6,7
                ],
            },
            {
                id: 4,
                abilityIcon: 1,
                title: 'B사이트 B롱 수비 연막',
                identifier: 'bsite-blong-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 5,
                abilityIcon: 1,
                title: 'A로비 A헤븐 공격 연막',
                identifier: 'mid-aheaven-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 6,
                abilityIcon: 1,
                title: '샤워 A헤븐 공격 연막',
                identifier: 'shower-heaven-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 7,
                abilityIcon: 2,
                title: 'A사이트 B사이트 수비 장막',
                identifier: 'asite-bsite-defense-wall',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 8,
                abilityIcon: 2,
                title: '미드 A사이트 진입 장막',
                identifier: 'mid-asite-offense-wall',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 9,
                abilityIcon: 2,
                title: '미드 B사이트 진입 장막',
                identifier: 'mid-bsite-offense-wall',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 10,
                abilityIcon: 2,
                title: '샤워 A사이트 진입 장막',
                identifier: 'shower-asite-offense-wall',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
        ],
        haven: [
            {
                id: 0,
                abilityIcon: 1,
                title: 'A정원 B사이트 공격 연막',
                identifier: 'agarden-bsite-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 1,
                abilityIcon: 1,
                title: 'A사이트 A롱 수비 연막',
                identifier: 'asite-along-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 2,
                abilityIcon: 1,
                title: 'C롱 C사이트 공격 연막',
                identifier: 'clong-csite-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 3,
                abilityIcon: 2,
                title: 'A롱 A사이트 진입 장막',
                identifier: 'along-asite-offense-wall',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 4,
                abilityIcon: 2,
                title: 'A사이트 B사이트 수비 장막',
                identifier: 'asite-bsite-defense-wall',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 5,
                abilityIcon: 2,
                title: 'C롱 C사이트 진입 장막',
                identifier: 'clong-csite-wall',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
        ],
        split: [
            {
                id: 0,
                abilityIcon: 1,
                title: 'A램프 수비 연막',
                identifier: 'aramp-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 1,
                abilityIcon: 1,
                title: 'B로비 B헤븐 공격 연막',
                identifier: 'blobby-bheaven-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5
                ],
            },
            {
                id: 2,
                abilityIcon: 1,
                title: 'B사이트 창고 수비 연막',
                identifier: 'bsite-garage-smoke',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 3,
                abilityIcon: 1,
                title: '미드 수비 연막',
                identifier: 'mid-smoke',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5,6,7
                ],
            },
            {
                id: 4,
                abilityIcon: 2,
                title: '미드 B헤븐 진입 장막',
                identifier: 'alobby-mid-offense-wall',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 5,
                abilityIcon: 2,
                title: 'A사이트 수비 장막',
                identifier: 'asite-defense-wall',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3
                ],
            },
            {
                id: 6,
                abilityIcon: 2,
                title: 'A사이트 진입 장막',
                identifier: 'asite-offense-wall',
                difficulty: '어려움',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 7,
                abilityIcon: 2,
                title: '미드 A헤븐 진입 장막',
                identifier: 'blobby-mid-offense-wall',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5
                ],
            },
            {
                id: 8,
                abilityIcon: 2,
                title: 'B사이트 진입 장막',
                identifier: 'bsite-offense-wall',
                difficulty: '보통',
                type: 'image',
                version: '0.50',
                method: [
                    1,2,3,4,5,6
                ],
            },
        ],
        ascent: [
            {
                id: 0,
                abilityIcon: 2,
                title: 'A사이트 진입 장막',
                identifier: 'asite-offense-wall',
                difficulty: '보통',
                type: 'image',
                version: '1.0',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 1,
                abilityIcon: 2,
                title: 'B사이트 진입 장막',
                identifier: 'bsite-offense-wall',
                difficulty: '보통',
                type: 'image',
                version: '1.0',
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 2,
                abilityIcon: 2,
                title: '미드 A사이트 진입 장막',
                identifier: 'mid-asite-offense-wall',
                difficulty: '보통',
                type: 'image',
                version: '1.0',
                method: [
                    1,2,3,4,5
                ],
            },
            {
                id: 3,
                abilityIcon: 2,
                title: '미드 B사이트 진입 장막',
                identifier: 'mid-bsite-offense-wall',
                difficulty: '보통',
                type: 'image',
                version: '1.0',
                method: [
                    1,2,3,4,5
                ],
            },
        ]
    },
    reyna: {
        bind: [
        ],
        haven: [

        ],
        split: [
        ],
        ascent: [
            
        ]
    }
}

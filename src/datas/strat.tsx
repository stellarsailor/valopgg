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
            {
                id: 0,
                abilityIcon: 0,
                title: 'A숏 헤븐 연막',
                identifier: 'ashort-heaven-smoke',
                difficulty: '보통',
                type: 'image',
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
                method: [
                    1,2
                ],
            },
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
            {
                id: 0,
                abilityIcon: 0,
                title: 'A숏 장벽',
                identifier: 'ashort-wall',
                difficulty: '쉬움',
                type: 'image',
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
                method: [
                    1,2
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
                method: [
                    1,2,3,4
                ],
            },
            {
                id: 6,
                abilityIcon: 2,
                title: '샤워 A사이트 정찰화살',
                identifier: 'shower-asite-recon',
                difficulty: '보통',
                type: 'image',
                method: [
                    1,2,3
                ],
            },
            {
                id: 7,
                abilityIcon: 2,
                title: 'A사이트 트럭 A숏 정찰화살',
                identifier: 'truck-ashort-recon',
                difficulty: '보통',
                type: 'image',
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
                method: [
                    1,2,3,4
                ],
            },
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
                method: [
                    1,2,3,4
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
                method: [
                    1,2,3,4,5,6,7
                ],
            },
        ]
    },
}
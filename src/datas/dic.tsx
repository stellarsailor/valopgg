type dicType = {
    id: number;
    letter: string;
    word_ko: string;
    word_en?: string;
    desc: string;
    isImg?: boolean;
}

export const dic: Array<dicType> = [
    {
        id: 0,
        letter: 'ㅎ',
        word_ko: '헤븐',
        word_en: 'Heaven',
        desc: "높은 위치의 난간, '2층'과 의미가 같음",
        isImg: true
    },
    {
        id: 1,
        letter: 'ㅇ',
        word_ko: '윈도우',
        word_en: 'Window',
        desc: '작게 열린 통로 혹은 창문처럼 턱이 있는 방 또는 구멍',
        isImg: true
    },
    {
        id: 2,
        letter: 'ㅁ',
        word_ko: '메인',
        word_en: 'Main',
        desc: '상대가 들어오는 가장 큰 입구'
    },
    {
        id: 3,
        letter: 'ㄹ',
        word_ko: '램프',
        word_en: 'Ramp',
        desc: '경사가 있는 길, 경사로',
        isImg: true
    },
    {
        id: 4,
        letter: 'ㅇ',
        word_ko: '엘보우',
        word_en: 'Elbow',
        desc: 'ㄱ자 형태의 코너'
    },
    {
        id: 5,
        letter: 'ㄹ',
        word_ko: '롱',
        word_en: 'Long',
        desc: '사이트에서 이어지는 긴 길',
        isImg: true
    },
    {
        id: 6,
        letter: 'ㅅ',
        word_ko: '숏',
        word_en: 'Short',
        desc: '사이트에서 이어지는 짧은 길',
        isImg: true
    },
    {
        id: 7,
        letter: 'ㅍ',
        word_ko: '플랜트',
        word_en: 'Plant',
        desc: '스파이크를 설치하는 행위'
    },
    {
        id: 8,
        letter: 'ㅅ',
        word_ko: '스폰',
        word_en: 'Spawn',
        desc: '각 팀 별 소환되는 첫 시작 장소, 베이스와 동일함'
    },
    {
        id: 9,
        letter: 'ㄹ',
        word_ko: '로테이트',
        word_en: 'Rotate',
        desc: '다른 목적지로 돌아가는 행위'
    },
    {
        id: 10,
        letter: 'ㅇ',
        word_ko: '에코',
        word_en: 'Eco',
        desc: '이번 라운드에 돈을 아끼고 다음 라운드에 총을 사자는 뜻',
    },
    {
        id: 11,
        letter: 'ㅍ',
        word_ko: '풀 에코',
        word_en: 'Full Eco',
        desc: '에코와 비슷하나 어떠한 장비도 사지 않는 것',
    },
    {
        id: 12,
        letter: 'ㅇ',
        word_ko: 'SMG',
        word_en: '',
        desc: '기관단총을 뜻하는 단어, 혹은 이번 라운드에 기관 단총을 사자는 뜻',
    },
    {
        id: 13,
        letter: 'ㅍ',
        word_ko: '픽, 피킹',
        word_en: 'Peek',
        desc: '살짝 내다보는 행위'
    },
    {
        id: 14,
        letter: 'ㅅ',
        word_ko: '세이브',
        word_en: 'Save',
        desc: '적에게 죽어서 총을 잃어버리지 말고 숨어서 총을 보존하라는 뜻'
    },
    {
        id: 16,
        letter: 'ㅎ',
        word_ko: '후카',
        word_en: 'Hookah',
        desc: "Bind 맵의 'B 창문' 표시 방(B숏)",
        isImg: true
    },
    {
        id: 17,
        letter: 'ㅂ',
        word_ko: '브레이킹',
        word_en: 'Breaking',
        desc: '반동을 최소화 하기 위하여 움직임을 멈추고 쏘는 것. wasd에서 손을 떼거나 a를 입력하던도중 d와 같이 반대방향의 키를 눌러 브레이킹이 가능함.'
    },
    {
        id: 18,
        letter: 'ㅇ',
        word_ko: '오퍼',
        word_en: '',
        desc: '오퍼레이터(Operator)의 줄임말. (=에땁, 땁)'      
    },
    {
        id: 19, 
        letter: 'ㅍ',
        word_ko: '푸시',
        word_en: 'Push',
        desc: '목적 지역에 공격하러 들어가는 것'
    },
    {
        id: 20, 
        letter: 'ㄹ',
        word_ko: '러시',
        word_en: 'Rush',
        desc: '팀원 모두가 한꺼번에 목적 지역에 공격하러 빠르게 들어가는 것'
    },
    {
        id: 21,
        letter: 'ㅇ',
        word_ko: '에이스',
        word_en: 'Ace',
        desc: '혼자 모든 적을 처치 했을 때'
    },
    {
        id: 22,
        letter: 'ㅋ',
        word_ko: '클러치',
        word_en: 'Clutch',
        desc: '혼자 남은 플레이어가 남은 적들을 모두 처치하여 라운드를 승리로 이끌었을 때'
    },
    {
        id: 23,
        letter: 'ㅁ',
        word_ko: '미드',
        word_en: 'Mid',
        desc: '맵의 중앙 구역'
    },
    {
        id: 24,
        letter: 'ㄷ',
        word_ko: '디퓨즈',
        word_en: 'Defuse',
        desc: '스파이크를 해체하는 행위'
    },
    {
        id: 25,
        letter: 'ㅌ',
        word_ko: '탑 프래거',
        word_en: 'Top Fragger',
        desc: '팀에서 가장 많이 킬을 기록한 사람'
    },
    {
        id: 15,
        letter: 'ㅌ',
        word_ko: '트레이드 킬',
        word_en: '',
        desc: '교환 킬, 예를 들어 2:1 상황에서 우리 팀 한명이 죽었을때 바로 앞으로 나가 적을 죽이는 행위 혹은 그렇게 된 상황'
    },
    {
        id: 26,
        letter: 'A',
        word_ko: 'AWP',
        word_en: '',
        desc: '오퍼레이터를 일컫는 용어'
    },
    {
        id: 27,
        letter: 'ㄴ',
        word_ko: '네이드',
        word_en: 'Nade',
        desc: '그레네이드(Granade)의 줄임말. 투척류 장비 혹은 스킬을 일컫는 용어'
    },
    {
        id: 28,
        letter: 'ㅅ',
        word_ko: '스모크',
        word_en: 'Smoke',
        desc: '연막류 장비 혹은 스킬을 일컫는 용어'
    },
    {
        id: 29,
        letter: 'ㅂ',
        word_ko: '베이팅',
        word_en: 'Baiting',
        desc: 'Bait은 미끼를 일컫는 용어로써 팀원을 미끼 삼아 플레이 하는 방식'
    },
    {
        id: 30,
        letter: 'ㅂ',
        word_ko: '베이스',
        word_en: 'Base',
        desc: '각 팀 별 소환되는 첫 시작 장소 (=스폰)'
    },
    {
        id: 31,
        letter: 'C',
        word_ko: 'C4',
        word_en: '',
        desc: '스파이크를 의미함'
    },
    {
        id: 32,
        letter: 'A',
        word_ko: 'ADS',
        word_en: '',
        desc: 'Aiming Down Sight. 정조준 모드'
    },
    {
        id: 33,
        letter: 'ㅇ',
        word_ko: '엔트리',
        word_en: 'Entry',
        desc: '제일 앞장서서 가는 플레이어'
    },
    {
        id: 34,
        letter: 'C',
        word_ko: 'CT',
        word_en: 'Counter Terrorist',
        desc: '대 테러리스트, 주로 방어팀 진영 스폰 지점 쪽 통로들을 일컫음(반대말 T, 테러리스트)'
    },
    {
        id: 35,
        letter: 'ㅇ',
        word_ko: '에땁, 땁',
        word_en: 'AWP',
        desc: '타 게임에서의 발로란트 오퍼레이터 무기와 비슷한 저격총 AWP를 이르는 말.'
    },
    {
        id: 36,
        letter: 'ㅂ',
        word_ko: '버니 합',
        word_en: 'Bunny Hop',
        desc: '토끼뜀이라는 뜻으로 FPS내 일종의 무빙 테크닉.'
    },
    {
        id: 37,
        letter: 'F',
        word_ko: 'FOV',
        word_en: 'Field of View',
        desc: '시야각을 뜻함.'
    },
    {
        id: 38,
        letter: 'ㅍ',
        word_ko: '프리 에이밍',
        word_en: 'Pre-aiming',
        desc: '상대방이 나타날 만한 곳에 미리 조준선을 두며 움직이는 것. 쏘면서 들어가는것은 프리 파이어(Pre-fire)'
    },
    {
        id: 39,
        letter: 'ㅁ',
        word_ko: '무결점 플레이',
        word_en: '',
        desc: '팀원 모두 죽지 않고 라운드 승리'
    },
    {
        id: 40,
        letter: 'ㅈ',
        word_ko: '절약왕',
        word_en: '',
        desc: '상대팀보다 적은 크레드를 소비하여 라운드 승리'
    },
    {
        id: 41,
        letter: 'ㅅ',
        word_ko: '사이트',
        word_en: 'Site',
        desc: '스파이크를 설치하는 장소. 수비진영에서 봤을때 좌측부터 A B C 순',
        isImg: true
    },
]
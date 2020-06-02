type questionType = {
    id: number;
    question: string;
    action: Array<"brimstone" | "breach" | "cypher" | "jett" | "omen" | "phoenix" | "raze" | "sage" | "sova" | "viper" | "reyna">
    point: Array<number>;
}

export const question = [
    {
        id: 0,
        question: "드론에 관심이 많아 드론을 보유하고 있거나 사는걸 고려해보곤 했다.",
        action: ["sova"], 
        point: [3],
    },
    {
        id: 1,
        question: "RPG 게임을 할때 주로 여자 캐릭터로 플레이하곤 했다.",
        action: ["viper", "sage", "jett", "raze", "reyna"], 
        point: [2,2,2,1,1],
    },
    {
        id: 2,
        question: "돌진하는 암살자 스타일의 캐릭터들을 좋아한다.",
        action: ['jett', 'phoenix', 'omen'],
        point: [2,2,1],
    },
    {
        id: 3,
        question: "마초 스타일의 전투적인 상남자 캐릭터를 선호한다.",
        action: ['breach', 'brimstone'],
        point: [4,3],
    },
    {
        id: 4,
        question: "세계관 최강자들이 싸우는 닌자 만화를 즐겨보곤 했다.",
        action: ["jett"],
        point: [3],
    },
    {
        id: 5,
        question: "타 게임에서 폭탄을 던지거나 폭탄을 발판삼아 방방 튀어다니던 캐릭터를 즐겨 하곤 했다.",
        action: ["raze", "breach"],
        point: [4,2],
    },
    {
        id: 6,
        question: "평소에 cctv나 차량의 블랙박스를 의식적으로 찾아본 적이 있다.",
        action: ["cypher", "sova"],
        point: [4,3],
    },
    {
        id: 7,
        question: "밝고 트여있는 공간보다 어둡더라도 나만의 공간이 있는 것이 좋다.",
        action: ["viper", "omen"],
        point: [3,1],
    },
    {
        id: 8,
        question: "평소에 우주선이나 인공위성에 관심이 많아서 관련 정보를 찾아보곤 했다.",
        action: ["brimstone"],
        point: [3],
    },
    {
        id: 9,
        question: "RPG 게임을 할때 주로 지원형 캐릭터들을 하곤 했다.",
        action: ["sage", "brimstone", "sova","cypher"],
        point: [3,2,1,1]
    },
    {
        id: 10,
        question: "게임을 이기는것보다 상대방을 짜증나게 하는게 더욱 즐겁다.",
        action: ["sage", "phoenix", "cypher", "viper", "breach"],
        point: [1,1,1,1,1]
    },
    {
        id: 11,
        question: "평소에 옷 매무새를 자주 고친다.",
        action: ["phoenix"],
        point: [2]
    },
    {
        id: 12,
        question: "만약 초능력을 하나 고를 수 있다면 순간이동을 고를 것이다.",
        action: ['omen'],
        point: [3]
    },
    {
        id: 13,
        question: "쎈 누님/언니 스타일이 매력적이라고 생각한다.",
        action: ['reyna'],
        point: [3]
    }
]
import { guideMD } from './markdown/guideMD'
import { patchMD } from './markdown/patchMD'
import { etcMD } from './markdown/etcMD'

type groupType = {
    id: number;
    groupName: string;
    tabs: Array<tabType>;
}

type tabType = {
    id: number;
    tabName: string;
    markdown: string;
}

type subTabType = {

}

export const patchNotePhrase = '발로란트 정식출시! 패치노트 1.0 바로가기'

export const guide: Array<groupType> = [
    {
        id: 0,
        groupName: '패치노트',
        tabs: [
            {
                id: 0,
                tabName: 'v1.0',
                markdown: patchMD[0],
            },
            {
                id: 1,
                tabName: 'v0.50',
                markdown: patchMD[1],
            },
            {
                id: 2,
                tabName: 'v0.49',
                markdown: patchMD[2],
            }
        ]
    },
    {
        id: 1,
        groupName: '가이드',
        tabs:[
            {
                id: 0,
                tabName: '기본 시스템',
                markdown: guideMD[0]
            },
            {
                id: 1,
                tabName: '랭크 시스템',
                markdown: guideMD[1]
            },
            {
                id: 2,
                tabName: '계약 시스템',
                markdown: guideMD[2]
            },
        ]
    },
    {
        id: 2,
        groupName: '기타',
        tabs: [
            {
                id: 0,
                tabName: '모든 요원 체험해보기',
                markdown: etcMD[0]
            },
            {
                id: 1,
                tabName: '자주 묻는 질문',
                markdown: etcMD[1]
            }
        ]
    }
]
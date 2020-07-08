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

export const patchNotePhrase = '가디언 업데이트 1.03 패치노트 바로가기'

export const guide: Array<groupType> = [
    {
        id: 0,
        groupName: '패치노트',
        tabs: [
            {
                id: 0,
                tabName: 'v0.49',
                markdown: patchMD[0],
            },
            {
                id: 1,
                tabName: 'v0.50',
                markdown: patchMD[1],
            },
            {
                id: 2,
                tabName: 'v1.00',
                markdown: patchMD[2],
            },
            {
                id: 3,
                tabName: 'v1.01',
                markdown: patchMD[3],
            },
            {
                id: 4,
                tabName: 'v1.02',
                markdown: patchMD[4],
            },
            {
                id: 5,
                tabName: 'v1.03',
                markdown: patchMD[5],
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
    // {
    //     id: 2,
    //     groupName: '기타',
    //     tabs: [
    //         {
    //             id: 0,
    //             tabName: '모든 요원 체험해보기',
    //             markdown: etcMD[0]
    //         },
    //         {
    //             id: 1,
    //             tabName: '자주 묻는 질문',
    //             markdown: etcMD[1]
    //         }
    //     ]
    // }
]
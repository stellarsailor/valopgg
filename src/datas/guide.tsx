import { guideMD } from './markdown/guideMD'
import { patchMD } from './markdown/patchMD'

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

export const patchNotePhrase = '액트3 - 1.10 패치노트'

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
            },
            {
                id: 6,
                tabName: 'v1.04',
                markdown: patchMD[6],
            },
            {
                id: 7,
                tabName: 'v1.05',
                markdown: patchMD[7],
            },
            {
                id: 8,
                tabName: 'v1.06',
                markdown: patchMD[8],
            },
            {
                id: 9,
                tabName: 'v1.07',
                markdown: patchMD[9],
            },
            {
                id: 10,
                tabName: 'v1.08',
                markdown: patchMD[10],
            },
            {
                id: 11,
                tabName: 'v1.09',
                markdown: patchMD[11],
            },
            {
                id: 12,
                tabName: 'v1.10',
                markdown: patchMD[12],
            },
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
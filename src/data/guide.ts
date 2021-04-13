import { guideMD } from './markdown/guideMD'

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

export const patchNotePhrase = '스카이 합류! 1.11 패치노트'

export const guide: Array<groupType> = [
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
]
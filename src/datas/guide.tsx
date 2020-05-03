import { guideMD } from './markdown/guideMD'
import { patchMD } from './markdown/patchMD'
import { userguideMD } from './markdown/userguideMD'

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

export const guide: Array<groupType> = [
    {
        id: 0,
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
        id: 1,
        groupName: '패치노트',
        tabs: [
            {
                id: 0,
                tabName: '클로즈베타 0.49',
                markdown: patchMD[0],
            }
        ]
    },
    {
        id: 2,
        groupName: '유저 공략',
        tabs: [
            {
                id: 0,
                tabName: '모든 요원 체험해보기',
                markdown: userguideMD[0]
            }
        ]
    }
]
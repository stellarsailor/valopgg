import React from 'react'
import { withRouter } from 'react-router-dom'
import { Input } from 'antd'

const { Search } = Input;

function SearchInput (props) {

    return(
        <Search placeholder="유저 네임을 입력해주세요." onSearch={value => props.history.push(`/player/${value}`)} enterButton />
    )
}

export default withRouter(SearchInput)
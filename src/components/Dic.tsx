import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import ReactMarkdown from 'react-markdown'

const input = '# This is a header\n\nAnd this is a paragraph'

export default function Dic() {

    return(
        <>
<ReactMarkdown source={input} />
        </>
    )
}
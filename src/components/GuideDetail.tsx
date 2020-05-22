import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Row, Col, Menu, BackTop } from 'antd';
import { Link } from 'react-router-dom'
import queryString from 'query-string'

import { guide } from '../datas/guide'
import ReactMarkdown from 'react-markdown';

const { SubMenu } = Menu;

export default function GuideDetail(props) {

    const groupNumber = props.match.params.groupNumber;
    const tabName = props.match.params.tabName;

    const data = guide[groupNumber].tabs.filter((v) => v.tabName === tabName)
    const markdown = data[0].markdown;
    let selectedArticle = 0;

    // const [ markdown, setMarkdown ] = useState(data[0].markdown);

    // const onHandleMarkdown = useCallback((keyValue) => {
    //     const keyValueFromZero = keyValue - 1
    //     if(keyValueFromZero < guide[0].tabs.length){
    //         setMarkdown(guide[0].tabs[keyValueFromZero].markdown)
    //     } else if (guide[0].tabs.length <= keyValueFromZero && keyValueFromZero < guide[0].tabs.length + guide[1].tabs.length){
    //         setMarkdown(guide[1].tabs[keyValueFromZero - guide[0].tabs.length].markdown)
    //     } else {
    //         setMarkdown(guide[2].tabs[keyValueFromZero - guide[0].tabs.length - guide[1].tabs.length].markdown)
    //     }
    // },[])
    if(groupNumber === '0'){
        selectedArticle = data[0].id
    } else if(groupNumber === '1'){
        selectedArticle = guide[0].tabs.length + data[0].id
    } else if(groupNumber === '2') {
        selectedArticle = guide[0].tabs.length + guide[1].tabs.length + data[0].id
    }

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <BackTop />
                <Row>
                    <Col xs={24} sm={24} md={8} lg={8} xl={6} style={{marginTop: '1rem'}}>
                        <Menu
                            // onClick={(e) => onHandleMarkdown(e.key)}
                            style={{ width: '80%' }}
                            defaultSelectedKeys={[selectedArticle + 1 + '']}
                            defaultOpenKeys={['sub1', 'sub2', 'sub3']}
                            mode="inline"
                            theme="dark"
                        >
                            <SubMenu key="sub1" title="패치노트">
                                {
                                    guide[0].tabs.map((v) => (
                                        <Menu.Item key={v.id + 1}>
                                            <Link to={`/guide/${0}/${v.tabName}`} >
                                            {v.tabName}
                                            </Link>
                                        </Menu.Item>
                                    ))
                                }
                                
                            </SubMenu>
                            <SubMenu key="sub2" title="가이드">
                                {
                                    guide[1].tabs.map((v) => (
                                        <Menu.Item key={v.id + guide[0].tabs.length + 1}>
                                            <Link to={`/guide/${1}/${v.tabName}`} >
                                            {v.tabName}
                                            </Link>
                                        </Menu.Item>
                                    ))
                                }
                            </SubMenu>
                            <SubMenu key="sub3" title="기타">
                                {
                                    guide[2].tabs.map((v) => (
                                        <Menu.Item key={v.id + guide[0].tabs.length + guide[1].tabs.length + 1}>
                                            <Link to={`/guide/${2}/${v.tabName}`} >
                                            {v.tabName}
                                            </Link>
                                        </Menu.Item>
                                    ))
                                }
                            </SubMenu>
                        </Menu>
                        {
                            window.innerWidth < 576 ?
                                null
                            :
                                <img src={require('../images/official-jett.png')} style={{width: '100%'}}/>
                        }
                    </Col>
                    <Col xs={24} sm={22} md={16} lg={16} xl={18} >
                        <div style={{backgroundColor: '#202b43', padding: '5%', marginTop: '1rem', marginBottom: '1rem'}}>
                            <ReactMarkdown source={markdown} escapeHtml={false} />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
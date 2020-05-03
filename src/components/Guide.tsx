import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Row, Col, Menu } from 'antd';
import queryString from 'query-string'

import { guide } from '../datas/guide'
import ReactMarkdown from 'react-markdown';

const { SubMenu } = Menu;

export default function Guide(props) {

    const qs: any = queryString.parse(props.location.search)
    let initialGroupNumber: number = 0;

    if(Object.entries(qs).length === 0){
        initialGroupNumber = 0
    } else {
        initialGroupNumber = qs.groupnumber;
    }

    const [ markdown, setMarkdown ] = useState(guide[initialGroupNumber].tabs[0].markdown);

    const onHandleMarkdown = useCallback((keyValue) => {
        const keyValueFromZero = keyValue - 1
        if(keyValueFromZero < guide[0].tabs.length){
            setMarkdown(guide[0].tabs[keyValueFromZero].markdown)
        } else if (guide[0].tabs.length <= keyValueFromZero && keyValueFromZero < guide[0].tabs.length + guide[1].tabs.length){
            setMarkdown(guide[1].tabs[keyValueFromZero - guide[0].tabs.length].markdown)
        } else {
            setMarkdown(guide[2].tabs[keyValueFromZero - guide[0].tabs.length - guide[1].tabs.length].markdown)
        }
    },[])

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)', minHeight: 800}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15}>
                <Row>
                    <Col xs={24} sm={24} md={8} lg={8} xl={6} style={{marginTop: '1rem'}}>
                        <Menu
                            onClick={(e) => onHandleMarkdown(e.key)}
                            style={{ width: '80%' }}
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme="dark"
                        >
                            <SubMenu
                            key="sub1"
                            title={ <span>가이드</span> }>
                                {
                                    guide[0].tabs.map((v) => (
                                        <Menu.Item key={v.id + 1}>
                                            {v.tabName}
                                        </Menu.Item>
                                    ))
                                }
                            </SubMenu>
                            <SubMenu key="sub2" title="패치노트">
                                {
                                    guide[1].tabs.map((v) => (
                                        <Menu.Item key={v.id + guide[0].tabs.length + 1}>
                                            {v.tabName}
                                        </Menu.Item>
                                    ))
                                }
                            </SubMenu>
                            <SubMenu
                            key="sub3"
                            title={ <span>유저 공략</span> }>
                                {
                                    guide[2].tabs.map((v) => (
                                        <Menu.Item key={v.id + guide[0].tabs.length + guide[1].tabs.length + 1}>
                                            {v.tabName}
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
                        <div style={{backgroundColor: '#202b43', padding: '5%', marginTop: '1rem'}}>
                            <ReactMarkdown source={markdown} escapeHtml={false} />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        // <Row justify="center" style={{backgroundColor: '#ece8e1', minHeight: 600}} >
        //     <Col xs={24} sm={22} md={20} lg={20} xl={15}>
        //         <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        //             <div style={{position: 'absolute', fontSize: '1.5rem'}}>.</div>
        //             <div style={{position: 'absolute', width: '100%', backgroundColor: 'black', opacity: 0.3}}></div>
        //             <img src={require('../images/official-background-wide-darken.png')} style={{width: '100%'}} />
        //         </div>

        //     </Col>
        // </Row>
    )
}
import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import { weapon } from '../datas/weapon'
import WeaponRender from './subcomponents/WeaponRender';

const WeaponCategory = styled.div`
    background-color: #273552;
    color: white;
    font-weight: bold;
    font-size: 1.1rem;
    width: 100%;
    text-align: center;
`

export default function Weapon() {

    return(
        <Row justify="center" style={{backgroundColor: 'rgba(19, 28, 46, 0.95)'}} >
            <Col xs={24} sm={22} md={20} lg={20} xl={15} style={{padding: '1rem'}}>
                <Row style={{width: '100%', height: '100%', backgroundColor: '#202b43'}} justify="center">
                    <Col xs={24} sm={12} md={12} lg={4} xl={4} style={{ padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <WeaponCategory>Sidearm</WeaponCategory>
                        {weapon.filter((v) => v.category === 'Sidearm').map((v, index) => <WeaponRender key={index} name={v.name} name_kr={v.name_ko} cost={v.cost} resize={true} />)}
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={6} xl={6} style={{ padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <WeaponCategory>SMG</WeaponCategory>
                        {weapon.filter((v) => v.category === 'SMG').map((v, index) => <WeaponRender key={index} name={v.name} name_kr={v.name_ko} cost={v.cost} />)}
                        <WeaponCategory>Shotgun</WeaponCategory>
                        {weapon.filter((v) => v.category === 'Shotgun').map((v, index) => <WeaponRender key={index} name={v.name} name_kr={v.name_ko} cost={v.cost} />)}
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={7} xl={7} style={{ padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                    <   WeaponCategory>Rifle</WeaponCategory>
                        {weapon.filter((v) => v.category === 'Rifle').map((v, index) => <WeaponRender key={index} name={v.name} name_kr={v.name_ko} cost={v.cost} />)}
                    </Col>
                    <Col xs={24} sm={12} md={12} lg={7} xl={7} style={{ padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                        <WeaponCategory>Sniper</WeaponCategory>
                        {weapon.filter((v) => v.category === 'Sniper').map((v, index) => <WeaponRender key={index} name={v.name} name_kr={v.name_ko} cost={v.cost} />)}
                        <WeaponCategory>Heavy</WeaponCategory>
                        {weapon.filter((v) => v.category === 'Heavy').map((v, index) => <WeaponRender key={index} name={v.name} name_kr={v.name_ko} cost={v.cost} />)}
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}
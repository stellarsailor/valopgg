import React from 'react'
import CredSVG from './CredSVG';
import { Link } from 'react-router-dom'

export default function WeaponRender(props){

    const { name, name_kr, cost, resize, selectedWeapon } = props; 

    const selectedBorder = {
        border: '1px solid #00ffae', 
        width: '100%', backgroundColor: '#182338', margin: '10px 0px', borderRadius: 0, padding: 10
    }

    const unselectedBorder = {
        border: '1px solid #182338', 
        width: '100%', backgroundColor: '#182338', margin: '10px 0px', borderRadius: 0, padding: 10
    }

    return (
        <Link to={`/weapon/${name.toLowerCase()}`} style={selectedWeapon === name ? {...selectedBorder} : {...unselectedBorder} } >
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: 20}}>
                { resize ? <img src={require(`../../images/weapons/${name.toLowerCase()}-model.png`)} style={{width: '40%', alignSelf: 'flex-start'}} /> : <img src={require(`../../images/weapons/${name.toLowerCase()}-model.png`)} style={{width: '70%', alignSelf: 'flex-start'}} />}
            </div>
            <div style={{fontSize: '0.8rem', marginLeft: 10, display: 'flex', alignItems: 'center'}}>
                <CredSVG />
                {cost}
            </div>
            <div style={{fontSize: '1rem', fontWeight: 'bold', marginLeft: 10}}>
                {name_kr}
            </div>
        </Link>
    )
}
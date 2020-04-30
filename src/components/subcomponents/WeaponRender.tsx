import React from 'react'
import CredSVG from './CredSVG';

export default function WeaponRender(props){

    const { name, name_kr, cost, resize } = props; 

    return (
        <div style={{width: '100%', backgroundColor: '#182338', border: '0px solid #00ffae', margin: '10px 0px', borderRadius: 0, padding: 10}}>
            <div style={{display: 'flex', justifyContent: 'center', paddingTop: 20}}>
                { resize ? <img src={require(`../../images/weapons/${name.toLowerCase()}-model.png`)} style={{width: '40%'}} /> : <img src={require(`../../images/weapons/${name.toLowerCase()}-model.png`)} style={{width: '70%'}} />}
            </div>
            <div style={{fontSize: '1rem', fontWeight: 'bold', marginLeft: 10}}>
                {name_kr}
            </div>
            <div style={{fontSize: '0.8rem', marginLeft: 10, display: 'flex', alignItems: 'center'}}>
                <CredSVG />
                {cost}
            </div>
        </div>
    )
}
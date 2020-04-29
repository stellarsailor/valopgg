import React from 'react'

export default function PageTitle (props: any) {
    return(
        <p style={{fontSize: '2em', color: 'white'}}>
            {props.title}
        </p>
    )
}
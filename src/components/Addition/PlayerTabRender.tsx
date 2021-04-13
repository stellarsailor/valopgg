import React, { useState } from 'react'
import styled from 'styled-components'

const ButtonPane = styled.div`
    /* background-color: rgb(24, 35, 56);  */
    /* display: flex;
    justify-content: center;
    align-items: center; */
    padding: 0.7rem 1.5rem;

    :hover{
        background-color: #273552; 
    }
`

export default function PlayerTabRender(props){

    const { tabName, tabNumber, activated } = props

    return (
        <ButtonPane style={ tabNumber === activated ? {backgroundColor: 'white', color: 'black'} : {} } >
            {tabName}
        </ButtonPane>
    )
}
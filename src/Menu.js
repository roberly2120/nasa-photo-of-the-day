import React from 'react';
import styled from 'styled-components';


const StyledMenu = styled.div`
color: white;
border-top: 1px solid white;
display: flex;
justify-content: space-around;

a {
    color: #FBFAF5;
    border: 1px solid white;
    border-radius: 5px;
    text-decoration: none;
    padding: 5px;
    margin-top: 10px;
}


`

export default function Menu () {
    return (
        <StyledMenu>
            <a href="#randomImages">Random Images</a>
            <a href="#photoByDate">Photo By Date</a>
        </StyledMenu>
    )
}
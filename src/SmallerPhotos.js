import react, { useState, useEffect } from 'react';
import axios from 'axios';
import App from './App';
import styled, { keyframes } from 'styled-components';

const kf = keyframes `
    25% {
        transform: rotateZ(2deg);
    }
    50% {
        transform: rotateZ(-2deg);
    }
`
const StyledPhotos = styled.div `
    img {
        
        border-radius: 5px;
        &:hover {
            transform: scale(1.05);
            animation: ${kf} 0.3s ease-in-out forwards;
            
        }
    }
    h3{
        color: ${props => props.theme.tertiaryColor};
    }
    
`
export default function SmallerPhotos(props) {

    // const [smallPhotosData, setSmallPhotosData] = useState([]);
    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive);
    };


    return (
       
        <StyledPhotos id="randomImages"className="smallPhotoContainer">
            <h3>{props.info.title}</h3>
            <img onClick={ToggleClass} className='smallPhoto' src={props.info.hdurl}></img>
            <p className={isActive ? "active" : "inActive"}>{props.info.explanation}</p>
        </StyledPhotos>
    )



}
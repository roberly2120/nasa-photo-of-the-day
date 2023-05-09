import react, { useState, useEffect } from 'react';
import axios from 'axios';
import App from './App';

export default function SmallerPhotos(props) {

    // const [smallPhotosData, setSmallPhotosData] = useState([]);
    const [isActive, setActive] = useState(false);
    const ToggleClass = () => {
        setActive(!isActive);
    };


    return (
       
        <div className="smallPhotoContainer">
            <h3>{props.info.title}</h3>
            <img onClick={ToggleClass} className='smallPhoto' src={props.info.hdurl}></img>
            <p className={isActive ? "active" : "inActive"}>{props.info.explanation}</p>
        </div>
    )



}
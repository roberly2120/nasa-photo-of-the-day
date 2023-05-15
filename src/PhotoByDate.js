import React, { useState, useEffect } from "react";
import App from "./App";
import axios from "axios";
import styled from 'styled-components';
import ReactDatePicker from "react-datepicker";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const StyledPhotoByDate = styled.div`

`


function GetPhotoByDate () {
   
        const date = document.querySelector(".date");
        console.log(date.value);
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=tZ4k7gr49eKqs5hGRgKIRDPcJ9C1DKfhSfhlIRMG&date=${date.value}`)
        .then(result => {
            console.log(result.data);
          return (result.data);
        }).catch(err => {
          console.error(err);
        })
      }









export default function PhotoByDate(props) {
    const [datePhotoData, setDatePhotoData] = useState([]);
    let photoData = [];
    const [startDate, setStartDate] = useState(new Date());
    
    if(setStartDate) {
        console.log(startDate);
    }


    useEffect(() => {
        if(startDate) {
        setDatePhotoData(GetPhotoByDate())
        console.log("that thing", datePhotoData);
        }
        
    }, [startDate])
  
    return(
        <StyledPhotoByDate id="photoByDate">
        <h1>Photo By Date</h1>
        <div>
        <DatePicker className="date" dateFormat="yyyy-MM-dd" selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <div className="imgContainer">
            {/* <img src={datePhotoData.hdurl}></img> */}
        </div>
        </StyledPhotoByDate>
    )
}

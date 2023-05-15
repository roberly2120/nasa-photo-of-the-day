import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import SmallerPhotos from "./SmallerPhotos";
import PhotoByDate from "./PhotoByDate";
import styled from 'styled-components'
import Menu from "./Menu";


function App() {
  const [nasaData, setNasaData] = useState([]);
  const [smallPhotosData, setSmallPhotosData] = useState([]);
  
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=tZ4k7gr49eKqs5hGRgKIRDPcJ9C1DKfhSfhlIRMG')
    .then(result => {
      // console.log(result);
      setNasaData(result.data)
    }).catch(err => {
      console.error(err);
    })
  }, [])

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=tZ4k7gr49eKqs5hGRgKIRDPcJ9C1DKfhSfhlIRMG&count=4')
    .then(result => {
      console.log(result);
      setSmallPhotosData(result.data)
      
    }).catch(err => {
      console.error(err);
    })
  }, [])


  const StyledApp = styled.div`
  background-color: ${props => props.theme.secondaryColor};
  .header {
    border-bottom: 1px solid-white;
  }
  .click {
    color: white;
  }
  h1 {
   
    color: ${props => props.theme.primaryColor}
  }
  h2 {
    font-size: 1.6rem;
    color: ${props => props.theme.primaryColor}
  }
  p {
    color: ${props => props.theme.tertiaryColor};
  }
  
  `

  return (
    <StyledApp className="App">
      <div className="header">
      <h1>Lost in Space: Nasa Photos of the Day</h1>
      <Menu/>
   
      
      </div>
      <div className="mainImgContainer">
        <h2>
          Title: {nasaData.title};
        </h2>
        <img className="mainImage"
          src={nasaData.hdurl}
          alt="nasa image of the day"
      />
        <p>
          {nasaData.explanation};
        </p>
      </div>
      <div>
        <h3 className="click">Click on a Photo for a Detailed Explanation!</h3>
      </div>

      <div className="smallerPhotos">
        {smallPhotosData.map((result, index) => {
          return <SmallerPhotos key={index} info={result}/>
        })}
        
      </div>
      <div className="photoByDate">
        <PhotoByDate />
      </div>
    </StyledApp>
 
  );
}

export default App;

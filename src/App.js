import React, {useState, useEffect} from "react";
import "./App.css";
import {BASE_URL, API_KEY } from '../src/constants/index'
import axios from 'axios'


import Photos from './Photo'

import styled from 'styled-components';

const StyledApp = styled.div`
display: flex;
justify-content: center;
text-align: center;
align-items: center;
flex-direction:column;

h1{
  color: yellow;
  background-image: url('https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fstartswithabang%2Ffiles%2F2016%2F09%2Fheic1617a.jpg');
}

div{
  background-color: black;
}
h2{
  color: white;
}
h4{
  color: white;
}

p{
  color: yellow;
  width: ;
  display: flex;
  justify-content: center;
  flex-direction: row;
}

`


export default function App() {
  const [data, setData] = useState({})
  



  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data)
      setData(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])



const header = 'NASA Photo of the Day!'

  
  return (
    <StyledApp className="App">
      <h1>{header}</h1>
      <Photos photo={data.url} title={data.title} date={data.date} explanation={data.explanation} copyright={data.copyright}/>
      {/* <Title title={data.title}/>
      <Date date={data.date}/> */}
    </StyledApp>
  );
}




// ________________JUNK_____________________________________
{/* <Photo photo={data.url}/>
      <Title title={data.title}/>
      <Date date={data.date}/> */}

// const [photo, setPhoto] = useState
import React, {useState, useEffect} from "react";
import "./App.css";
import {BASE_URL, API_KEY } from '../src/constants/index'
import axios from 'axios'

// import Header from './Header'
// import Credentials from './Credentials'
// import Title from './Title'
// import Date from './Date'
// import Photo from './Photo'


export default function App() {
  const [data, setData] = useState()
  // const [photo, setPhoto] = useState



  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      console.log(res.data)
      setData(res.data)
      console.log(setData)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  











  
  return (
    <div className="App">
      <di>
        <h1>NASA Photo of the Day</h1>
        {/* <img src= /> */}
      </di>
    </div>
  );
}



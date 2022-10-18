// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import { Routes, Route } from "react-router-dom";
import Listings from './components/Listings'
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  // const [listings, setListings] = useState([]);
  const [cats, setCats] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:9393/cats")
    .then((r) => r.json())
    .then((data) => {
      setCats(data);
    });
  }, []);

  return (
    <div classNam="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listings cats={cats}/>} />
      </Routes>
    </div>
  )

}

export default App;

// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Listings from './components/Listings'
import Home from './components/Home';
import Navigation from './components/Navigation';
import NewListing from './components/NewListing';

function App() {
  // const [listings, setListings] = useState([]);
  const [cats, setCats] = useState([]);
  // const [listings, setListings] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:9393/cats")
    .then((r) => r.json())
    .then((data) => {
      setCats(data);
    });
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:9393/listings")
  //   .then((r) => r.json())
  //   .then((listings) => {
  //     setListings(listings);
  //   });
  // }, []);

  // const addNewListing = (listing) => {
  //   setListings([...listings, listing])
  // }

  return (
    <div className="App">
      <Navigation className="Navigation" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/listings" 
          element={<Listings 
            cats={cats} 
          />} />
        <Route path="/listings/new" element={<NewListing cats={cats}/>} />
      </Routes>
    </div>
    // <Router>
    //   <Navigation />
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/listings" element={<Listings cats={cats}/>} />
    //     </Routes>
    //   </div>
    //   </Router>
  )

}

export default App;

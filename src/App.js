// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo from './images/logo-no-background.png'
import Listings from './components/Listings'
import Home from './components/Home';
import Navigation from './components/Navigation';
import NewListing from './components/NewListing';
import NewCategory from './components/NewCategory'

function App() {
  const [cats, setCats] = useState([]);
  const [listings, setListings] = useState([]);

  const styles = {
    main: {
      paddingTop: "100px",
      paddingBottom: "100px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignItems: "center",
      alignContent: "center"
    }
  }
  
  useEffect(() => {
    fetch("http://localhost:9393/cats")
    .then((r) => r.json())
    .then((data) => {
      setCats(data);
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:9393/listings")
    .then((r) => r.json())
    .then((listings) => {
      setListings(listings);
    });
  }, []);

  return (
    <div className="App">
      <img src={logo} alt="Logo" witdth="100" height="100" padding="100"/>
      <Navigation className="Navigation" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/listings" 
          element=
            {<Listings 
              cats={cats} 
              setCats={setCats}
              listings={listings} 
              setListings={setListings}
            />} 
        />
        <Route 
          path="/listings/new" 
          element=
            {<NewListing 
              cats={cats} 
              listings={listings} 
              setListings={setListings}
            />} 
        />
        <Route
          path="/cats/new"
          element=
          {<NewCategory
            cats={cats}
          />}
        />
      </Routes>
    </div>
  )
}

export default App;

  // <Router>
    //   <Navigation />
    //   <div className="App">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/listings" element={<Listings cats={cats}/>} />
    //     </Routes>
    //   </div>
    //   </Router>
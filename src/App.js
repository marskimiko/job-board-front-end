// import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
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

  // return <div>
  //   <Listings cats={cats} />
  // </div>

  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="listings">
          <Listings cats={cats}/>
        </Route>
      </Switch>
    </div>
  )

}

export default App;

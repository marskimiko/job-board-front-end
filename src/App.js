// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Listings from './components/Listings'

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

  return <div>
    <Listings cats={cats} />
  </div>

}

export default App;

// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [listings, setListings] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:9393/listings")
    .then((r) => r.json())
    .then((data) => {
      debugger;
      setListings(data);
    })
  })

  return (
    <div>
    </div>
  );
}

export default App;

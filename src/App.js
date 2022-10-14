// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import Listings from './components/Listings'

function App() {
  // const [listings, setListings] = useState([]);
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:9393/users")
    .then((r) => r.json())
    .then((data) => {
      setUsers(data);
    });
  }, []);

  return <div>
    <Listings users={users} />
  </div>

}

export default App;

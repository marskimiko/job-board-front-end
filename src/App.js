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
    {/* {
      listings.map(listing => {
        return <div>
          <h1>{listing.title}</h1>
          <p>{listing.body}</p>
        </div>
      })
    } */}
  </div>

}

export default App;

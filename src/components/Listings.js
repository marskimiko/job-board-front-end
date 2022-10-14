import React, { useEffect, useState} from "react";
import ListingList from "./ListingList";
import NewListing from "./NewListing";

function Listings({ users }) {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9393/listings")
    .then((r) => r.json())
    .then((data) => {
      setListings(data);
    });
  }, []);

  const addNewListing = (listing) => {
    setListings([...listings, listing])
  }

  return (
    <div>
      <ListingList 
        listings={listings}
      />
      <NewListing users={users} addNewListing={addNewListing}/>
    </div>
  )

  
}

export default Listings;
import React, { useEffect, useState} from "react";
import ListingList from "./ListingList";
import NewListing from "./NewListing";

function Listings({ cats }) {
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

  function handleUpdateListing(updatedListing) {
    const updatedListings = listings.map((listing) => {
      if (listing.id === updatedListing.id) {
        return updatedListing; 
      } else {
        return listing;
      }
    });
    setListings(updatedListings);
  }

  const deleteListing = (id) => {
    const updatedListings = listings.filter((listing) => listing.id != id);
    setListings(updatedListings);
  }

  return (
    <div>
      <ListingList 
        listings={listings}
        onUpdateListing={handleUpdateListing}
        deleteListing={deleteListing}
      />
      <NewListing cats={cats} addNewListing={addNewListing}/>
    </div>
  )

  
}

export default Listings;
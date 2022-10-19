import React, { useEffect, useState} from "react";
import ListingList from "./ListingList";
import Filter from "./Filter";

function Listings({ cats, setCats, listings, setListings }) {

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
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
  }

  return (
    <div>
      <Filter 
        cats={cats}
        setCats={setCats}
      />
      <ListingList 
        listings={listings}
        onUpdateListing={handleUpdateListing}
        deleteListing={deleteListing}
        cats={cats}
      />
    </div>
  )

  
}

export default Listings;
import React, { useEffect, useState} from "react";
import ListingList from "./ListingList";
import Filter from "./Filter";

function Listings({ cats, setCats, listings, setListings }) {
  const [filterBy, setFilterBy] = useState("")


  function onUpdateListing(updatedListing) {
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

  // const filteredListings = listings.filter(
  //   (listing) => listing.cat.job_type === filterBy
  // );

  const filteredListings = () => {
    listings.filter(
      (listing) => listing.cat.job_type === filterBy
    )
  }

  return (
    <div>
      <Filter 
        cats={cats}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      <ListingList 
        // listings={listings}
        listings={listings}
        onUpdateListing={onUpdateListing}
        deleteListing={deleteListing}
        cats={cats}
      />
    </div>
  )

  
}

export default Listings;
import React, { useEffect, useState} from "react";
import ListingList from "./ListingList";
import Filter from "./Filter";
import Listing from "./Listing";

function Listings({ cats, setCats, listings, setListings }) {
  const [filterBy, setFilterBy] = useState("")
  const [filteredListings, setFilteredListings] = useState(listings);


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


  useEffect(() => {
    let results = [];
    if (filterBy === 'none' || filterBy === '') {
      results = listings
    } else {
      results = listings.filter(
        (listing) => listing.cat.job_type === filterBy
      )
    }
    setFilteredListings(results)
  }, [filterBy, listings])


  return (
    <div>
      <Filter 
        cats={cats}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
      {/* <ListingList 
        listings={filteredListings}
        onUpdateListing={onUpdateListing}
        deleteListing={deleteListing}
      /> */}
      <h1>LISTINGS:</h1>
      {filteredListings.map((listing) => 
        <Listing
          key={listing.id}
          listing={listing}
          onUpdateListing={onUpdateListing}
          deleteListing={deleteListing}
        />
      )}
    </div>
  )

  
}

export default Listings;
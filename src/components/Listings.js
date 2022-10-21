import React, { useEffect, useState} from "react";
import Filter from "./Filter";
import Listing from "./Listing";
import NewCategory from './NewCategory'

function Listings({ cats, setCats, listings, setListings }) {
  const [filterBy, setFilterBy] = useState("")
  const [filteredListings, setFilteredListings] = useState(listings);

  const styles = {
    main: {
      paddingTop: "50px",
      paddingBottom: "50px",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      alignItems: "center",
      alignContent: "center"
    }
  }


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

  // needs to happen on the backend not front end
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
      <NewCategory cats={cats} />
      <div style={styles.main}>
      {filteredListings.map((listing) => 
        <Listing
          key={listing.id}
          listing={listing}
          onUpdateListing={onUpdateListing}
          deleteListing={deleteListing}
        />
      )}
      </div>
    </div>
  )

  
}

export default Listings;
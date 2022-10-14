import React from "react";
import Listing from "./Listing";

function ListingList( {listings, onUpdateListing, deleteListing} ) {
  return (
    <div>
      <h1>LISTINGS:</h1>
      {listings.map((listing) => 
        <Listing
          key={listing.listing_id}
          listing={listing}
          onUpdateListing={onUpdateListing}
          deleteListing={deleteListing}
        />
      )}
    </div>
  )
}

export default ListingList;
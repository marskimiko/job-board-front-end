import React from "react";
import Listing from "./Listing";

function ListingList( {listings, onUpdateListing} ) {
  return (
    <div>
      <h3>Listings:</h3>
      {listings.map((listing) => 
        <Listing
          key={listing.listing_id}
          listing={listing}
          onUpdateListing={onUpdateListing}
        />
      )}
    </div>
  )
}

export default ListingList;
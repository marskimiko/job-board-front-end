import React from "react";

function ListingList( {listings, onUpdateListing} ) {
  return (
    <div>
      <h3>Listings:</h3>
      {listings.map(listing => {
        return <div>
          <h1>{listing.title}</h1>
          <p>{listing.body}</p>
        </div>
      })

      }
    </div>
  )
}

export default ListingList;
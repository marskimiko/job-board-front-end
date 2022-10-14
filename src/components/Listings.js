import React, { useEffect, useState} from "react";

function Listings() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9393/listings")
    .then((r) => r.json())
    .then((data) => {
      setListings(data);
    });
  }, []);

  return (
    <div>Hello world</div>
  )

  
}

export default Listings;
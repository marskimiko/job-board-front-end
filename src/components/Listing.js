import React, { useState } from "react";
import EditListing from "./EditListing"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function Listing({ listing, onUpdateListing, deleteListing }) {
  const { id, title, body, cat_id } = listing;
  const [isEdit, setIsEdit] = useState(false);

  const handleUpdateListing = (updatedListing) => {
    setIsEdit(false);
    onUpdateListing(updatedListing);
  }

  const handleDelete = () => {
    deleteListing(id);
    fetch(`http://localhost:9393/listings/${id}`, {
      method: 'DELETE',
    });
  };

  console.log(listing.cat.job_type)

  return (
    <Card>
      <div>
      {isEdit ? (
        <EditListing
          listing={listing}
          handleUpdateListing={handleUpdateListing}
        />
      ) : (
        <li style={{ listStyleType: "none" }}>
          <p>
            <strong>{title}</strong>
            <p>{body}</p> 
            <p>Category: {listing.cat.job_type}</p>
            <Button 
              onClick={() => setIsEdit((isEdit) => !isEdit)} 
              class="btn btn-outline-dark"
              >Edit
            </Button>
            <Button onClick={handleDelete} class="btn btn-outline-dark">🗑</Button>
          </p>
        </li>
      )}
    </div>
    </Card>
  );

}

export default Listing;
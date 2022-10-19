import React, { useState } from "react";
import EditListing from "./EditListing"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function Listing({ listing, onUpdateListing, deleteListing }) {
  const { id, title, body } = listing;
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
          <div>
            <strong>{title}</strong>
            <p>{body}</p> 
            <p>Category: {listing.cat.job_type}</p>
            <Button 
              onClick={() => setIsEdit((isEdit) => !isEdit)}
              type="button" 
              variant="outline-dark"
              >Edit
            </Button>
            <Button onClick={handleDelete} variant="outline-dark">🗑</Button>
          </div>
        </li>
      )}
    </div>
    </Card>
  );

}

export default Listing;
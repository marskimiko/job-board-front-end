import React from "react";
import EditListing from "./EditListing"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import EditDonation from "./EditListing";

function Listing({ listing, onUpdateListing, deleteListing }) {
  const { id, title, body } = listing;

  const handleDelete = () => {
    deleteListing(id);
    fetch(`http://localhost:9393/listings/${id}`, {
      method: 'DELETE',
    });
  };

  return (
    <Card>
      <div>
        <h2>{title}</h2>
        <h3>{body}</h3>
          <Button>Edit</Button>
          <Button onClick={handleDelete}>🗑</Button>
      </div>
      <EditListing />
    </Card>
  )

}

export default Listing;
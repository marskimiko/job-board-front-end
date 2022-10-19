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
            title: {title} - body: {body} Category: {cat_id}
            <Button onClick={() => setIsEdit((isEdit) => !isEdit)}>
              Edit
            </Button>
            <Button onClick={handleDelete}>🗑</Button>
          </p>
        </li>
      )}
    </div>
    </Card>
  );

  // return (
  //   <Card>
  //     <div>
  //       <h2>{title}</h2>
  //       <h3>{body}</h3>
  //       <h3>{cat_id}</h3>
  //         <Button>Edit</Button>
  //         <Button onClick={handleDelete}>🗑</Button>
  //     </div>
  //     <EditListing
  //       listing={listing} 
  //       handleUpdateListing={handleUpdateListing}
  //     />
  //   </Card>
  // )

}

export default Listing;
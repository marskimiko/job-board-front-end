import React, { useEffect, useState } from "react";
import EditListing from "./EditListing"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function Listing({ listing, onUpdateListing, listings, setListings }) {

  const styles = {
    main: {
      // paddingTop: "100px",
      // paddingBottom: "100px",
      display: "flex",
      width: "18rem",
      // flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      alignContent: "center"
    }
  }

  const { id, title, body } = listing;
  const [isEdit, setIsEdit] = useState(false);

  const handleUpdateListing = (updatedListing) => {
    setIsEdit(false);
    onUpdateListing(updatedListing);
  }

  // const deleteListing = (id) => {
  //   const updatedListings = listings.filter((listing) => listing.id !== id);
  //   setListings(updatedListings);
  // }

  const handleDelete = () => {
    // deleteListing(id);
    fetch(`http://localhost:9393/listings/${id}`, {
      method: 'DELETE',
    });
    const updatedListings = listings.filter((listing) => listing.id !== id);
    setListings(updatedListings);
  };

  useEffect(() => {
  }, [listing])


  return (
    <Card className="card text-white bg-dark mb-3" style={styles.main}>
      <Card.Header as="h5">{title}</Card.Header>
      {isEdit ? (
        <EditListing
          listing={listing}
          handleUpdateListing={handleUpdateListing}
        />
      ) : (
          <Card.Body>
            <Card.Text>{body}</Card.Text>
            {listing.cat && listing.cat.job_type? <Card.Text>Category: {listing.cat.job_type}</Card.Text>:<Card.Text>Category: other</Card.Text>}
            <Button 
              onClick={() => setIsEdit((isEdit) => !isEdit)}
              type="button" 
              variant="outline-secondary"
              >Edit
            </Button>
            <Button onClick={handleDelete} variant="outline-secondary">🗑</Button>
          </Card.Body>

        // <li style={{ listStyleType: "none" }}>
        //   <div>
        //     <strong>{title}</strong>
        //     <p>{body}</p> 
        //     {listing.cat && listing.cat.job_type? <p>Category: {listing.cat.job_type}</p>:<p>Category: other</p>}
            // <Button 
            //   onClick={() => setIsEdit((isEdit) => !isEdit)}
            //   type="button" 
            //   variant="outline-dark"
            //   >Edit
            // </Button>
            // <Button onClick={handleDelete} variant="outline-dark">🗑</Button>
        //   </div>
        // </li>
      )}
    </Card>
  );

}

export default Listing;
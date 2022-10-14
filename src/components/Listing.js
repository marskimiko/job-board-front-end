import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';

function Listing({ listing, onUpdateListing }) {
  const { title, body } = listing;

  return (
    <Card>
      <div>
        <h2>{title}</h2>
        <h3>{body}</h3>
          <Button>💗</Button>
          <Button >🗑</Button>
      </div>
    </Card>
  )

}

export default Listing;
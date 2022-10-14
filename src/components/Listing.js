import React, { useState } from "react";
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Listing({ listing, onUpdateListing }) {
  const { title, body } = listing;

  return (
    <Card>
      <div>
        <div className="image">
          <img 
            src={image} 
            alt={name} 
            style={styles.img} 
          />
        </div>
        <h2  
          style={styles.center}
          >{name}
        </h2>
        <div className="content">
          <div 
            className="header" 
            style={styles.center}
            >{artist}
          </div>
        </div>
        <div className="extra content">
          <Button 
            onClick={handleLikeClick} 
            style={styles.likeButton}
            >💗 {likes}
          </Button>
          <Button 
            style={styles.trashButton}
            onClick={() => handleDelete(music.id)}
            >🗑
          </Button>
          <Link to={`/${id}/edit`}><button style={styles.trashButton}>EDIT</button></Link>
        </div>
      </div>
    </Card>
  )

}

export default Listing;
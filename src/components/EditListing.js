import React, { useState } from 'react';

function EditListing({ listing, handleUpdateListing}) {
  const { id, title, body, cat_id } = listing;

  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedBody, setUpdatedBody] = useState(body);

  function handleEditListing(e) {
    e.preventDefault();

    fetch(`http://localhost:9393/listings/${id}`, {
    method: "PATCH",
    headers: { 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: updatedTitle, body: updatedBody }),
   })
    .then ((response) => response.json())
    .then((updatedListing) => {
      handleEditListing(updatedListing)
    });
  }
  
  return (
    <form onSubmit={handleEditListing}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        name="title"
        value="updatedTitle"
        onChange={(e) => setUpdatedTitle(e.target.value)}
      />
      <label htmlFor="body ">Body:</label>
      <input
        id="body "
        type="text"
        name="body"
        value="updatedBody"
        onChange={(e) => setUpdatedBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditListing;
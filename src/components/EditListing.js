import React, { useState } from 'react';

function EditListing({ listing, handleUpdateListing}) {
  const { id, title, body, cat_id } = listing;

  // const defaultFormData = {
  //   title: title,
  //   body: body
  // }

  const [formData, setFormData] = useState({
    title: title,
    body: body
  });

  // const [formData, setFormData] = useState(defaultFormData)

  // const [updatedTitle, setUpdatedTitle] = useState(title);
  // const [updatedBody, setUpdatedBody] = useState(body);

  function handleEditListing(e) {
    e.preventDefault();

    fetch(`http://localhost:9393/listings/${id}`, {
    method: "PATCH",
    headers: { 
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
   })
    .then ((response) => response.json())
    .then((updatedListing) => {
      handleUpdateListing(updatedListing)
    });
  }

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  // function handleEditListing(e) {
  //   e.preventDefault();

  //   fetch(`http://localhost:9393/listings/${id}`, {
  //   method: "PATCH",
  //   headers: { 
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ title: updatedTitle, body: updatedBody }),
  //  })
  //   .then ((response) => response.json())
  //   .then((updatedListing) => {
  //     handleEditListing(updatedListing)
  //   });
  // }
  
  return (
    <form onSubmit={handleEditListing}>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <label htmlFor="body ">Body:</label>
      <input
        type="text"
        name="body"
        value={formData.body}
        onChange={handleChange}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditListing;
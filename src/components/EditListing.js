import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function EditListing({ listing, handleUpdateListing}) {
  const { id, title, body, cat_id } = listing;

  const [formData, setFormData] = useState({
    title: title,
    body: body,
    cat_id: cat_id
  });

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
  
  return (
    <Container>
    <Form onSubmit={handleEditListing}>
      <Form.Label htmlFor="title">Title:</Form.Label>
      <Form.Control
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <Form.Label htmlFor="body ">Body:</Form.Label>
      <Form.Control
        type="text"
        name="body"
        value={formData.body}
        onChange={handleChange}
      />
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
    </Container>
  );
}

export default EditListing;
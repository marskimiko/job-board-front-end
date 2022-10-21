import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function NewCategory({ cats }) { 
  const [jobType, setJobType] = useState("");
  
  const newCategory = { jobType }
  const navigate = useNavigate();

  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCategory),
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9393/cats/new", configObj)
      .then((r) => r.json())
      .then((cat) => {
        addNewCategory(cat);
        navigate("/listings");
      });
  };

  const addNewCategory = (cat) => {
    setJobType([...cats, cat])
  }


  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Add a new job category:</Form.Label>
            <Form.Control
            id="job-type" 
            type="text" 
            name="job-type" 
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            />
          <Button type="submit">Add</Button>
        </Form.Group>
    </Form>
    </>
  )
}

export default NewCategory
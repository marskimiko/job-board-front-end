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

  const addNewCategory = (cat) => {
    setJobType([...cats, cat])
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9393/cats/new", configObj)
      .then((r) => r.json())
      .then((listing) => {
        addNewCategory(listing);
        navigate("/listings");
      });
  };

  return (
    <div>
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
          <Button>Add</Button>
        </Form.Group>
    </Form>
    </div>
   
    // <form onSumit={handleSubmit}>
    //   <label htmlFor="jobtype">Job Type:</label>
    //   <input 
    //     id="jobtype"
    //     type="text"
    //     name="jobtype"
    //     value={jobType}
    //   />
    // </form>
  )
}

export default NewCategory
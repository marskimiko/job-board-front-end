import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
    <div>NewCategory</div>
  )
}

export default NewCategory
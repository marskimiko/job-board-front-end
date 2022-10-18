import React, { useState } from "react";

function NewListing({ cats, addNewListing }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [user, setUser] = useState("");
  const [cat, setCat] = useState("");

  const newList = {
    title,
    body,
    user,
    cat_id: cat,
    completed: false
  };

  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newList),
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:9393/listings", configObj)
      .then((r) => r.json())
      .then((listing) => {
        addNewListing(listing);
      });
  };

  return (
    <div>
      <h3>Create a new listing:</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        <label htmlFor="body">Body:</label>
          <input
            id="body"
            type="text"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        <label>
          Category:
          <select
            placeholder="Select a job category"
            onChange={(e) => setCat(e.target.value)}
          >
            <option value="none">Select a job category:</option>
            {cats.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.job_type}
              </option>
            ))}
          </select>
        </label>  
        <button type="submit">Create Listing</button>
      </form>
    </div>
  )

}

export default NewListing;
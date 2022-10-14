import React, { useState } from "react";

function NewListing({ users, addNewListing}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const newList = {
    title,
    body
  };

  const configObj = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newList),
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:9292/listings", configObj)
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
      </form>
    </div>
  )

}
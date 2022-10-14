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

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   fetch
  // }

}
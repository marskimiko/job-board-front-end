import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '1px',
  margin: '0 20px 50px',
  textDecoration: 'none',
  color: 'white',
  backgroundColor: 'black'
}

function Navigation() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={link}
      >Home</NavLink>

      <NavLink
        to="/listings"
        exact
        style={link}
      >Listings</NavLink>

      <NavLink
        to="/listings/new"
        exact
        style={link}
      >Create New Listing</NavLink>
      
      <NavLink
        to="/cats/new"
        exact
        style={link}
      >New Category</NavLink>
    </div>
  )
}
 
export default Navigation;
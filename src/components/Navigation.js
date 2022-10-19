import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  textDecoration: 'none',
  color: 'white',
  backgroundColor: 'blue'
}

function Navigation() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Home</NavLink>

      <NavLink
        to="/listings"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Listings</NavLink>

      <NavLink
        to="/listings/new"
        exact
        style={link}
        activeStyle={{
          background: 'darkblue'
        }}
      >Create New Listing</NavLink>
    </div>
  )
}
 
export default Navigation;
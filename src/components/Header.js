import React from 'react';
import { Link } from 'react-router-dom';

import GoogleAuth from './GoogleAuth';

import './Header.css'

const Header = () =>{
  return (
  <div className="ui secondary pointing menu">
    <Link to="/" className="item">
      <h1>Streamy</h1>
    </Link>
    <div className=" right menu">
      <Link to="/" className="item">
        <div className="bp">
          All Streams
        </div>
      </Link>
    </div>
    <div className="vp bp">
      <GoogleAuth />
    </div>
  </div>
  )
};

export default Header;

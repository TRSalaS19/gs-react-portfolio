import React from 'react';
import { Link } from "react-router-dom";

export default function() {
  return (
    <div>
      <h2>Something went wrong. Please try the link below to the home page. Thank You</h2>
      <hr/>
      <Link to="/">Return to HomePage</Link>
    </div>
  );
}
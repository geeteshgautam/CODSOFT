// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Job Board</h1>
      <Link to="/jobs">View Job Listings</Link>
    </div>
  );
};

export default HomePage;

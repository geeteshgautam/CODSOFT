// src/pages/CandidateDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CandidateDashboard = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const res = await axios.get('https://your-backend-url/api/applications', {
        headers: { 'x-auth-token': localStorage.getItem('token') }
      });
      setApplications(res.data);
    };
    fetchApplications();
  }, []);

  return (
    <div>
      <h1>Your Applications</h1>
      <ul>
        {applications.map(app => (
          <li key={app._id}>{app.jobTitle} - {app.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default CandidateDashboard;

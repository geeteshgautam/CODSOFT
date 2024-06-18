// src/pages/JobListingsPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const JobListingsPage = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.get('https://your-backend-url/api/jobs'); // Replace with your backend URL
      setJobs(res.data);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h1>Job Listings</h1>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>
            <Link to={`/job/${job._id}`}>{job.title}</Link> - {job.company}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListingsPage;

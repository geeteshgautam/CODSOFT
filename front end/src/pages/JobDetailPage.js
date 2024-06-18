// src/pages/JobDetailPage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const JobDetailPage = ({ match }) => {
  const [job, setJob] = useState({});

  useEffect(() => {
    const fetchJob = async () => {
      const res = await axios.get(`https://your-backend-url/api/jobs/${match.params.id}`); // Replace with your backend URL
      setJob(res.data);
    };
    fetchJob();
  }, [match.params.id]);

  return (
    <div>
      <h1>{job.title}</h1>
      <p>{job.description}</p>
      <p>{job.company}</p>
      <p>{job.location}</p>
    </div>
  );
};

export default JobDetailPage;

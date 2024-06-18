import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const registerUser = (userData) => {
  return axios.post(`${API_URL}/auth/register`, userData);
};

export const loginUser = (userData) => {
  return axios.post(`${API_URL}/auth/login`, userData);
};

export const getJobs = () => {
  return axios.get(`${API_URL}/jobs`);
};

export const getJobById = (id) => {
  return axios.get(`${API_URL}/jobs/${id}`);
};

export const postJob = (jobData, token) => {
  return axios.post(`${API_URL}/jobs`, jobData, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const applyForJob = (jobId, applicationData, token) => {
  return axios.post(`${API_URL}/jobs/${jobId}/apply`, applicationData, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

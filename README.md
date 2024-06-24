# College Student Job Board

This project is a job board application designed for college students to get on-the-job training and apprenticeships. Employers can post job openings, and job seekers can search and apply for jobs. The application is built using React, Node.js, and MongoDB.

## Features

1. **Home Page**: Welcome message and featured job listings.
2. **Job Listings Page**: List of job openings with essential details.
3. **Job Detail Page**: Detailed information about a specific job.
4. **Employer Dashboard**: Account management and job posting.
5. **Candidate Dashboard**: Profile management and job applications.
6. **Job Application Process**: Application form with resume upload.
7. **Search Functionality**: Search bar for finding specific jobs.
8. **Email Notifications**: Notifications for successful applications and updates.
9. **User Authentication and Security**: Secure user login and data protection.
10. **Mobile Responsiveness**: The website works well on different devices.

## Technologies Used

- Frontend: React
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Email Notifications: Nodemailer
- Deployment: Netlify

## Project Structure

```plaintext
job-board/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── utils/
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── app.js
│   ├── server.js
│   ├── config/
│   │   ├── db.js
│   ├── package.json

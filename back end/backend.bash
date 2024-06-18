mkdir job-board-backend
cd job-board-backend
npm init -y

npm install express mongoose dotenv bcryptjs jsonwebtoken multer nodemailer cors

mkdir config controllers models routes middleware utils
touch server.js .env

npm install

npm start

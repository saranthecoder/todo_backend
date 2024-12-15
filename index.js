import express from 'express';
import connectToMongoDB from './src/config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './src/routes/user.route.js';

dotenv.config();

connectToMongoDB();

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend domain
};
  
app.use(cors(corsOptions));
  

// Parse JSON request bodies
app.use(express.json());

// Use router for API routes
app.use('/api', router);

app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});

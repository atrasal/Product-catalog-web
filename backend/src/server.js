import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//middleware
app.use(express.json()); // to parse JSON request bodies
app.use(rateLimiter);
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next();
// })
app.use("/api/notes", notesRoutes);
connectDB().then(() => {
  app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
});


//mongodb+srv://rasalaaditya246_db_user:dUE3HJNGlKk8shF3@cluster0.abjcptu.mongodb.net/?appName=Cluster0
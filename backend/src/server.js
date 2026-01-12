import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
connectDB();

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

//mongodb+srv://rasalaaditya246_db_user:dUE3HJNGlKk8shF3@cluster0.abjcptu.mongodb.net/?appName=Cluster0
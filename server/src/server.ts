import dotenv from 'dotenv';
import express from 'express';
// import { fileURLToPath } from 'node:url';
// import path from 'node:path';

dotenv.config();
// Import the routes
import routes from './routes/index.js';
const app = express();
const PORT = process.env.PORT || 3001;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// Serve static files from the 'dist' folder
app.use(express.static('../client/dist'));
// Middleware to parse JSON payloads
app.use(express.json());
// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));
// Connect routes
app.use(routes);
// Start the server on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
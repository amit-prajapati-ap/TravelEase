import express from 'express';
import { authenticate } from '../middleware/auth.middleware.js';
import { deleteDest, getAllDest, getDest, newDest, updateDest } from '../controllers/destination.controller.js';
import {upload} from '../middleware/multer.middleware.js';

const destinationRouter = express.Router();

// Get all dezinations for authenticated user
destinationRouter.get('/get-all-dest', getAllDest);

// Get dezination statistics
destinationRouter.get('/get-dest/:id', getDest);

// Create new dezination
destinationRouter.post('/add-dest', upload.fields([{ name: 'thumbnail', maxCount: 1 }]), authenticate, newDest);

// Update dezination
destinationRouter.put('/update-dest/:id', authenticate, updateDest);

// Delete dezination
destinationRouter.delete('/delete-dest/:id', authenticate, deleteDest);

export {destinationRouter};
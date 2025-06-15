import express from 'express';
import { authenticate } from '../middleware/auth.middleware.js';
import { getAllPack, getPack, newPack, updatePack, deletePack } from '../controllers/packages.controller.js';
import {upload} from '../middleware/multer.middleware.js';

const packagesRouter = express.Router();

// Get all packages for authenticated user
packagesRouter.get('/get-all-pack', getAllPack);

// Get package statistics
packagesRouter.get('/get-pack/:id', getPack);

// Create new package
packagesRouter.post('/add-pack', upload.fields([{ name: 'thumbnail', maxCount: 1 }]), authenticate, newPack);

// Update package
packagesRouter.put('/update-pack/:id', authenticate, updatePack);

// Delete package
packagesRouter.delete('/delete-pack/:id', authenticate, deletePack);

export {packagesRouter};
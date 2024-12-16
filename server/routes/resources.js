import express from 'express';
import Resource from '../models/Resource.js';
import { auth } from '../middleware/auth.js';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/resources')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

// Get all resources
router.get('/', auth, async (req, res) => {
  try {
    const resources = await Resource.find()
      .sort({ createdAt: -1 });
    res.send(resources);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get resource by ID
router.get('/:id', auth, async (req, res) => {
  try {
    const resource = await Resource.findById(req.params.id);
    if (!resource) {
      return res.status(404).send();
    }
    res.send(resource);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Add resource (admin only)
router.post('/', auth, upload.single('file'), async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).send({ error: 'Not authorized' });
    }
    
    const resource = new Resource({
      ...req.body,
      url: req.file ? `/uploads/resources/${req.file.filename}` : req.body.url
    });
    
    await resource.save();
    res.status(201).send(resource);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Update resource
router.put('/:id', auth, upload.single('file'), async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).send({ error: 'Not authorized' });
    }

    const updates = {
      ...req.body,
      ...(req.file && { url: `/uploads/resources/${req.file.filename}` })
    };

    const resource = await Resource.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true }
    );

    if (!resource) {
      return res.status(404).send();
    }

    res.send(resource);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete resource
router.delete('/:id', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).send({ error: 'Not authorized' });
    }

    const resource = await Resource.findByIdAndDelete(req.params.id);
    if (!resource) {
      return res.status(404).send();
    }

    res.send(resource);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
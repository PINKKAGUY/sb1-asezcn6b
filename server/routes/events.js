import express from 'express';
import Event from '../models/Event.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

// Get all events
router.get('/', auth, async (req, res) => {
  try {
    const events = await Event.find()
      .populate('instructor', 'name')
      .sort({ date: 1 });
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Create event (admin only)
router.post('/', auth, async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).send({ error: 'Not authorized' });
    }
    const event = new Event({
      ...req.body,
      instructor: req.user._id,
    });
    await event.save();
    res.status(201).send(event);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Register for event
router.post('/:id/register', auth, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).send();
    }
    if (event.participants.includes(req.user._id)) {
      return res.status(400).send({ error: 'Already registered' });
    }
    if (event.participants.length >= event.maxSpots) {
      return res.status(400).send({ error: 'Event is full' });
    }
    event.participants.push(req.user._id);
    await event.save();
    res.send(event);
  } catch (error) {
    res.status(400).send(error);
  }
});

export default router;
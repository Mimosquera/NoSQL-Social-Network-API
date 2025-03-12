import express from 'express';
import { getThoughts, getThoughtById, createThought, updateThought, deleteThought } from '../../controllers/thoughtController.js';

const router = express.Router();

console.log("✅ thoughtRoutes.js is loaded");

router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

export default router;
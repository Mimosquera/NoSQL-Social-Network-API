import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../../controllers/userController.js';

const router = express.Router();

console.log("✅ userRoutes.js is loaded");

// Debugging middleware
router.use((req, res, next) => {
  console.log(`➡️ Request received at /api/users: ${req.method}`);
  next();
});

// TEMPORARY TEST ROUTE
router.get('/test', (req, res) => {
  console.log("✅ Test route reached");
  res.json({ message: "Test route works!" });
});

// Actual API routes
router.route('/').get(getUsers).post(createUser);
router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

export default router;
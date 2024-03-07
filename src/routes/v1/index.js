import express from 'express';
import { authenticate } from '../../middlewares/authenticate.js';
import { signup, login , getuserdetail } from '../../controllers/auth-controller.js';

const router = express.Router();
router.post('/signup', signup);
router.post('/login', login);
router.get('/:id', getuserdetail);
export default router;
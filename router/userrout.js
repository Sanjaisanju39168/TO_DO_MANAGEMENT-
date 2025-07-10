import exp from 'express';
import { register, login } from '../controller/usercontroller.js';

const router = exp.Router();

router.post('/register', register);
router.post('/login', login);

export default router;

import express from 'express';
import { addStaff, findStaff, removeStaff } from "../network/controllers/staff_controller.js";
const router = express.Router();

router.get('/', findStaff);
router.delete('/:staffId', removeStaff);
router.post('/add', addStaff);

export default router;
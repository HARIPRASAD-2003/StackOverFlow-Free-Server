import express from 'express'
import { postComment, deleteComment, reportComment } from "../controllers/Comments.js"
import auth from '../middlewares/auth.js';

const router = express.Router();
// console.log("router")
router.patch('/post/:id', auth, postComment)
router.patch('/delete/:id', auth, deleteComment)
router.patch('/report/:id', auth, reportComment)

export default router
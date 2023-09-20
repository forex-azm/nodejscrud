import express from "express"
const router = express.Router()
import { getAllUsers, createUserPost, createUserGet, deleteUser, getAll , editUserGet, editUserPost} from "../controller/adminController.js"

router.get('/get', getAllUsers)
router.get('/', getAll)
router.post('/create', createUserPost)
router.get('/create', createUserGet)
router.get('/edit/:id', editUserGet)
router.post('/edit/:id', editUserPost)
router.post('/delete/:id', deleteUser)

export default router


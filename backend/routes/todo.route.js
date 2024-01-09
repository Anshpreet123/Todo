import { Router } from "express";
import { addTodo , showTodo } from "../controllers/todo.controller.js";

const router = Router();
// router when addTodo hits addTodo controller get invoked
router.post("/addTodo" , addTodo);
router.get("/showTodo" , showTodo);


export default router;
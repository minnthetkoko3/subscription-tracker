import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send({title: "get all user"}));
userRouter.get("/:id", (req, res) => res.send({title: "get user by id"}));
userRouter.post("/post", (req, res) => res.send({title: "create new user"}));
userRouter.put("/:id", (req, res) => res.send({title: "update user"}));
userRouter.delete("/:id", (req, res) => res.send({title: "Delete user"}));

export default userRouter;
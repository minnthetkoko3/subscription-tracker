import express from "express";
import { PORT, NODE_ENV } from "./config/env.js";

import authRouter from "./router/auth.router.js";
import userRouter from "./router/user.router.js";
import subscriptionRouter from "./router/subscription.router.js";
import connectDB from "./database/mongodb.js";

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscription', subscriptionRouter)

app.get("/", (req, res) => {
    res.end(`Welcome to my subscription app on ${NODE_ENV}`);
});

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`  );
    connectDB();
});


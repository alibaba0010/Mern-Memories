import express, { json } from "express";
import "express-async-errors";
import postRouter from "./routes/post.router.js";
import cors from "cors";
import userRouter from "./routes/user.router.js";

const app = express();
app
  .use(cors())
  .use(json())
  .use("/api/v1/posts", postRouter)
  .use("/api/v1/user", userRouter);

export default app;

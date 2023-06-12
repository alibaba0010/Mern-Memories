import express, { json } from "express";
import "express-async-errors";
import postRouter from "./routes/post.router.js";
import cors from "cors"
import userRouter from "./routes/user.router.js";

// import { errorHandler } from "./errors/error.js";

// import { routeError } from "./errors/route.error.js";

const app = express();
app
  .use(cors())
  .use(json())
  .use("/api/v1/posts", postRouter)
  .use("/api/v1/user", userRouter);

//   .use(routeError)
//   .use(errorHandler);

export default app;

// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://pinvent-app.vercel.app"],
//     credentials: true,
//   })
// );

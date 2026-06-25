import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Route imports
import userRouter from "./routes/user.routes.js";
import stockRouter from "./routes/stock.routes.js";
import portfolioRouter from "./routes/portfolio.routes.js";
import transactionRouter from "./routes/transaction.routes.js";
import watchlistRouter from "./routes/watchlist.routes.js";

// Mount routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/stocks", stockRouter);
app.use("/api/v1/portfolio", portfolioRouter);
app.use("/api/v1/transactions", transactionRouter);
app.use("/api/v1/watchlist", watchlistRouter);

// Global Error Handler
import { errorHandler } from "./middlewares/error.middleware.js";
app.use(errorHandler);

export { app };

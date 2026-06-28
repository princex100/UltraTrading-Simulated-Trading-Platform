import { Router } from "express";
import { addStockToWatchlist } from "../controllers/watchlist.controller.js";

const router = Router();

// TODO: Define watchlist routes (e.g., /, /add, /remove)
// router.route("/").get(getUserWatchlist)

router.post("/add", addStockToWatchlist);

export default router;
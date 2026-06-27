import { Router } from "express";
import { getAllStocks } from "../controllers/stock.controller.js";

const router = Router();


router.get("/",getAllStocks)
// TODO: Define stock routes (e.g., /, /:symbol, /search)
// router.route("/").get(getAllStocks)
// router.route("/:symbol").get(getStockBySymbol)

export default router;

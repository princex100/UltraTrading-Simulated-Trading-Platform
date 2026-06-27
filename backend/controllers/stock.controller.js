// TODO: Implement get all stocks
// TODO: Implement get stock details by symbol
// TODO: Implement search stocks
import { Stock } from "../models/Stock.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";


export const getAllStocks = async (req, res) => {

    try {

        const stocks = await Stock.find();


        res.status(200).json(
            new ApiResponse(200, stocks, "Stocks fetched successfully")
        );

    } catch (error) {

        throw new ApiError(500, "Error fetching stocks");

    }

};

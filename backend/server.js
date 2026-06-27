import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { app, server } from "./app.js";
import { startStockSimulator } from "./services/stockSimulator.js";

dotenv.config({
    path: './.env'
});

const PORT = process.env.PORT || 5000;

connectDB()
.then(() => {

    
    server.listen(PORT, () => {
        console.log(`⚙️ Server is running at port : ${PORT}`);
    });
    
    
    startStockSimulator();  
    
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
});

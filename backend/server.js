import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { app } from "./app.js";
import { startStockSimulator } from "./services/stockSimulator.js";

dotenv.config({
    path: './.env'
});

const PORT = process.env.PORT || 5000;

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`⚙️ Server is running at port : ${PORT}`);
    });
    
    // Start background services
    // always alive once called
    //changes prices live after every 10 seconds
    startStockSimulator();  
    
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
});

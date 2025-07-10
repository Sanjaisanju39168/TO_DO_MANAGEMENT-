import exp from "express";
import { appConfig } from "./config/config.js";
import mon from "mongoose";
import authRoutes from './router/userrout.js';
import todoRoutes from './router/todorouter.js';
import cors from "cors";

const app=exp();
app.use(exp.json());
app.use("/auth",authRoutes);
app.use("/task",todoRoutes);
 const connectToDb= async ()=>
{
try{
   await mon.connect(appConfig.mongo_url);
     console.log("Mongo Db connection Successfull")
    }
    catch(err)
    {
    console.log(err)
    }
}
const port=5000
app.listen(port,()=>
    {
console.log("Server Star at Port: ",port)
connectToDb();
    }
)

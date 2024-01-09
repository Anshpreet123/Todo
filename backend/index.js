import dotenv from "dotenv"
import { connectDb } from "./db/database.js"
import { app } from "./app.js";

// dotenv configuration
dotenv.config({
    path:".env"
})
   const port  = `${process.env.PORT}` || 8000;
// database connection
connectDb()
.then(()=>{
    console.log("mongodb connected success");
app.listen(port , (req , res)=>{
    console.log(`App is listening on port :${port}`); 
})

})
.catch((err)=>{ 
    console.log(err);
    
})

// routers import 
import todoRouter from "./routes/todo.route.js"

app.use("/todo" , todoRouter)
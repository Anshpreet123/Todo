import mongoose from "mongoose";
import {DB_NAME} from "../constant.js"

const connectDb = async ()=>{
    try {
        const connectionInstance  =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`) ;
        console.log(`database is connected successfully !! ${connectionInstance.connection} `)
    } catch (error) {
        console.log(`Mongo Db connection error :${error}`);
    }
}

export {connectDb};
// src/services/db.ts
import mongoose, { Mongoose } from 'mongoose';//es un odn
import { config } from 'dotenv';

export default async function connectDB(){
  if(mongoose.connection.readyState >= 1) return; 
  try {
    const dbURI = process.env.DB_CONNECT as string // tambien se puede usar el signo de exclamacion para que este definido siempre, de esta manera se lo hacemos saber a typescript
    await mongoose.connect(dbURI);
    console.log('Database connected');
  } catch (error) {
    console.error("Error connecting to the database");
  }
}

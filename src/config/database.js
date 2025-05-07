import dotenv from 'dotenv'
import pg from 'pg'
const { Pool } = pg
dotenv.config()
console.log("DEBUG -> DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DEBUG -> Tipo:", typeof process.env.DB_PASSWORD);
const client = new Pool({
  user: process.env.DB_USER ,
  host: process.env.DB_HOST,     
  password: process.env.DB_PASSWORD ,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME 
})

export default client
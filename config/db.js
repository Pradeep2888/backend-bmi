const mongoose=require("mongoose")
require("dotenv").config()

const connection=process.env.MONGO_URL

module.exports={connection}
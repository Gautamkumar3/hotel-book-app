const mongoose = require("mongoose")


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database connected")
    } catch (er) {
        console.log({error: er.message})
    }
}

module.exports=connectDb;
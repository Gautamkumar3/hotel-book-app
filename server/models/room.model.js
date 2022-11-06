const mongoose = require("mongoose")

const roomSchema = new mongoose.Schema({
    name: {
        type: String, required: [true, "Room name is required"], maxlength: [100, "Room name must be less than 100 charactor"]
    },
    pricePerNight: {
        type: Number, required: [true, "Room price is requlired"], default: 0.0
    },
    address: { type: String, required: [true, "Address is required"] },
    description: { type: String, required: [true, "Room Desc is required"] },
    guestCapicity: { type: Number, required: [true, "Room guest number is required"] },
    numOfBeds: { type: Number, required: [true, "Room's bed number is required"] },
    internet: { type: Boolean, default: false },
    reviews: [{
        user: { type: mongoose.Schema.ObjectId, ref: "user"},
        name: {
            type: String,
            // required: true
        },
        rating: {
            type: String,
            // required: true
        },
        comment: {
            type: String,
            // required: true
        },
    }],
    user: { type: mongoose.Schema.ObjectId, ref: "user" },
}, {
    timestamps: true
})


module.exports = mongoose.models.room || mongoose.model("room", roomSchema)
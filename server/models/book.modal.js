import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    featured: { type: Boolean }
})

const Book =mongoose.models.book || mongoose.model("book", bookSchema)
export default Book;
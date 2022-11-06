import bookModal from "../models/book.modal";


const getAllBooks = async (req, res) => {
    try {
        let books = await bookModal.find();
        return res.status(200).send({ count: books.length, books })
    } catch (er) {
        return res.status(404).json({ msg: er.message })
    }
}


const addBooks = async (req, res) => {
    try {
        let books = await bookModal.create(req.body)
        console.log(books)
        return res.status(200).send(books)
    } catch (er) {
        return res.status(404).json({ msg: er.message })
    }
}

const getSingleBook = async (req, res) => {
    try {
        let books = await bookModal.findById(req.query.id);

        if (books) {
            return res.status(200).send(books)
        } else {
            return res.status(404).send({ error: "Something went wrong" })
        }

    } catch (er) {
        return res.status(404).send({ msg: er.message })
    }
}


const updateBook = async (req, res) => {
    const { id } = req.query
    try {

        let books = await bookModal.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).send(books)
    } catch (er) {
        return res.status(404).json({ msg: er.message })
    }
}
const deleteBook = async (req, res) => {
    const { id } = req.query
    console.log(id)
    try {
        let books = await bookModal.findByIdAndDelete(id)
        res.status(200).send("Book deleted succesfully.")
    } catch (er) {
        return res.status(404).json({ msg: er.message })
    }
}

export { getAllBooks, addBooks, updateBook, getSingleBook, deleteBook }
import axios from "axios"

export const AllBooks = async () => {
    try {
        const res = await axios.get("http://localhost:3000/api/books");
        const data = await res.data?.books
        return data;
    } catch (er) {
        return { msg: er.message }
    }
}

export const getFeaturedBooks = async () => {
    const books = await AllBooks();
  console.log(books)
    if (books) {
        const featuredBooks = books.filter((book) => book.featured === true)
        return featuredBooks
    } else {
        return "no featured book found"
    }
}
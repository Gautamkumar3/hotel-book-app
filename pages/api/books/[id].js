import connectDb from "../../../server/config/config"
import nc from "next-connect"
import { deleteBook, getSingleBook, updateBook } from "../../../server/controllers/bookControlers";

const app = nc();
connectDb()

app.put(updateBook)


app.get(getSingleBook)

app.delete(deleteBook)


export default app;
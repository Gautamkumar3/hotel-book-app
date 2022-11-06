import nc from "next-connect"
import connectDb from "../../../server/config/config"
import { addBooks, getAllBooks } from "../../../server/controllers/bookControlers";


const app = nc();
connectDb()

app.get(getAllBooks)

app.post(addBooks)


export default app;
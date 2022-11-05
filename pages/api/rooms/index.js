import nc from "next-connect";
import connectDb from "../../../server/config/config";
import { allRooms, createRoom } from "../../../server/controllers/roomControlers";

const app = nc();
connectDb()

app.get(allRooms)

app.post(createRoom)

export default app;
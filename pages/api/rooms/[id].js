import nc from "next-connect";
import connectDb from "../../../server/config/config";
import { deleteRoom, getSingleRoom, updateRoom } from "../../../server/controllers/roomControlers";

const app = nc();
connectDb()

// get single room 
app.get(getSingleRoom)

// update room 
app.put(updateRoom)

// delete room
app.delete(deleteRoom)

export default app;
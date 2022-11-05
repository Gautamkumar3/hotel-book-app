import nc from "next-connect";
import connectDb from "../../../server/config/config";
import { getSingleRoom, updateRoom } from "../../../server/controllers/roomControlers";

const app = nc();
connectDb()

// get single room 
app.get(getSingleRoom)

// update room 
app.put(updateRoom)

export default app;
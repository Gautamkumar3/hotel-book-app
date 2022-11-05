import roomModal from "../models/room.model"

const allRooms = async (req, res) => {
    try {
        const allRooms = await roomModal.find();
        res.status(200).send({ success: true, count: allRooms.length, allRooms })
    } catch (er) {
        res.status(401).send({ msg: er.message })
    }

}

const createRoom = async (req, res) => {
    try {
        const room = await roomModal.create(req.body);
        res.status(200).send({ success: true, room })
    } catch (er) {
        res.status(401).send({ msg: er.message })
    }
}

const getSingleRoom = async (req, res) => {
    try {
        const room = await roomModal.findById(req.query.id);
        if (!room) {
            res.status(401).json({ success: false, msg: "Room not found" })
        }
        res.status(200).send({ success: true, room })
    } catch (er) {
        res.status(401).send({ msg: er.message })
    }
}

const updateRoom = async (req, res) => {
    try {
        let room = await roomModal.findById(req.query.id);
        if (!room) {
            res.status(401).json({ success: false, msg: "Room not found" })
        }
        room = await roomModal.findByIdAndUpdate(req.query.id, req.body, { new: true })
        res.status(200).send({ success: true, room })
    } catch (er) {
        res.status(401).send({ msg: er.message })
    }
}

export { allRooms, createRoom, getSingleRoom, updateRoom }
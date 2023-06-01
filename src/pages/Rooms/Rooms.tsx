import Typography from "@mui/material/Typography";

import DataTable from "../../components/DataTable";

import RoomType from "../../types/RoomType";

import { format_rooms_for_datatable } from "../../utils/utils";

import "../../styles.css";
import CreateRoomModal from "./CreateRoomModal";

function Rooms() {
    const dummy_room: RoomType = {
        name: "Maquis I",
        capacity: 10,
        isOccupied: true,
        location: "Neverland",
        createdBy: "William Blake",
        createdAt: new Date(),
        updatedAt: new Date(),
    };

    const rooms = [dummy_room];

    return (
        <div className="page">
            <Typography variant="h4">Rooms</Typography>

            <CreateRoomModal />

            <DataTable data={ format_rooms_for_datatable(rooms) }/>
        </div>
    );
} export default Rooms;

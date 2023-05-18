import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";

interface Room {
    name: string;
    capacity: number;
    isOccupied: boolean;
    location: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
}

function Rooms() {
    const dummy_room: Room = {
        name: "Maquis I",
        capacity: 10,
        isOccupied: true,
        location: "Neverland",
        createdBy: "William Blake",
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    const [ rooms, setRooms ] = useState([dummy_room]);
    const [ add_room_popup, toggle_add_room_popup ] = useState(true);

    return (
        <Paper className="page">
            <Typography variant="h4">Rooms</Typography>

            <TableContainer component={Paper}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Capacity</TableCell>
                            <TableCell>Occupied</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rooms.map((room: Room, key: number) => {
                            return (<TableRow
                                key={key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">{room.name}</TableCell>
                                <TableCell align="right">{room.capacity}</TableCell>
                                <TableCell align="right">{(room.isOccupied) ? "Yes" : "No"}</TableCell>
                            </TableRow>);
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
} export default Rooms;
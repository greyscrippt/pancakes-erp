import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import TextField from "@mui/material/TextField";

import "../styles.css";

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
    const [ rooms, set_rooms ]                          = useState([dummy_room]);
    const [ add_room_popup, toggle_add_room_popup ]     = useState(false);

    const handle_add_room_popup_open    = () => toggle_add_room_popup( () => true  );
    const handle_add_room_popup_cancel  = () => toggle_add_room_popup( () => false );

    const handle_add_room_popup_submit  = () => {
        set_rooms( (prev_rooms: any) => ([...prev_rooms, dummy_room]));
        toggle_add_room_popup( () => false );
    };
    
    return (
        <Paper className="page">
            <Typography variant="h4">Rooms</Typography>

            <Button
                variant="contained"
                onClick={handle_add_room_popup_open}
                >
                Add
            </Button>

            <Modal
                open={add_room_popup}
                >
                <Box className="creator-modal-box">
                    <FormControl>
                        <Typography
                          variant="h6"
                          className="creator-modal-input"
                          >
                          Create new room
                        </Typography>
                        
                        <TextField
                          required
                          type="text"
                          color='primary'
                          label="Name"
                          className="creator-modal-input"
                          />
                        
                        <TextField
                          required
                          type="number"
                          color='primary'
                          label="Capacity"
                          className="creator-modal-input"
                          />
                        
                        <Button
                          className="creator-modal-input"
                          color="primary"
                          variant="contained"
                          onClick={handle_add_room_popup_submit}
                          >
                          Create
                        </Button>
                        
                        <Button
                          className="creator-modal-input"
                          color="secondary"
                          variant="contained"
                          onClick={handle_add_room_popup_cancel}
                          >
                          Cancel
                        </Button>
                    </FormControl>
                </Box>
            </Modal>

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

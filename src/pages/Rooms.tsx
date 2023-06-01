import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import { useState } from "react";
import TextField from "@mui/material/TextField";

import "../styles.css";
import DataTable from "../components/DataTable";

interface Room {
    name: string;
    capacity: number;
    isOccupied: boolean;
    location: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
}

function format_data_for_datatable(rooms: Array<Room>) {
  return {
    headers: ["Name", "Capacity", "Is Occupied", "Location"],
    body: rooms.map((room: Room) => [room.name, room.capacity, room.isOccupied, room.location]),
  }
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

    const handle_add_room_popup_submit  = () => {
        set_rooms( (prev_rooms: any) => ([...prev_rooms, dummy_room]));
        toggle_add_room_popup( () => false );
    };
    
    return (
        <Paper className="page">
            <Typography variant="h4">Rooms</Typography>

            <Button
                variant="contained"
                onClick={() => toggle_add_room_popup((prev_val: boolean) => !prev_val)}
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
                          onClick={() => toggle_add_room_popup(() => false)}
                          >
                          Cancel
                        </Button>
                    </FormControl>
                </Box>
            </Modal>
            
            <DataTable data={ format_data_for_datatable(rooms) }/>
        </Paper>
    );
} export default Rooms;

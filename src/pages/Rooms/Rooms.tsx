import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { useState } from "react";

import DataTable from "../../components/DataTable";

import RoomType from "../../types/RoomType";

import { format_rooms_for_datatable } from "../../utils/utils";

import "../../styles.css";

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

    const [ rooms, set_rooms ]                  = useState([dummy_room]);
    const [ addRoomIsOpen, setAddRoomIsOpen ]   = useState(false);

    const handle_add_room_popup_submit  = () => {
        set_rooms( (prev_rooms) => ([...prev_rooms, dummy_room]));
        setAddRoomIsOpen( () => false );
    };

    return (
        <div className="page">
            <Typography variant="h4">Rooms</Typography>

            <Button
                variant="contained"
                onClick={() => setAddRoomIsOpen((prev_val: boolean) => !prev_val)}
            >
                Add
            </Button>

            <Modal
                open={addRoomIsOpen}
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
                            onClick={() => setAddRoomIsOpen(() => false)}
                        >
                          Cancel
                        </Button>
                    </FormControl>
                </Box>
            </Modal>

            <DataTable data={ format_rooms_for_datatable(rooms) }/>
        </div>
    );
} export default Rooms;

import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";

import { useState } from "react";

export default function CreateRoomModal() {
    const [ addRoomIsOpen, setAddRoomIsOpen ]   = useState(false);

    const handle_add_room_popup_submit  = () => {
        setAddRoomIsOpen( () => false );
    };

    return(
        <div>
            <Button
                variant="contained"
                onClick={() => setAddRoomIsOpen((prev_val: boolean) => !prev_val)}
            >
                Add
            </Button>

            <Modal open={addRoomIsOpen}>
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
        </div>
    );
}

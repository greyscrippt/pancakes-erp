import UserType from "../../types/UserType";

import "../../styles.css";
import { Typography } from "@mui/material";
import DataTable from "../../components/DataTable";

function format_data_for_datatable(rooms: Array<UserType>) {
    return {
        headers: ["Name"],
        body: rooms.map((room: UserType) => [room.username]),
    }
}

export default function Users() {
    const mock_user: UserType = { username: "Vlad Floid" };
    const mock_users: Array<UserType> = [ mock_user ];

    return(
        <div className="page">
            <Typography variant="h4">User manager</Typography>

            <DataTable data={format_data_for_datatable(mock_users)} />
        </div>
    );
}

import UserType from "../../types/UserType";

import "../../styles.css";

function format_data_for_datatable(rooms: Array<UserType>) {
    return {
        headers: ["Name"],
        body: rooms.map((room: UserType) => [room.username]),
    }
}

export default function Users() {
    return(
        <div className="page">
      Hello, users
        </div>
    );
}

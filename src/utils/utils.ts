import RoomType from "../types/RoomType";

export function format_rooms_for_datatable(rooms: Array<RoomType>) {
    return {
        headers: ["Name", "Capacity", "Occupied", "Location"],
        body: rooms.map((room: RoomType) => [room.name, room.capacity, (room.isOccupied) ? "Yes" : "No", room.location]),
    }
}

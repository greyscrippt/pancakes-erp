export default interface RoomType {
    name: string;
    capacity: number;
    isOccupied: boolean;
    location: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
}

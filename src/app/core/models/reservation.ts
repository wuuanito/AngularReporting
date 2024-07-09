// reservation.model.ts
export interface Reservation {
    id: number;
    roomId: number;
    date: Date;
    startTime: string;
    endTime: string;
    title: string;
  }
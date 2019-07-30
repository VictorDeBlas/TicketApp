export class SessionInfo {
    public date: string;
    public availability: number;

    public dateTime: Date;
    public selectedTickets: number = 0;

    constructor(obj?: any) {
        if ( obj ) {
            Object.assign(this, obj);
            this.availability = parseInt(obj.availability, 10);
            this.dateTime = new Date(parseInt(this.date, 10));
        }
    }
}
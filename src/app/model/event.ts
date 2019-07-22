export class Event {
    public id: string;
    public title: string;
    public subtitle: string;
    public image: string;
    public place: string;
    public startDate: string;
    public endDate: string;
    public description: string;

    public startDateTime: Date;
    public endDateTime: Date;

    constructor(obj?: any) {
        Object.assign(this, obj);
        this.startDateTime = new Date(parseInt(this.startDate, 10));
        this.endDateTime = new Date(parseInt(this.endDate, 10));
    }
}
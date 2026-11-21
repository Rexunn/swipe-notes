
export class Note {
    id: number;
    title: string;
    body: string;

    constructor(id: number, title: string, body: string) {
        this.id = id;
        this.title = title;
        this.body = body;
    };

    //storage
    save(): string {
        return JSON.stringify(this); //takes note and turns it to a string
    }
};




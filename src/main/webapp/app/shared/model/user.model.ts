export class User {
    private _id: number;
    private _login:string;
    private _nationality: string;
    private _totalPoints: number;


    constructor(id: number, login: string, nationality?: string, totalPoints?: number) {
        this._id = id;
        this._login = login;
        this._nationality = nationality;
        this._totalPoints = totalPoints;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get login(): string {
        return this._login;
    }

    set login(value: string) {
        this._login = value;
    }


    get nationality(): string {
        return this._nationality;
    }

    set nationality(value: string) {
        this._nationality = value;
    }

    get totalPoints(): number {
        return this._totalPoints;
    }

    set totalPoints(value: number) {
        this._totalPoints = value;
    }
}

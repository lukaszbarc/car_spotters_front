import {Car} from "./car.model";
import {User} from "./user.model";
export class Photo {
    private _id?: number;
    private _url?: string;
    private _car?: Car;
    private _author: User;


    constructor(id?: number, url?: string, car?: Car, author?: User) {
        this._id = id;
        this._url = url;
        this._car = car;
        this._author = author;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get car(): Car {
        return this._car;
    }

    set car(value: Car) {
        this._car = value;
    }

    get author(): User {
        return this._author;
    }

    set author(value: User) {
        this._author = value;
    }
}

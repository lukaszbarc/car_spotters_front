export class Car {

    private _id : number;
    private _make: string;
    private _model: string;


    constructor(id: number, make: string, model: string) {
        this._id = id;
        this._make = make;
        this._model = model;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get make(): string {
        return this._make;
    }

    set make(value: string) {
        this._make = value;
    }

    get model(): string {
        return this._model;
    }


    set model(value: string) {
        this._model = value;
    }
}

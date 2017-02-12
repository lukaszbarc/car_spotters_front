import {Component} from '@angular/core';
import {Photo} from '../../shared/model/photo.model';
import {Car} from "../../shared/model/car.model";
import {User} from "../../shared/model/user.model";

@Component({
    selector: 'app-last-photos',
    templateUrl: './last-photos.component.html',
    styleUrls: [
        'last-photos.css'
    ]

})
export class LastPhotosComponent {

    photos : Photo[] = [];

    constructor() {

        let author = new User(1, 'Carlos92', 'Poland', 129765);
        this.photos.push(new Photo(1, 'https://s3.eu-central-1.amazonaws.com/quiz-resources/tests/001.jpg', new Car(1, 'Land Rover', 'Jakis model'), author));
        this.photos.push(new Photo(2, 'https://s3.eu-central-1.amazonaws.com/quiz-resources/tests/003.jpg', new Car(2, 'Porsche', '911 997 Turbo'), author));
        this.photos.push(new Photo(3, 'https://s3.eu-central-1.amazonaws.com/quiz-resources/tests/004.jpg', new Car(3, 'Mercedes Benz', 'C63 Black Series'), author));
        this.photos.push(new Photo(4, 'https://s3.eu-central-1.amazonaws.com/quiz-resources/tests/005.jpg', new Car(4, 'Porsche', 'Macan Turbo'), author));
        this.photos.push(new Photo(5, 'https://s3.eu-central-1.amazonaws.com/quiz-resources/tests/006.jpg', new Car(5, 'Ford', 'Focus RS'), author));
        this.photos.push(new Photo(5, 'https://s3.eu-central-1.amazonaws.com/quiz-resources/tests/007.jpg', new Car(6, 'Porsche', '911 997 GT3 RS'), author));
        this.photos.push(new Photo(5, 'https://s3.eu-central-1.amazonaws.com/quiz-resources/tests/008.jpg', new Car(7, 'Porsche', '911 997 Turbo S'), author));
    }
}

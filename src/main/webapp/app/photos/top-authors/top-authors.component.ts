import {Component} from "@angular/core";
import {User} from "../../shared/model/user.model";

@Component({
    selector: 'app-top-authors',
    templateUrl: './top-authors.component.html',
    styleUrls: [
        'top-authors.css'
    ]

})
export class TopAuthorsComponent {

    public authors : User[] =  [];


    constructor() {
        this.authors.push(new User(1, 'Carlos92', 'PL', 138673));
        this.authors.push(new User(2, 'Cologne-Cars', 'DE', 165468));
        this.authors.push(new User(3, 'WDP-Gespot', 'NL', 154545));
        this.authors.push(new User(4, 'Style', 'BE', 8798));
        this.authors.push(new User(5, 'Brajan', 'PL', 45457));
        this.authors.push(new User(6, 'Mati', 'PL', 5454));
        this.authors.push(new User(7, 'Seba', 'PL', 6546576));
    }
}

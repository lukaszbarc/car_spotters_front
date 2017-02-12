import {Component, Input} from '@angular/core';
import {Photo} from "../../shared/model/photo.model";

@Component({
    selector: 'app-photo-thumb',
    templateUrl: './photo-thumb.component.html',
    styleUrls: [
        'photo-thumb.css'
    ]

})
export class PhotoThumbComponent {

    @Input() photo : Photo;
}

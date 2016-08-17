import {Component, Input} from "angular2/src/core/metadata";
import {IPersonRaw} from "../../def/people";
@Component({
    selector: 'people-list-item',
    templateUrl: `app/components/people-list-item/people-list-item.component.html`,
    styleUrls: [`app/components/people-list-item/people-list-item.component.css`]
})

export class PeopleListItemComponent {
    @Input() person:IPersonRaw
}
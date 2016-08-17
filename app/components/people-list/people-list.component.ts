import {Component} from "angular2/core";
import {IPersonRaw} from "../../def/people";
import {PeopleService} from "../../services/people.service";
import {PeopleListItemComponent} from "../people-list-item/people-list-item.compoment";

@Component({
    selector: 'people-list',
    templateUrl: 'app/components/people-list/people-list.component.html',
    styleUrls: ['app/components/people-list/people-list.component.css'],
    pipes: [],
    directives: [PeopleListItemComponent]
})
export class PeopleListComponent {
    errorMessage: string;
    people: IPersonRaw[];

    constructor(private _peopleService: PeopleService) {
    }

    queryPeopleService(queryString: string) {
        this._peopleService.getPeople(queryString).then(res => {
            this.errorMessage = "";
            this.people = res;
        }).catch(err => {
            this.people = [];
            this.errorMessage = err;
        });
    }
}

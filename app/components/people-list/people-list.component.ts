import {Component, OnInit} from "angular2/core";
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
export class PeopleListComponent implements OnInit {
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    listFilter: string = '';
    errorMessage: string;
    people: IPersonRaw[];

    constructor(private _peopleService: PeopleService) {
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
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

    ngOnInit(): void {
        // this.queryPeopleService("test");

        // this._peopleService.getPeopleRx()
        //           .subscribe(
        //             people => this.people = people,
        //             error =>  this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}

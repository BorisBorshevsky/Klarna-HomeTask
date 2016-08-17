import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import 'rxjs/Rx';   // Load all features

import {PeopleService} from '../../services/people.service';
import {PeopleListComponent} from "../people-list/people-list.component";
import {SearchInputComponent} from "../search-input/search-input.component";
import {ViewChild} from "angular2/src/core/metadata";

@Component({
    selector: 'app',
    templateUrl: 'app/components/app/app.component.html',
    styleUrls: ['app/components/app/app.component.css'],
    providers: [PeopleService, HTTP_PROVIDERS],
    directives: [PeopleListComponent, SearchInputComponent]
})

export class AppComponent {
    @ViewChild('peopleList')
    peopleList: PeopleListComponent;

    onSearch(query){
        console.log("got search event: " + query);
        this.peopleList.queryPeopleService(query);
    }
}

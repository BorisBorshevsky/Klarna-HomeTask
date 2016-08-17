import {Component, Output} from "angular2/src/core/metadata";
import {EventEmitter} from "angular2/src/facade/async";
@Component({
    selector: 'search-input',
    template: `
    <div class="cui__input giant">
        <input type="text" (input)="onChange($event)" class="cui__input__input" required/>
        <label class="cui__input__label"> Type your search query </label>
    </div>`,
    styleUrls: ['app/components/search-input/search-input.component.css']

})
export class SearchInputComponent {
    input: string;
    @Output() search: EventEmitter<string> = new EventEmitter<string>();

    timer: number;

    onChange(event) {
        clearTimeout(this.timer);
        if (event.target.value != "") {
            this.timer = setTimeout(() => {
                this.search.emit(event.target.value);
            }, 500);
        }
    }
}
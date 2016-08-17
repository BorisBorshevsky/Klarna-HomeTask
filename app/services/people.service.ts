import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {IPerson, IPersonRaw} from "../def/people";


@Injectable()
export class PeopleService {
    // private _apiUrl = 'api/people/peopleDemo.json?q=';
    private _apiUrl = 'api/people?q=';

    constructor(private _http: Http) {
    }

    getPeople(query: string): Promise<IPersonRaw[]> {
        return this._http.get(`${this._apiUrl}${query}`).toPromise()
            .then(this.mapPeople)
            .catch(this.handleErrorPromise)
    }

    private handleErrorPromise(error: any) {
        let errorMsg = error.message || `Yikes! There was was a problem and we couldn't retrieve your data!`;
        console.error(errorMsg);
        return Promise.reject(errorMsg);
    }

    private mapPeople(response: Response): IPersonRaw[] {
        return response.json()
    }
}

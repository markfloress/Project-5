import { Injectable } from '@angular/core';
import { Colonist, NewColonist } from '../models/colonist';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ColonistService {
    ColonistsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
    constructor(private http: Http){}
    getColonists(): Promise<Colonist[]> {
        return this.http.get(this.ColonistsUrl)
                        .toPromise()
                        .then(response => response.json().colonists)
                        .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

// newColonist(colonist: Colonist): Promise<Colonist> {
//     let headers = new Headers({'Content-Type': 'application/json'});
//     let body = JSON.stringify({ colonist });
//     return this.http
//                .post(this.colonistsUrl, body, { headers: headers })
//                .toPromise()
//                .then(response => response.json().colonist)
//                .catch(this.handleError);
// }
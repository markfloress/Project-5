import { Injectable } from '@angular/core';
import { Colonist, NewColonist } from '../models/colonist';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ColonistService {
    ColonistsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/colonists';
    stored:Colonist;
    constructor(private http: Http){}

    registerColonist(colonist: NewColonist): Promise<NewColonist> {
        const headers = new Headers({'Content-Type': 'application/json'});
        const body = JSON.stringify({ colonist });
            return this.http
                .post(this.ColonistsUrl, body, { headers: headers })
                .toPromise()
                .then((response) => {
                    this.stored = response.json().colonist;
                    return response.json().colonist})
                .catch(this.handleError);
    }
    getStoredColonist(){
        return this.stored;
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
} 
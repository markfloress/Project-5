import { Injectable } from '@angular/core';
import { Alien, NewAlien } from '../models/alien';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class AlienService {
    aliensUrl = 'https://red-wdp-api.herokuapp.com/api/mars/aliens';
    constructor(private http: Http){}
    getAliens(): Promise<Alien[]> {
        return this.http.get(this.aliensUrl)
                        .toPromise()
                        .then(response => response.json().aliens)
                        .catch(this.handleError);
    }

    registerAlien(alien: NewAlien): Promise<NewAlien> {
        const headers = new Headers({'Content-Type': 'application/json'});
        const body = JSON.stringify({ alien });
            return this.http
                .post(this.aliensUrl, body, { headers: headers })
                .toPromise()
                .then(response => response.json().alien)
                .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
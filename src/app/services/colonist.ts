import { Injectable } from '@angular/core';
import { Colonist,  } from '../models/alien';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

newColonist(colonist: Colonist): Promise<Colonist> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let body = JSON.stringify({ colonist });
    return this.http
               .post(this.colonistsUrl, body, { headers: headers })
               .toPromise()
               .then(response => response.json().colonist)
               .catch(this.handleError);
}
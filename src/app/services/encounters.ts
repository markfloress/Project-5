import { Injectable } from '@angular/core';
import { Report, NewReport } from '../models/report';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class ReportService {
    reportsUrl = 'https://red-wdp-api.herokuapp.com/api/mars/reports';
    constructor(private http: Http){}
    getReports(): Promise<Report[]> {
        return this.http.get(this.reportsUrl)
                        .toPromise()
                        .then(response => response.json().reports)
                        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    newReport(report: Report): Promise<Report> {
    let headers = new Headers({'Content-Type': 'application/json'});
    let body = JSON.stringify({ report });
    return this.http
               .post(this.reportsUrl, body, { headers: headers })
               .toPromise()
               .then(response => response.json().report)
               .catch(this.handleError);
    }
}
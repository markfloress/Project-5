import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { ReportService } from '../../services/encounters';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styles: [],
  providers:[
    AlienService,
    ReportService
  ]
})
export class ReportComponent implements OnInit {

  constructor(private alienService: AlienService, private reportService: ReportService) { }

  async ngOnInit() {                //ES6 same as promise
    const data = {
      date: '2020-10-10',
      colonist_id: '3',
      atype: 'spider',
      action: 'ham'
    }

    const newReport = await this.reportService.newReport(data);
    const aliens = await this.alienService.getAliens();
    console.log(aliens);
    console.log(newReport);
  }
}

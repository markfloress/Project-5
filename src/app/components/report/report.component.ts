import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { ReportService } from '../../services/encounters';
import { Alien } from '../../models/alien';
import { NewReport } from '../../models/report';
import { FormControl, FormGroup } from '@angular/forms';
import { ColonistService } from '../../services/colonist';

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

  aliens: Alien[] = [];

  reportForm = new FormGroup({
    alien: new FormControl(''),
    post: new FormControl(''),
  });

  constructor(private alienService: AlienService, private reportService: ReportService, private colonistService: ColonistService) { }



  async ngOnInit() {                //ES6 same as promise
    
    this.aliens = await this.alienService.getAliens();
  }
  
  async newReport(){
    const newReport: NewReport = {
      atype:        this.reportForm.get('atype').value,
      date:         this.reportForm.get('date').value,
      action:       this.reportForm.get('action').value,
      colonist_id:  this.colonistService.getStoredColonist().id.toString(),
    }
    console.log(this.colonistService.getStoredColonist().id.toString())
    const report = await this.reportService.newReport(newReport);
  }

}

// export interface NewReport {
//   atype: string;
//   date: string;
//   action: string;
//   colonist_id: string;
// }
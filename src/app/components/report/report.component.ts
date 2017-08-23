import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { ReportService } from '../../services/encounters';
import { Alien } from '../../models/alien';
import { FormControl, FormGroup } from '@angular/forms';

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

   registerForm = new FormGroup({
    alien: new FormControl('Select alien type'),
    post: new FormControl('Select Occupation'),
  });

  constructor(private alienService: AlienService, private reportService: ReportService) { }



  async ngOnInit() {                //ES6 same as promise
    
    this.aliens = await this.alienService.getAliens();
  }
}

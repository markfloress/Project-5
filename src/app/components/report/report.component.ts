import { Component, OnInit } from '@angular/core';
import { AlienService } from '../../services/alien';
import { ReportService } from '../../services/encounters';
import { Alien } from '../../models/alien';
import { NewReport } from '../../models/report';
import { FormControl, FormGroup } from '@angular/forms';
import { ColonistService } from '../../services/colonist';
import { Router } from '@angular/router';

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
    atype: new FormControl('', []),
    action: new FormControl('', []),
  });

  constructor(private alienService: AlienService, private reportService: ReportService, private colonistService: ColonistService, private router:Router) { }



  async ngOnInit() {                //ES6 same as promise
    
    this.aliens = await this.alienService.getAliens();
  }
  
  async newReport(){
    const newReport: NewReport = {
      atype:        this.reportForm.get('atype').value,
      date:         '10-10-2017',
      action:       this.reportForm.get('action').value,
      colonist_id:  '10'
    }
    console.log(this.colonistService.getStoredColonist().id.toString())
    const report = await this.reportService.newReport(newReport);
    this.router.navigate(['encounters']);
  }
}



//  registerForm = new FormGroup({
//     type: new FormControl('', [Validators.required]),
//     submitted_by: new FormControl('', [Validators.required]),
//     id: new FormControl('', [Validators.required]),
//     description: new FormControl('', [Validators.required]),
//   });

  // constructor(private alienService: AlienService) { }

  // async ngOnInit() {
  // }

  // async registerAlien(){
  //   const newAlienPost: NewAlien = {
  //     type:         this.registerForm.get('type').value,
  //     submitted_by: this.registerForm.get('submitted_by').value,
  //     id:           this.registerForm.get('id').value,
  //     description:  this.registerForm.get('description').value,
  //   }

    // const alien = await this.alienService.registerAlien(newAlienPost);
//   }
// }
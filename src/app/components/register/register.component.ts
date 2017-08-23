import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job';
import { Job } from '../../models/job';
import { ColonistService } from '../../services/colonist';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [`./register.component.css`],
  providers: [
    JobService,
    ColonistService
  ]
})
export class RegisterComponent implements OnInit {

  jobs: Job[] = [];

  registerForm = new FormGroup({
    name: new FormControl('Name'),
    age: new FormControl('Age'),
    job_id: new FormControl('Select Occupation'),
  });

  constructor(private jobService: JobService, 
    private colonistService: ColonistService
  ) { }

  async ngOnInit() {

    this.jobs = await this.jobService.getJobs();
  }
}







// removeListItem(item){
//   this.data = this.data.filter(li => li !== item);
// }
// this.data is the list and that is removing an item from the list


// setInterval(()=>{
//       this.data.push({text: `encounter ${Math.random()}`})
//     }, 1000);


// <input #text/><button (click)='addItem(text.value)'></button>
// addItem(item){
//   this.data.push({ text: item })
// }

// this will grab the input value and add it on click from button
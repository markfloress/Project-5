import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job';
import { ColonistService } from '../../services/colonist';

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

  constructor(private jobService: JobService, 
    private colonistService: ColonistService
  ) { }

  async ngOnInit() {
    const data = {
      name: 'data test',
      age: '1234',
      job_id: '1'
    };

    const Job = await this.jobService.getJobs();
    const newColonist = await this.colonistService.registerColonist(data);
    console.log(Job);
    console.log(newColonist);
  }
}

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
    colonistService: ColonistService
  ) { }

  async ngOnInit() {
    const Job = await this.jobService.getJobs();
    console.log(Job);
  }
}

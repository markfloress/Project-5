import { Component, OnInit } from '@angular/core';
import { JobService } from '../../services/job';
import { Job } from '../../models/job';
import { NewColonist } from '../../models/colonist';
import { ColonistService } from '../../services/colonist';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [`./register.component.scss`],
  providers: [
    JobService
  ]
})
export class RegisterComponent implements OnInit {

  jobs: Job[] = [];

  registerForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(2), this.noNumber(/[0-9]/)]),
    age: new FormControl('', [Validators.required, Validators.max(80), Validators.min(20)]),
    job_id: new FormControl('', [Validators.required, ]),
  });

  constructor(private jobService: JobService, 
    private colonistService: ColonistService,
    private router:Router
  ) { }

  async ngOnInit() {

    this.jobs = await this.jobService.getJobs();  
  }

  async registerColonist(){
    const newColonist: NewColonist = {
      name: this.registerForm.get('name').value,
      age: this.registerForm.get('age').value,
      job_id: this.registerForm.get('job_id').value,
    }

    const colonist = await this.colonistService.registerColonist(newColonist);
    this.router.navigate(['encounters']);

  }

  private noNumber(validNameRegex): ValidatorFn {
    return (control): {[key: string]: any} =>{
      const forbiddenName = validNameRegex.test(control.value);
      return forbiddenName ? {'forbiddenName' : { value: control.value}} : null;
    }
  }
}
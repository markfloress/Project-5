import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { AlienService } from '../../services/alien';
import { Alien, NewAlien } from '../../models/alien';

@Component({
  selector: 'app-aliens',
  templateUrl: './aliens.component.html',
  styles: [],
  providers: [
    AlienService,
  ]
})
export class AliensComponent implements OnInit {

  registerForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    submitted_by: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(private alienService: AlienService) { }

  async ngOnInit() {
  }

  async registerAlien(){
    const newAlienPost: NewAlien = {
      type:         this.registerForm.get('type').value,
      submitted_by: this.registerForm.get('submitted_by').value,
      id: this.registerForm.get('id').value,
      description:  this.registerForm.get('description').value,
    }

    const alien = await this.alienService.registerAlien(newAlienPost);
    console.log('colonist was saved', alien);
  }
}
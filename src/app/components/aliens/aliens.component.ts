import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn } from '@angular/forms';
import { AlienService } from '../../services/alien';
import { Alien, NewAlien } from '../../models/alien';

@Component({
  selector: 'app-aliens',
  templateUrl: './aliens.component.html',
  styleUrls: ['./aliens.component.scss'],
  providers: [
    AlienService,
  ]
})
export class AliensComponent implements OnInit {

  createAlien = new FormGroup({
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
      type:         this.createAlien.get('type').value,
      submitted_by: this.createAlien.get('submitted_by').value,
      id:           this.createAlien.get('id').value,
      description:  this.createAlien.get('description').value,
    }

    const alien = await this.alienService.registerAlien(newAlienPost);
  }
}
import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styles: []
})
export class EncountersComponent implements OnInit {

  constructor(reportService: ReportService) { }

  ngOnInit() {
  }

}

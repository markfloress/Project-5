import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/encounters';

@Component({
  selector: 'app-encounters',
  templateUrl: './encounters.component.html',
  styles: [],
  providers: [
    ReportService
  ]
})
export class EncountersComponent implements OnInit {

  constructor(private reportService: ReportService) { }

  async ngOnInit() {
    const Report = await this.reportService.getReports();
    console.log(Report);
  }

}

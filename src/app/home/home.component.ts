import { Component } from '@angular/core';
import { ExcuseApiService } from '../excuse-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  excuse: string = '';

  constructor(private excuseService: ExcuseApiService) { }

  getExcuse(type: string) {
    switch (type) {
      case 'work':
        this.excuseService.getWorkExcuse().subscribe(excuse => this.excuse = excuse);
        break;
      case 'late':
        this.excuseService.getLateExcuse().subscribe(excuse => this.excuse = excuse);
        break;
      case 'help':
        this.excuseService.getHelpExcuse().subscribe(excuse => this.excuse = excuse);
        break;
      case 'busy':
        this.excuseService.getBusyExcuse().subscribe(excuse => this.excuse = excuse);
        break;
    }
  }
}

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

  getExcuse(type: 'work' | 'late' | 'help' | 'busy') {
    this.excuseService.getExcuse(type).subscribe(excuse => {
      this.excuse = excuse['excuse']
    });
  }
}

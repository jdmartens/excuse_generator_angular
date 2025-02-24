import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { ExcuseApiService } from '../excuse-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [MatSnackBarModule]
})
export class HomeComponent {
  excuse: string = '';
  loading: boolean = false;

  constructor(private excuseService: ExcuseApiService, private snackBar: MatSnackBar) { }

  getExcuse(type: string) {
    if (this.loading) {
      return; // Prevent multiple requests
    }
    this.excuse = '';
    this.loading = true;
    let snackBarRef: MatSnackBarRef<any> | undefined;
    const snackBarTimeout = setTimeout(() => {
      snackBarRef = this.snackBar.open('The first request may take up to 45 seconds because it is hosted with minimal resources.', 'Close', {
        duration: 30000, // 30 seconds
      });
    }, 10000); // 10 seconds

    this.excuseService.getExcuse(type).subscribe(excuse => {
      this.excuse = excuse['excuse'];
      this.loading = false;
      clearTimeout(snackBarTimeout);
      if (snackBarRef) {
        snackBarRef.dismiss();
      }
    }, error => {
      this.loading = false;
      clearTimeout(snackBarTimeout);
      if (snackBarRef) {
        snackBarRef.dismiss();
      }
      console.error('Error fetching excuse:', error);
    });
  }
}

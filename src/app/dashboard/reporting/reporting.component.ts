import { Component, OnInit } from '@angular/core';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-reporting',
  standalone: true,
  imports: [LoaderComponent, CommonModule],
  templateUrl: './reporting.component.html',
  styleUrl: './reporting.component.scss',
})
export class ReportingComponent {
  showLoader: boolean = false;

  displayLoading() {
    this.showLoader = true;
    setInterval(() => (this.showLoader = false), 2000);
  }

}

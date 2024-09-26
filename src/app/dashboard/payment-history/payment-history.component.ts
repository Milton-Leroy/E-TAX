import { Component, inject } from '@angular/core';
import { FirstPayhisFilterComponent } from './filters/first-filter.component';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { CommonModule } from '@angular/common';
import { PaymentDetailsComponent } from './details/details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-history',
  standalone: true,
  imports: [FirstPayhisFilterComponent,LoaderComponent, CommonModule,PaymentDetailsComponent],
  templateUrl: './payment-history.component.html',
  styleUrl: './payment-history.component.scss'
})
export class PaymentHistoryComponent {
  showLoader: boolean = false
  tableEmpty: boolean = false
  showPaymentDetails: boolean = false

  router = inject(Router)

  displayLoading(){
    this.showLoader = true
    setInterval( () => this.showLoader = false, 2000)
  }

  routeToEditPayement = () => this.router.navigateByUrl('/validations')
}

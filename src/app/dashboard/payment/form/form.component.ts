import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class PaymentFormComponent {

  router = inject(Router)

  redirectBack = () => this.router.navigateByUrl('/payment');
}

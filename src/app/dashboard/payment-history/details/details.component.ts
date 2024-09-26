import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class PaymentDetailsComponent {
  @Output() closePaymentDetails: EventEmitter<void> = new EventEmitter<void>();

  onCancel() {
    this.closePaymentDetails.emit(); // Emit the event when cancel is clicked
  }
}

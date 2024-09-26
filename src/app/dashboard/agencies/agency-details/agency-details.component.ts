import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-agency-details',
  standalone: true,
  imports: [],
  templateUrl: './agency-details.component.html',
  styleUrl: './agency-details.component.scss'
})
export class AgencyDetailsComponent {
  @Output() closeAgencyDetails: EventEmitter<void> = new EventEmitter<void>();

  onCancel() {
    this.closeAgencyDetails.emit(); // Emit the event when cancel is clicked
  }
}

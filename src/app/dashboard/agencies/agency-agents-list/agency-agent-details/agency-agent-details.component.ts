import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-agency-agent-details',
  standalone: true,
  imports: [],
  templateUrl: './agency-agent-details.component.html',
  styleUrl: './agency-agent-details.component.scss'
})
export class AgencyAgentDetailsComponent {
  @Output() closeAgencyAgentDetails: EventEmitter<void> = new EventEmitter<void>();

  onCancel() {
    this.closeAgencyAgentDetails.emit(); // Emit the event when cancel is clicked
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-agency-agent',
  standalone: true,
  imports: [],
  templateUrl: './create-agency-agent.component.html',
  styleUrl: './create-agency-agent.component.scss'
})
export class CreateAgencyAgentComponent {
  @Output() closeCreateAgencyAgentForm: EventEmitter<void> = new EventEmitter<void>();

  onCancel() {
    this.closeCreateAgencyAgentForm.emit(); // Emit the event when cancel is clicked
  }
}

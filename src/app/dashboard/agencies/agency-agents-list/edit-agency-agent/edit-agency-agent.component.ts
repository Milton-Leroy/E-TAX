import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-agency-agent',
  standalone: true,
  imports: [],
  templateUrl: './edit-agency-agent.component.html',
  styleUrl: './edit-agency-agent.component.scss'
})
export class EditAgencyAgentComponent {
  @Output() closeEditAgencyAgentForm: EventEmitter<void> = new EventEmitter<void>();

  onCancel() {
    this.closeEditAgencyAgentForm.emit(); // Emit the event when cancel is clicked
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-agency',
  standalone: true,
  imports: [],
  templateUrl: './edit-agency.component.html',
  styleUrl: './edit-agency.component.scss'
})
export class EditAgencyComponent {
  @Output() closeAgencyEditForm: EventEmitter<void> = new EventEmitter<void>();

  onCancel() {
    this.closeAgencyEditForm.emit(); // Emit the event when cancel is clicked
  }
}

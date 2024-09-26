import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-agency',
  standalone: true,
  imports: [],
  templateUrl: './create-agency.component.html',
  styleUrl: './create-agency.component.scss'
})
export class CreateAgencyComponent {
  @Output() closeCreateAgencyForm: EventEmitter<void> = new EventEmitter<void>();

  onCancel() {
    this.closeCreateAgencyForm.emit(); // Emit the event when cancel is clicked
  }
}

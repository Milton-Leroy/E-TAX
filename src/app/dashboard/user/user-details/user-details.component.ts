import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {

  @Output() closeUserDetailsForm: EventEmitter<void> = new EventEmitter<void>();

  onCancel() {
    this.closeUserDetailsForm.emit(); // Emit the event when cancel is clicked
  }

}

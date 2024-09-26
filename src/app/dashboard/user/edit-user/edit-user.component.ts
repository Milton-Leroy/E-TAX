import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {

  @Output() closeEditForm: EventEmitter<void> = new EventEmitter<void>();

  onCancel() {
    this.closeEditForm.emit(); // Emit the event when cancel is clicked
  }

}

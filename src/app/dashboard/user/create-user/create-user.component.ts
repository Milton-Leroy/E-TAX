import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from '../../../shared/services/storage.service';
import { LoaderComponent } from '../../../shared/loader/loader.component';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,LoaderComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  isLoading: boolean = false;
  formBuilder = inject(FormBuilder)
  storageService = inject(StorageService)

  @Output() closeCreateUserForm: EventEmitter<void> = new EventEmitter<void>();

  userForm = this.formBuilder.group({
    otp: [false, Validators.required],
    userId: ['', Validators.required],
    role: ['', Validators.required],
    name: ['', Validators.required],
    surname: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    category: ['', Validators.required],
    gender: ['', Validators.required],
    defaultPassword: ['', Validators.required],
  })

  onCancel() {
    this.closeCreateUserForm.emit(); // Emit the event when cancel is clicked
  }

  onSubmit(){
    if(this.userForm.invalid) return;
    this.isLoading = true;
    setInterval(() => {
      this.storageService.setData('user', this.userForm.value);
      this.closeCreateUserForm.emit();
      this.isLoading = false;
    }, 5000)
  }

}

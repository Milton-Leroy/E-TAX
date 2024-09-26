import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-pament',
  standalone: true,
  imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditPaymentComponent {
  router = inject(Router)

  redirectBack = () => this.router.navigateByUrl('/history')
}

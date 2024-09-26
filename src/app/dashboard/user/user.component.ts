import { Component, inject, OnInit } from '@angular/core';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { CommonModule } from '@angular/common';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { FirstUserFilterComponent } from './filters/first-filter.component';
import { StorageService } from '../../shared/services/storage.service';
import { User } from '../../shared/models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [LoaderComponent, CommonModule, EditUserComponent,CreateUserComponent, UserDetailsComponent, FirstUserFilterComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit {
  showLoader: boolean = false;
  showDropdown: boolean = false;
  showUserEditForm: boolean = false;
  showUserCreateForm: boolean = false;
  showUserDetails: boolean = false;
  showFilter1: boolean = false;
  selectedFilter: string = '';
  user!: User

  storageService = inject(StorageService)

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    try {
      this.user = this.storageService.getData<User>('user');
    } catch (error) {
      console.error(error);
    }
  }

  displayLoading(){
    this.showLoader = true
    setInterval( () => this.showLoader = false, 2000)
  }

  displayFilter1() {
    this.showFilter1 = !this.showFilter1;  // Toggle dropdown visibility
  }

  displayDropdown(){
    this.showDropdown = !this.showDropdown;
  }
}

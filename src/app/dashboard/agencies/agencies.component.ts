import { Component } from '@angular/core';
import { AgencyFilterComponent } from './filter/first-filter.component';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { CommonModule } from '@angular/common';
import { AgencyDetailsComponent } from './agency-details/agency-details.component';
import { CreateAgencyComponent } from './create-agency/create-agency.component';
import { EditAgencyComponent } from './edit-agency/edit-agency.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-agencies',
  standalone: true,
  imports: [AgencyFilterComponent, LoaderComponent, CommonModule,AgencyDetailsComponent,CreateAgencyComponent, EditAgencyComponent,
    RouterLink
  ],
  templateUrl: './agencies.component.html',
  styleUrl: './agencies.component.scss'
})
export class AgenciesComponent {

  showLoader: boolean = false
  tableEmpty: boolean = false
  showAgencyDetails: boolean = false
  showCreateAgencyForm: boolean = false
  showEditAgencyForm: boolean = false

  displayLoading(){
    this.showLoader = true
    setInterval( () => this.showLoader = false, 2000)
  }

}

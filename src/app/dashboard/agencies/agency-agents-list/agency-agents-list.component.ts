import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyAgentFilterComponent } from './filters/first-filter.component';
import { LoaderComponent } from '../../../shared/loader/loader.component';
import { CommonModule } from '@angular/common';
import { AgencyAgentDetailsComponent } from './agency-agent-details/agency-agent-details.component';
import { EditAgencyAgentComponent } from './edit-agency-agent/edit-agency-agent.component';
import { CreateAgencyAgentComponent } from './create-agency-agent/create-agency-agent.component';

@Component({
  selector: 'app-agency-agents-list',
  standalone: true,
  imports: [AgencyAgentFilterComponent, LoaderComponent, CommonModule, AgencyAgentDetailsComponent, EditAgencyAgentComponent,
    CreateAgencyAgentComponent,
  ],
  templateUrl: './agency-agents-list.component.html',
  styleUrl: './agency-agents-list.component.scss'
})
export class AgencyAgentsListComponent {

  showLoader: boolean = false
  showDropdown: boolean = false
  showAgencyAgentDetails: boolean = false
  showEditAgencyAgentForm: boolean = false
  showCreateAgencyAgentForm: boolean = false

  router = inject(Router);

  redirectBack(){
    this.router.navigateByUrl('/agencies');
  }

  displayLoading(){
    this.showLoader = true
    setInterval( () => this.showLoader = false, 2000)
  }

  displayDropdown(){
    this.showDropdown = !this.showDropdown
  }
}

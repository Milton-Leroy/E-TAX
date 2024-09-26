import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyAgentsListComponent } from './agency-agents-list.component';

describe('AgencyAgentsListComponent', () => {
  let component: AgencyAgentsListComponent;
  let fixture: ComponentFixture<AgencyAgentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyAgentsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyAgentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

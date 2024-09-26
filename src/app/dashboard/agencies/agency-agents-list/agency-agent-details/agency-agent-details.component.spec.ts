import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyAgentDetailsComponent } from './agency-agent-details.component';

describe('AgencyAgentDetailsComponent', () => {
  let component: AgencyAgentDetailsComponent;
  let fixture: ComponentFixture<AgencyAgentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgencyAgentDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgencyAgentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

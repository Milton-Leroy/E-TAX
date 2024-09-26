import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgencyAgentComponent } from './create-agency-agent.component';

describe('CreateAgencyAgentComponent', () => {
  let component: CreateAgencyAgentComponent;
  let fixture: ComponentFixture<CreateAgencyAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAgencyAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAgencyAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

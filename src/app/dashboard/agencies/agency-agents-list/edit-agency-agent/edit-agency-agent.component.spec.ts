import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgencyAgentComponent } from './edit-agency-agent.component';

describe('EditAgencyAgentComponent', () => {
  let component: EditAgencyAgentComponent;
  let fixture: ComponentFixture<EditAgencyAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditAgencyAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAgencyAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

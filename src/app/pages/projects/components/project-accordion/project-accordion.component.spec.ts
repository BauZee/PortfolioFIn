import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAccordionComponent } from './project-accordion.component';

describe('ProjectAccordionComponent', () => {
  let component: ProjectAccordionComponent;
  let fixture: ComponentFixture<ProjectAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

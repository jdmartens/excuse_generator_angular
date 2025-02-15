import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedExcuseComponent } from './advanced-excuse.component';

describe('AdvancedExcuseComponent', () => {
  let component: AdvancedExcuseComponent;
  let fixture: ComponentFixture<AdvancedExcuseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedExcuseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedExcuseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

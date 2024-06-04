import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptInformaticaComponent } from './dept-informatica.component';

describe('DeptInformaticaComponent', () => {
  let component: DeptInformaticaComponent;
  let fixture: ComponentFixture<DeptInformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeptInformaticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeptInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

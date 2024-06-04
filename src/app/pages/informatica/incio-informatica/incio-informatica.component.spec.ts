import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncioInformaticaComponent } from './incio-informatica.component';

describe('IncioInformaticaComponent', () => {
  let component: IncioInformaticaComponent;
  let fixture: ComponentFixture<IncioInformaticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncioInformaticaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncioInformaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

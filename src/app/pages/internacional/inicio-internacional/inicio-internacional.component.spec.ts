import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioInternacionalComponent } from './inicio-internacional.component';

describe('InicioInternacionalComponent', () => {
  let component: InicioInternacionalComponent;
  let fixture: ComponentFixture<InicioInternacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioInternacionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InicioInternacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

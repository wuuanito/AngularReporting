import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomaMuestrasComponent } from './toma-muestras.component';

describe('TomaMuestrasComponent', () => {
  let component: TomaMuestrasComponent;
  let fixture: ComponentFixture<TomaMuestrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TomaMuestrasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TomaMuestrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

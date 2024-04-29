import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaDeInicioComponent } from './PantallaDeInicioComponent';

describe('PantallaDeInicioComponent', () => {
  let component: PantallaDeInicioComponent;
  let fixture: ComponentFixture<PantallaDeInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaDeInicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PantallaDeInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

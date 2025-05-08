import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigilometroComponent } from './sigilometro.component';

describe('SigilometroComponent', () => {
  let component: SigilometroComponent;
  let fixture: ComponentFixture<SigilometroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigilometroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigilometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

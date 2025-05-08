import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromessometroComponent } from './promessometro.component';

describe('PromessometroComponent', () => {
  let component: PromessometroComponent;
  let fixture: ComponentFixture<PromessometroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromessometroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromessometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

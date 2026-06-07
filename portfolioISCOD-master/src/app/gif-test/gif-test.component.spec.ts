import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifTestComponent } from './gif-test.component';

describe('GifTestComponent', () => {
  let component: GifTestComponent;
  let fixture: ComponentFixture<GifTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GifTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

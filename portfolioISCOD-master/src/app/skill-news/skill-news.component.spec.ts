import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillNewsComponent } from './skill-news.component';

describe('SkillNewsComponent', () => {
  let component: SkillNewsComponent;
  let fixture: ComponentFixture<SkillNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillNewsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

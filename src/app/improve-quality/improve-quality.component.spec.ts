import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ImproveQualityComponent } from './improve-quality.component';


describe('ImproveQualityComponent', () => {
  let component: ImproveQualityComponent;
  let fixture: ComponentFixture<ImproveQualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImproveQualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImproveQualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

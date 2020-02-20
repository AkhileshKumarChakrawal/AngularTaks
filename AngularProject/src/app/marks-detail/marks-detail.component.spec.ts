import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarksDetailComponent } from './marks-detail.component';

describe('MarksDetailComponent', () => {
  let component: MarksDetailComponent;
  let fixture: ComponentFixture<MarksDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarksDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

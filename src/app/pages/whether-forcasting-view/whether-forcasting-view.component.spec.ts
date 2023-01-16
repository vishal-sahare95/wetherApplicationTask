import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhetherForcastingViewComponent } from './whether-forcasting-view.component';

describe('WhetherForcastingViewComponent', () => {
  let component: WhetherForcastingViewComponent;
  let fixture: ComponentFixture<WhetherForcastingViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhetherForcastingViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhetherForcastingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

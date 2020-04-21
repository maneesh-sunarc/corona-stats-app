import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoronaStatsListComponent } from './corona-stats-list.component';

describe('CoronaStatsListComponent', () => {
  let component: CoronaStatsListComponent;
  let fixture: ComponentFixture<CoronaStatsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaStatsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoronaStatsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

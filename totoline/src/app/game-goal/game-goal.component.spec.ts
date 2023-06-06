import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGoalComponent } from './game-goal.component';

describe('GameGoalComponent', () => {
  let component: GameGoalComponent;
  let fixture: ComponentFixture<GameGoalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameGoalComponent]
    });
    fixture = TestBed.createComponent(GameGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

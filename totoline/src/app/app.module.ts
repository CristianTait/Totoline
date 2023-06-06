import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ObstaclesComponent } from './obstacles/obstacles.component';
import { ObjectsComponent } from './objects/objects.component';
import { EnemiesComponent } from './enemies/enemies.component';
import { GameGoalComponent } from './game-goal/game-goal.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ObstaclesComponent,
    ObjectsComponent,
    EnemiesComponent,
    GameGoalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

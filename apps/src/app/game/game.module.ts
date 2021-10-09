import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SettingPageComponent } from './components/setting-page/setting-page.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { MenuComponent } from './containers/menu/menu.component';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game/game.component';

@NgModule({
  declarations: [GameComponent, MenuComponent, IntroPageComponent, StartPageComponent, SettingPageComponent, ProfilePageComponent],
  imports: [CommonModule, GameRoutingModule],
  bootstrap: [],
})
export class GameModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroPageComponent } from './components/intro-page/intro-page.component';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { SettingPageComponent } from './components/setting-page/setting-page.component';
import { StartPageComponent } from './components/start-page/start-page.component';
import { MenuComponent } from './containers/menu/menu.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: '',
    component: GameComponent,
    children: [
      {
        path: '',
        component: MenuComponent,
        children: [
          { path: '', component: IntroPageComponent },
          { path: 'start', component: StartPageComponent },
          { path: 'setting', component: SettingPageComponent },
          { path: 'profile', component: ProfilePageComponent },
        ],
      },
    ],
  },
  { path: '**', component: GameComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}

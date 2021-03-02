import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LetModule, PushModule, ViewportPrioModule } from '@rx-angular/template';

@NgModule({
  declarations: [],
  imports: [CommonModule, LetModule, PushModule, ViewportPrioModule],
  exports: [LetModule, PushModule, ViewportPrioModule],
})
export class RxAngularModule {}

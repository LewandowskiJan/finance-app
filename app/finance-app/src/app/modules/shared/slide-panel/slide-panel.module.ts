import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@modules/external/material/material.module';

import { AddButtonComponent } from './components/add-button/add-button.component';
import { SlidePanelComponent } from './components/slide-panel/slide-panel.component';
import { SlidePanelContainerComponent } from './containers/slide-panel-container/slide-panel-container.component';

const modules: any[] = [CommonModule, MaterialModule];

@NgModule({
  imports: [...modules],
  exports: [...modules, AddButtonComponent, SlidePanelComponent, SlidePanelContainerComponent],
  declarations: [AddButtonComponent, SlidePanelComponent, SlidePanelContainerComponent],
})
export class SlidePanelModule {}

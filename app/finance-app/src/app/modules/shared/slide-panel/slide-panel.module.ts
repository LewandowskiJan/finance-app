import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@modules/shared/material/material.module';

import { AddButtonComponent } from './components/add-button/add-button.component';
import { SlidePanelFormComponent } from './components/slide-panel-form/slide-panel-form.component';
import { SlidePanelComponent } from './components/slide-panel/slide-panel.component';
import { SlidePanelContainerComponent } from './containers/slide-panel-container/slide-panel-container.component';

const modules: any[] = [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule];

@NgModule({
  imports: [...modules],
  exports: [AddButtonComponent, SlidePanelComponent, SlidePanelContainerComponent],
  declarations: [AddButtonComponent, SlidePanelComponent, SlidePanelContainerComponent, SlidePanelFormComponent],
})
export class SlidePanelModule {}

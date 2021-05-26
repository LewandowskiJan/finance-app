import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { ComboBoxComponent } from './containers/combo-box/combo-box.component';

const modules: any[] = [CommonModule, MaterialModule, ReactiveFormsModule];
const components: any[] = [ComboBoxComponent];

@NgModule({
  imports: [...modules],
  exports: [components],
  declarations: [components],
})
export class ComboBoxModule {}

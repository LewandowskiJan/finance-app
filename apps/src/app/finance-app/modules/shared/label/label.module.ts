import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../../../../core/material/material.module';

import { LabelWithDetailsComponent } from './containers/label-with-details/label-with-details.component';

const containers: any[] = [LabelWithDetailsComponent];

@NgModule({
  declarations: [...containers],
  exports: [...containers],
  imports: [CommonModule, MaterialModule],
})
export class LabelModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';

import { ImportanceTagComponent } from './importance-tag/importance-tag.component';

@NgModule({
  declarations: [ImportanceTagComponent],
  exports: [ImportanceTagComponent],
  imports: [CommonModule, MaterialModule],
})
export class ImportanceTagModule {}

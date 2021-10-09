import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';

import { CsvReaderComponent } from './containers/csv-reader/csv-reader.component';

const modules: any[] = [CommonModule, MaterialModule];

@NgModule({
  imports: [...modules],
  exports: [CsvReaderComponent],
  declarations: [CsvReaderComponent],
})
export class CsvReaderModule {}

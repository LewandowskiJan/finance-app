import { NgModule } from '@angular/core';

import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ScrollingModule } from '@angular/cdk/scrolling';

const modules: any[] = [
  MatInputModule,
  MatCardModule,
  MatCheckboxModule,
  MatBadgeModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSelectModule,
  MatSidenavModule,
  MatMenuModule,
  MatSlideToggleModule,
  ScrollingModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule {}

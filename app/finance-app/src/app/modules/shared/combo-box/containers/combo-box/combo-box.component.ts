import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ComboBoxService } from './../../services/combo-box.service';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss'],
})
export class ComboBoxComponent implements OnInit {
  myControl = new FormControl();
  options: any[] = [];
  selected: any;
  filteredOptions: Observable<any[]>;
  constructor(private comboBoxService: ComboBoxService) {}
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      switchMap((query: string) => {
        return this.comboBoxService.search({ name: query }, 'dictionary/category/find');
      }),
      tap((res: any[]) => {
        if (this.options.length === 1) {
          this.selected = this.options[0];
        } else {
          this.selected = undefined;
        }
        console.log(this.selected);
        this.options = res;
      })
    );
  }
}

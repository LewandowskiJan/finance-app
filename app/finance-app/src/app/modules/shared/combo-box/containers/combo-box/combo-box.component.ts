import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { startWith, switchMap, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ComboBoxService } from './../../services/combo-box.service';
@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss'],
})
export class ComboBoxComponent implements OnInit {
  @Output() selectedValue: EventEmitter<any> = new EventEmitter();

  @Input() label: string = 'Combo';

  @Input() queryParamKey: string = 'name';
  @Input() serviceUrl: string = 'dictionary/category/find';

  myControl = new FormControl();
  options: any[] = [];
  selected: any;
  filteredOptions: Observable<any[]>;
  constructor(private comboBoxService: ComboBoxService) {}
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      switchMap((query: string) => {
        return this.comboBoxService.search({ [this.queryParamKey]: query }, this.serviceUrl).pipe(take(1));
      }),
      tap((res: any[]) => {
        this.options = res;
        if (this.options.length === 1) {
          this.selectedValue.emit(this.options[0]);
        } else {
          this.selectedValue.emit({});
        }
      })
    );
  }
}

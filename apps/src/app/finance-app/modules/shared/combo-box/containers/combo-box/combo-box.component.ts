import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { skip, startWith, switchMap, take, tap } from 'rxjs/operators';

import { BehaviorSubject, Observable } from 'rxjs';

import { ComboBoxConfiguration } from '../../configuration/combo-box-configuration';

import { ComboBoxProcessType } from './../../configuration/combo-box-process-type.enum';
import { ComboBoxType } from './../../configuration/combo-box-type.enum';
import { ComboBoxConfigurationMap } from './../../configuration/configuration.map';
import { ComboBoxService } from './../../services/combo-box.service';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styleUrls: ['./combo-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComboBoxComponent implements OnInit {
  @Input() public label: string = 'Combo';
  @Input() serviceUrl: string = 'dictionary/category/find';

  @Input() private comboBoxType: ComboBoxType = ComboBoxType.SEARCH_OR_CREATE;
  @Input() private comboBoxProcessType: ComboBoxProcessType = ComboBoxProcessType.CATEGORY_SEARCH_OR_CREATE;
  @Output() private selectedValue: EventEmitter<any> = new EventEmitter();

  public comboBoxConfiguration: ComboBoxConfiguration;
  public myControl = new FormControl();
  public options: any[] = [];
  public filteredOptions: Observable<any[]>;
  public isCreateButtonVisible: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private currentQuery: string;
  private comboBoxTypes: typeof ComboBoxType = ComboBoxType;

  constructor(private comboBoxService: ComboBoxService) {}

  public ngOnInit(): void {
    this.setupComboBoxConfiguration();
    this.filteredOptions = this.setupSearchProcess();
  }

  private setupComboBoxConfiguration(): void {
    this.comboBoxConfiguration = ComboBoxConfigurationMap.get(this.comboBoxProcessType);
  }

  private setupSearchProcess(): Observable<any> {
    return this.myControl.valueChanges.pipe(
      startWith(''),
      skip(3),
      switchMap((query: string) => {
        this.currentQuery = query;
        return this.comboBoxService
          .search({ [this.comboBoxConfiguration.queryParamKey]: query }, this.comboBoxConfiguration.searchUrl)
          .pipe(take(1));
      }),
      tap((res: any[]) => {
        this.options = res;

        if (this.comboBoxType !== this.comboBoxTypes.SEARCH_AND_FIND) {
          this.showCreateButtonWhenOptionsNoIncludeQuery();
        } else {
          this.isCreateButtonVisible.next(false);
        }

        if (this.options.length > 0 && this.currentQuery !== '') {
          this.selectedValue.emit(this.options[0]);
        } else {
          this.selectedValue.emit({});
        }
      })
    );
  }

  private showCreateButtonWhenOptionsNoIncludeQuery(): void {
    this.containsSearchValue() ? this.isCreateButtonVisible.next(false) : this.isCreateButtonVisible.next(true);
  }

  private containsSearchValue(): boolean {
    return this.currentQuery === '' ?? this.options.some((item) => item[this.comboBoxConfiguration.queryParamKey] === this.currentQuery);
  }

  public create(): void {
    if (this.comboBoxType === this.comboBoxTypes.SEARCH_AND_FIND) {
      return;
    }

    this.comboBoxService
      .create({ [this.comboBoxConfiguration.queryParamKey]: this.currentQuery }, this.comboBoxConfiguration.createUrl)
      .pipe(
        take(1),
        tap(() => this.isCreateButtonVisible.next(false))
      )
      .subscribe((res) => {
        this.options = res[this.comboBoxConfiguration.queryParamKey];
        this.selectedValue.emit(this.options[0]);
      });
  }
}

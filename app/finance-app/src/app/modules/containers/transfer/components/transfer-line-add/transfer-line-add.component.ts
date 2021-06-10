import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { share, startWith } from 'rxjs/operators';

import { TransferLine } from '../../model/transfer-line';

@Component({
  selector: 'app-transfer-line-add',
  templateUrl: './transfer-line-add.component.html',
  styleUrls: ['./transfer-line-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferLineAddComponent implements OnInit {
  @Input() public index: number;
  @Input() public transferLineForm: FormGroup;
  @Output() public deleteLine: EventEmitter<void> = new EventEmitter();

  formDetails$: Observable<TransferLine>;
  untilDestroy$: Subject<void>;

  constructor() {}

  ngOnInit(): void {
    this.formDetails$ = this.transferLineForm.valueChanges.pipe(startWith(this.transferLineForm.getRawValue()), share());
  }

  delete(): void {
    this.deleteLine.emit();
  }
}

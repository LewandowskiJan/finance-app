import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Account } from '../../model/Account';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.scss'],
})
export class AccountEditComponent implements OnInit {
  public accountForm: FormGroup;
  public checked: boolean = this.data.isActive;

  constructor(
    public dialogRef: MatDialogRef<AccountEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Account,
    private formBuilder: FormBuilder
  ) {}

  get name() {
    return this.accountForm.get('name');
  }

  get balance() {
    return this.accountForm.get('balance');
  }

  get isActive() {
    return this.accountForm.get('isActive');
  }

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.accountForm = this.formBuilder.group({
      _id: [this.data._id, Validators.required],
      name: [this.data.name, Validators.required],
      balance: [this.data.balance, Validators.required],
      isActive: [this.data.isActive, Validators.required],
    });
  }
}

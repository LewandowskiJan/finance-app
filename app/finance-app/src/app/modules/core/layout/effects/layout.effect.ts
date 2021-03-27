import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';

import { LayoutActions } from '../actions';
import { LayoutService } from '../service/layout.service';

@Injectable()
export class LayoutEffect {
  openAlertDialog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LayoutActions.openAlertDialog),
      switchMap(({ alert }) => this.layoutService.openAlertDialog(alert)),
      map((alert) => LayoutActions.openAlertDialogSuccess(alert))
    )
  );

  constructor(private actions$: Actions, private layoutService: LayoutService) {}
}

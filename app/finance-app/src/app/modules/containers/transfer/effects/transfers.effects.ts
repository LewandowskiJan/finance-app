import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Update } from '@ngrx/entity';

import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { Transfer } from '../model/transfer';
import { TransfersActions } from '../actions';
import { TransfersService } from '../services/transfers.service';

@Injectable()
export class TransfersEffects {
  readTransfers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransfersActions.readTransfers),
      switchMap(() =>
        this.transfersService.readTransfers().pipe(
          map((transfers: Transfer[]) => TransfersActions.readTransfersSuccess({ transfers })),
          catchError((error) => of(TransfersActions.readTransfersFailure({ error })))
        )
      )
    )
  );

  createTransfer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransfersActions.createTransfer),
      map((action) => action.transfer),
      switchMap((transfer: Transfer) =>
        this.transfersService.createTransfer(transfer).pipe(
          map((transfer: Transfer) => TransfersActions.createTransferSuccess({ transfer })),
          catchError((error) => of(TransfersActions.createTransferFailure({ error })))
        )
      )
    )
  );

  deleteTransfer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransfersActions.deleteTransfer),
      map((action) => action.id),
      switchMap((id: string) =>
        this.transfersService.deleteTransfer(id).pipe(
          map((id: string) => TransfersActions.deleteTransferSuccess({ id })),
          catchError((error) => of(TransfersActions.deleteTransferFailure({ error })))
        )
      )
    )
  );

  updateTransfer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TransfersActions.updateTransfer),
      map((action) => action.updatingTransfer),
      switchMap((updatingTransfer: Update<Transfer>) =>
        this.transfersService.updateTransfer(updatingTransfer).pipe(
          map((updatingTransfer: Update<Transfer>) => TransfersActions.updateTransferSuccess({ updatingTransfer })),
          catchError((error) => of(TransfersActions.updateTransferFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private transfersService: TransfersService) {}
}

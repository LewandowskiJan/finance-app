import { Injectable } from '@angular/core';

import { Actions } from '@ngrx/effects';

import { LayoutService } from './../service/layout.service';

@Injectable()
export class LayoutEffect {
  constructor(private actions$: Actions, private layoutService: LayoutService) {}
}

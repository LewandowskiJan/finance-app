import { Inject, Injectable } from '@angular/core';

import { SLIDE_PANEL_CONFIGURATION_TOKEN } from '../token/slide-panel-configuration-token';
import { SlidePanelConfiguration } from '../model/slide-panel-configuration';

@Injectable({
  providedIn: 'any',
})
export class SlidePanelService {
  constructor(@Inject(SLIDE_PANEL_CONFIGURATION_TOKEN) private slidePanelConfiguration: SlidePanelConfiguration) {}

  public getConfiguration(): SlidePanelConfiguration {
    return this.slidePanelConfiguration;
  }

  public prepareFormData(data: any): any {
    const result: any = {};

    for (const [key, value] of Object.entries(this.slidePanelConfiguration)) {
      if (value.hasOwnProperty('enable') && value.enable) {
        result[key] = !value.value && data[key];
      }
    }

    return result;
  }
}

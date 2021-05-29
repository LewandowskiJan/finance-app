import { TestBed } from '@angular/core/testing';

import { SLIDE_PANEL_CONFIGURATION_TOKEN } from '../token/slide-panel-configuration-token';
import { SlidePanelConfiguration } from '../model/slide-panel-configuration';
import { SlidePanelService } from './slide-panel.service';

import {} from 'jasmine';

const slidePanelConfigurationMock: SlidePanelConfiguration = {
  name: { enable: true, label: 'Category name' },
  alias: { enable: true, label: 'Category alias' },
  isExternal: { enable: false, label: 'Is external' },
  utfIcon: { enable: true, label: 'Icon' },
  button: { label: 'Add category' },
};

describe('SlidePanelService', () => {
  let service: SlidePanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: SLIDE_PANEL_CONFIGURATION_TOKEN, useValue: slidePanelConfigurationMock }],
    });
    service = TestBed.inject(SlidePanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

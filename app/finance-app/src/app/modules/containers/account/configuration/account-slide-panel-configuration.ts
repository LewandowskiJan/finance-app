import { SlidePanelConfiguration } from './../../../shared/slide-panel/model/slide-panel-configuration';

export const AccountSlidePanelConfiguration: SlidePanelConfiguration = {
  name: { enable: true, label: 'Account name' },
  alias: { enable: true, label: 'Account alias' },
  isExternal: { enable: true, label: 'Is external' },
  utfIcon: { enable: false, label: 'Icon' },
  button: { label: 'Add account' },
};

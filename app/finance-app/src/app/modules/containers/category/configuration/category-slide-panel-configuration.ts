import { SlidePanelConfiguration } from '../../../shared/slide-panel/model/slide-panel-configuration';

export const CategorySlidePanelConfiguration: SlidePanelConfiguration = {
  name: { enable: true, label: 'Category name' },
  alias: { enable: true, label: 'Category alias' },
  isExternal: { enable: false, label: 'Is external' },
  utfIcon: { enable: true, label: 'Icon' },
  button: { label: 'Add category' },
};

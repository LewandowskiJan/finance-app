import { SlidePanelConfiguration } from '../../model/slide-panel-configuration';

export class SlidePanelServiceMock {
  public getConfiguration(): SlidePanelConfiguration {
    return {
      name: { enable: true, label: 'Category name' },
      alias: { enable: true, label: 'Category alias' },
      isExternal: { enable: false, label: 'Is external' },
      utfIcon: { enable: true, label: 'Icon' },
      button: { label: 'Add category' },
    };
  }

  public prepareFormData(): any {
    return {};
  }
}

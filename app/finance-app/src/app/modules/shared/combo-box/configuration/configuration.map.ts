import { ComboBoxConfiguration } from './combo-box-configuration';
import { ComboBoxProcessType } from './combo-box-process-type.enum';

export const ComboBoxConfigurationMap: Map<ComboBoxProcessType, ComboBoxConfiguration> = new Map([
  [ComboBoxProcessType.ACCOUNT_SEARCH, { searchUrl: 'account/account/find', queryParamKey: 'name' }],
  [
    ComboBoxProcessType.CATEGORY_SEARCH_OR_CREATE,
    { searchUrl: 'dictionary/category/find', queryParamKey: 'alias', createUrl: 'dictionary/category/add' },
  ],
  [
    ComboBoxProcessType.GROUP_SEARCH_OR_CREATE,
    { searchUrl: 'dictionary/expensesgroup/find', queryParamKey: 'alias', createUrl: 'dictionary/expenses-group/add' },
  ],
  [
    ComboBoxProcessType.EVENT_SEARCH_OR_CREATE,
    { searchUrl: 'dictionary/event/find', queryParamKey: 'alias', createUrl: 'dictionary/event/add' },
  ],
  [
    ComboBoxProcessType.PROJECT_SEARCH_OR_CREATE,
    { searchUrl: 'dictionary/project/find', queryParamKey: 'alias', createUrl: 'dictionary/project/add' },
  ],
  [
    ComboBoxProcessType.PRODUCT_SEARCH_OR_CREATE,
    { searchUrl: 'dictionary/product/find', queryParamKey: 'alias', createUrl: 'dictionary/product/add' },
  ],
  [
    ComboBoxProcessType.TARGET_SEARCH_OR_CREATE,
    { searchUrl: 'dictionary/target/find', queryParamKey: 'alias', createUrl: 'dictionary/target/add' },
  ],
]);

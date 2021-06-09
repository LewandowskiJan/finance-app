import { createReducer, on } from '@ngrx/store';
import { Currency } from '../../../shared/models/currency.enum';

import { ConfigurationActions } from '../actions';
import { TransferConfiguration } from '../model/transfer-configuration';

export const transfersConfigurationFeatureKey = 'transfersConfiguration';

const initialConfiguration: TransferConfiguration = {
  accountFrom: '',
  accountFromName: '',
  accountTo: '',
  accountToName: '',
  currency: Currency.PLN,
  exchangeRate: '1',
  balance: '0',
  value: '0',
  date: new Date(),
};

const testConfiguration: TransferConfiguration = {
  accountFrom: '606604517506a15a68f32830',
  accountFromName: 'Delikatesy',
  accountTo: '6071783408842102e4d55704',
  accountToName: 'Konto Millenium',
  currency: Currency.PLN,
  exchangeRate: '1',
  balance: '1200',
  value: '100',
  date: new Date(),
};

export interface State {
  loaded: boolean;
  loading: boolean;
  failure: boolean;
  error: any;
  configuration: TransferConfiguration;
}

export const initialState: State = {
  loaded: false,
  loading: false,
  failure: false,
  error: null,
  configuration: {
    ...initialConfiguration,
    ...testConfiguration,
  },
};

export const reducer = createReducer(
  initialState,

  on(ConfigurationActions.createConfiguration, (state, { configuration }) => ({
    ...state,
    loading: false,
    loaded: true,
    failure: false,
    error: null,
    configuration: configuration,
  })),

  on(ConfigurationActions.getConfiguration, (state) => ({
    ...state,
    loading: false,
    loaded: true,
    failure: false,
    error: null,
  }))
);

import React, { useEffect} from 'react'

import { Provider } from 'react-redux';
import {IntlProvider} from 'react-intl-redux'
import {FormattedMessage} from 'react-intl-native'

import appStore from '@store/createStore'

// <FormattedMessage id={'hello:world'}/>
export default function App () {
  const store = appStore();

  useEffect(() => {
      store.dispatch({ type: '@FXCROWD_IS_READY' });
  }, []);

  return (
      <Provider store={store}>
          <IntlProvider key={store.getState().intl.locale}>
              <FormattedMessage id={'hello:world'}/>
          </IntlProvider>
      </Provider>
  );
};

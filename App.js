import React, { useEffect} from 'react'

import { Provider } from 'react-redux';
import {IntlProvider} from 'react-intl-redux'

import appStore from '@store/createStore'
import FxRootNavigation from '@navigation/FxRootNavigation';
import 'intl'
export default function App () {
  const store = appStore();
  const { intl: { locale, messages }} = store.getState();

  useEffect(() => {
      store.dispatch({ type: '@FXCROWD_IS_READY' });
  }, []);

  return (
      <Provider store={store}>
          <IntlProvider key={locale} messages={messages} >
              <FxRootNavigation />
          </IntlProvider>
      </Provider>
  );
};

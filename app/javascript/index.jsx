import React from 'react';
import * as ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
// import gon from 'gon';

import { rootReducer } from './slices';
import resources from './locales/locales.js';
import { App } from './App.jsx';

export default async () => {
  const defaultlanguage = 'ru';
  await i18next.use(initReactI18next).init({
    lng: defaultlanguage,
    debug: false,
    resources,
  });
  const store = configureStore({
    reducer: rootReducer,
  });

  // store.dispatch(setupState(gon));
  const rootNode = document.getElementById('main');
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootNode,
  );
};

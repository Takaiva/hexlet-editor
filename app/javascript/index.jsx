import React from 'react';
import * as ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import gon from 'gon';

import { rootReducer } from './slices';
import resourses from './locales/locales.js';
import { App } from './App.jsx';

export default async () => {
  const defaultLanguage = 'ru';
  await i18n.use(initReactI18next).init({
    lng: defaultLanguage,
    debug: false,
    resourses,
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

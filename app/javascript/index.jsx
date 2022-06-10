import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// import gon from 'gon';

import { rootReducer } from './slices';
import { App } from './App.jsx';

export default () => {
  const store = configureStore({
    reducer: rootReducer,
  });

  // store.dispatch(setupState(gon));
  const root = ReactDOM.createRoot(document.getElementById('main'));
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

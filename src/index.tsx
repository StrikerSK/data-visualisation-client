import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './lib/reducers';
import './styles/styles.scss';

const store = createStore(allReducers);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

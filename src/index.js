import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'styles/CreateGlobalStyle';
import { Provider } from 'react-redux';
import { persistor, store } from './myRedux/store';
import { App } from 'components';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <GlobalStyle />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { GlobalStyle } from 'styles/CreateGlobalStyle';
import { Provider } from 'react-redux';
import { /*  persistor, */ store } from './myRedux/store';
import { App } from 'components';
// import { PersistGate } from 'redux-persist/integration/react';
import { darkTheme, lightTheme } from 'styles/theme';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={'theme' ? darkTheme : lightTheme}> */}
    <ThemeProvider theme={'theme' ? lightTheme : darkTheme}>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);

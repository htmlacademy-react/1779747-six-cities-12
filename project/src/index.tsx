import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import {Provider} from 'react-redux';
import App from './components/app/app';
import { store } from './store/index';
import HistoryRouter from './components/history-router/history-router';
import browserHistory from './browser-history';
import { fetchOfferAction } from './store/api-action';

store.dispatch(fetchOfferAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <HistoryRouter history={browserHistory}>
      <Provider store={store}>
        {/* <ErrorMessage /> */}
        <ToastContainer />
        <App />
      </Provider>
    </HistoryRouter>
  </React.StrictMode>,
);

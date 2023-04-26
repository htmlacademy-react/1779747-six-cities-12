import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import {Provider} from 'react-redux';
import App from './components/app/app';
import { store } from './store/index';
import ErrorMessage from './components/error-message/error-message';
import { fetchOfferAction } from './store/api-action';
import 'react-toastify/dist/ReactToastify.css';


store.dispatch(fetchOfferAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
);

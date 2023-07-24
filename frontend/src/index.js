import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { ProSidebarProvider } from "react-pro-sidebar";
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProSidebarProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ProSidebarProvider>
  </React.StrictMode>
);
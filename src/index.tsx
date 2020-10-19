import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './container/dashboard';

import { DashboardContextProvider } from './context/dashboard-context';

ReactDOM.render(
  <React.StrictMode>
    <DashboardContextProvider>
      <Dashboard />
    </DashboardContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
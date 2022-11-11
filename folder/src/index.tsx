import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from 'src/App';

import { serviceWorker } from './server/browser';
void serviceWorker.start({ onUnhandledRequest: 'bypass' });

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
  <RecoilRoot>
    <Router>
      <App />
    </Router>
  </RecoilRoot>
);

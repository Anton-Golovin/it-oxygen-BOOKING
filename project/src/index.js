// Core
import React from 'react';
import { render } from 'react-dom';

// Instruments
import AppProvider from './ui/containers/App/AppProvider';
import * as serviceWorker from './serviceWorker';

render(<AppProvider />, document.getElementById('root'));

serviceWorker.register();

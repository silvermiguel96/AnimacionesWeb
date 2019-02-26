import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Invie from './Invie';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Invie />, document.getElementById('root'));

serviceWorker.unregister();

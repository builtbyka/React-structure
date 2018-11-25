import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import AppRoutes from "./routes";
import store from "./store";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <AppRoutes />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {
    HashRouter
} from 'react-router-dom';
import App from './App.jsx';
import configureStore from './config/configureStore';
import { Provider } from 'react-redux';
import { i18n } from 'element-react'
import locale from 'element-react/src/locale/lang/en'
import 'element-theme-default'
import NetworkService from "./utils/network-service"

i18n.use(locale);

const store = configureStore();
NetworkService.setupInterceptors(store);
const rootElement = document.getElementById('root');

const renderApp = Component => {
    ReactDOM.render(
        <Provider store={store} >
            <HashRouter>
                <Component />
            </HashRouter>
        </Provider>,
        rootElement
    );
};

renderApp(App);

if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const NextApp = require('./App.jsx').default;
        renderApp(NextApp);
    });
}

registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './redux/create'

const MyApp = () => (
    <Provider store={store} >
        <App />
    </Provider>
)

ReactDOM.render(<MyApp />, document.getElementById('root'));
registerServiceWorker();

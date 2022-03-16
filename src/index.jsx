import React from 'react';
import {render} from 'react-dom';
import { App } from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/index';
import { PersistGate } from 'redux-persist/integration/react';
import './index.scss';

render(
	<Provider store={store}>
		{/* <PersistGate persistor={persistor}> */}
			<App/>
		{/* </PersistGate> */}
	</Provider>,
	document.getElementById('root')
)
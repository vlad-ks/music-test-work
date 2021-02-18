import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import IconSet from "./Components/IconSet";

import "./scss/main.scss"


ReactDOM.render(
	<React.StrictMode>
		<IconSet/>
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
);
import React from 'react';
import { render } from 'react-dom';
import SidebarLeftScaleDown from './Layouts/SidebarLeftScaleDown';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
	<Router>
	<div>
	<SidebarLeftScaleDown />
	</div>
	</Router>
	);

render(<App />, document.getElementById('root'));

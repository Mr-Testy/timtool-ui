import React from 'react';
import { Header, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const PageTitle = props => (
	<Header as="h1" icon textAlign='center'>
	<Icon name={props.icon} circular size='tiny'/>
	{props.pageTitle}
	<Header.Subheader>{props.subheader}</Header.Subheader></Header>
	);

export default PageTitle;

PageTitle.propTypes = {
	pageTitle: PropTypes.string.isRequired,
	subheader: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
};

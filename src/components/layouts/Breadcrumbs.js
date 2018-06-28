import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumbs = props => {
	let content = [];
	for (let i = 0; i < props.nav.length; i++) {
		if (i + 1 === props.nav.length) {
			content.push(
				<Breadcrumb.Section
				as={NavLink}
				onClick={() => props.rollBackNavBar(i)}
				to={props.nav[i][0]}
				key={props.nav[i][1]}
				>
				{props.nav[i][1]}
				</Breadcrumb.Section>
				);
		} else {
			content.push(
				<React.Fragment>
				<Breadcrumb.Section
				as={NavLink}
				onClick={() => props.rollBackNavBar(i)}
				to={props.nav[i][0]}
				>
				{props.nav[i][1]}
				</Breadcrumb.Section>
				<Breadcrumb.Divider />
				</React.Fragment>
				);
		}
	}

	return <Breadcrumb size='small'>{content}</Breadcrumb>;
};

export default Breadcrumbs;

Breadcrumbs.propTypes = {
	nav: PropTypes.array.isRequired,
	rollBackNavBar: PropTypes.func.isRequired
};

import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Breadcrumbs = ({pages, rollBackBreadcrumb}) => {
	let content = [];
	for (let i = 0; i < pages.length; i++) {
		if (i + 1 === pages.length) {
			content.push(
				<Breadcrumb.Section
				as={NavLink}
				onClick={() => rollBackBreadcrumb(i)}
				to={pages[i].path}
				key={pages[i].path}
				>
				{pages[i].title}
				</Breadcrumb.Section>
				);
		} else {
			content.push(
				<React.Fragment>
				<Breadcrumb.Section
				as={NavLink}
				onClick={() => rollBackBreadcrumb(i)}
				to={pages[i].path}
				>
				{pages[i].title}
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
	pages: PropTypes.array.isRequired,
	rollBackBreadcrumb: PropTypes.func.isRequired
};

import React from 'react'
import PropTypes from 'prop-types'
import {Header, Icon} from 'semantic-ui-react'

const PageHeader = ({breadcrumb}) => (
	<Header as='h1' icon textAlign='center' style={{marginTop: '5px'}}>
	<Icon name={breadcrumb.pages.slice(-1)[0].icon} circular/>
	<Header.Content>
	{breadcrumb.pages.slice(-1)[0].title}
	<Header.Subheader>{breadcrumb.pages.slice(-1)[0].subTitle}</Header.Subheader>
	</Header.Content>
	</Header>
	)

PageHeader.propTypes = {
	breadcrumb: PropTypes.object.isRequired
}

export default PageHeader
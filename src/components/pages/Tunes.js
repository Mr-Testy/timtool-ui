import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'semantic-ui-react'

import ListOfTunesContainer from '../../containers/elements/ListOfTunesContainer'

const Tunes = ({tunes, isFetching, lastUpdated}) => (
	<Container>
	<p>
	{lastUpdated &&
		<span>
		Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
		{' '}
		</span>
	}
	</p>
	{isFetching && tunes.length === 0 && <h2>Loading...</h2>}
	{!isFetching && tunes.length === 0 && <h2>Empty.</h2>}
	{tunes.length > 0 &&
		<ListOfTunesContainer />
	}
	</Container>
	)

Tunes.propTypes = {
	tunes: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	lastUpdated: PropTypes.number,
}

export default Tunes
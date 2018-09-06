import React from 'react'
import PropTypes from 'prop-types'
import { Container, Loader, Segment } from 'semantic-ui-react'

import ListOfTunesContainer from '../../containers/elements/ListOfTunesContainer'
import ListOfTunesFiltersContainer from '../../containers/elements/ListOfTunesFiltersContainer'

const Tunes = ({tunes, isFetching, lastUpdated}) => (
	<Container >
	<p>
	{lastUpdated &&
		<span>
		Last list of tunes update: {new Date(lastUpdated).toLocaleTimeString()}.
		{' '}
		</span>
	}
	</p>
	<ListOfTunesFiltersContainer />
	{isFetching && tunes.length === 0 &&
		<Segment textAlign="center">       
		<Loader active inline>Loading Tunes</Loader>
		</Segment>
	}
	{!isFetching && tunes.length === 0 && <h2>No tune. You should reinit filters.</h2>}
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
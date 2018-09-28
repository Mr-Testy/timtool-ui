import React from 'react'
import PropTypes from 'prop-types'
import { Container, Loader, Segment } from 'semantic-ui-react'

import ListOfFavoritedTunesContainer from '../../containers/elements/ListOfFavoritedTunesContainer'
import ListOfFavoritedTunesFiltersContainer from '../../containers/elements/ListOfFavoritedTunesFiltersContainer'

const MyTunes = ({tunes, isFetching, lastUpdated}) => (
	<Container >
	<p>
	{lastUpdated &&
		<span>
		Last list of favourite tunes update: {new Date(lastUpdated).toLocaleTimeString()}.
		{' '}
		</span>
	}
	</p>
	<ListOfFavoritedTunesFiltersContainer />
	{isFetching && tunes.length === 0 &&
		<Segment textAlign="center">       
		<Loader active inline>Loading Tunes</Loader>
		</Segment>
	}
	{!isFetching && tunes.length === 0 && <h2>No tune. You should reinit filters.</h2>}
	{tunes.length > 0 &&
		<ListOfFavoritedTunesContainer />
	}
	</Container>
	)

MyTunes.propTypes = {
	tunes: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	lastUpdated: PropTypes.number,
}

export default MyTunes
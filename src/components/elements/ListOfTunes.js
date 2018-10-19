import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, 
	Card, 
	Divider, 
	Loader, 
	Transition
} from 'semantic-ui-react'
import TuneDetailsContainer from '../../containers/elements/TuneDetailsContainer'
import FavoriContainer from '../../containers/elements/FavoriContainer'
import StatusContainer from '../../containers/elements/StatusContainer'

const ListOfTunes = ({
	tunes,
	activePage,
	tunesPerPage,
	selectedTune,
	requestedTune,
	isFetchingTune,
	lastUpdatedTune,
	changePageOfTunes,
	fetchTune,
	switchFavori,
}) => (
<React.Fragment>
<Card.Group>
{tunes.slice(((activePage-1)*tunesPerPage), ((activePage*tunesPerPage)-1)).map(tune => (
	<React.Fragment key={tune.slug}>
	<Card 
	link 
	centered 
	onClick={(requestedTune !== tune.slug) ? () => fetchTune(tune.slug) : null} 
	color={requestedTune === tune.slug ? "green" : null} 
	fluid>
	<Card.Content>
	<FavoriContainer tune={tune}/>
	<StatusContainer tune={tune}/>
	<Card.Header>{tune.name}</Card.Header>
	<Card.Meta>{tune.type} | {tune.key}</Card.Meta>
	<Transition 
	visible={(requestedTune === tune.slug) && !isFetchingTune} 
	animation='fade' duration={500}>
	<Card.Description>
	<TuneDetailsContainer />
	</Card.Description>
	</Transition>
	{((requestedTune === tune.slug) && isFetchingTune) &&
		<Card.Description>
		<Loader active inline>Loading details</Loader>
		</Card.Description>
	}
	</Card.Content>
	{ ((requestedTune === tune.slug) && !isFetchingTune) &&
		<Card.Content extra>
		Last updated : {new Date(lastUpdatedTune).toLocaleTimeString()}
		</Card.Content>
	}
	</Card>
	</React.Fragment>
	))}
</Card.Group>
<Divider />
<Pagination 
activePage={activePage} 
totalPages={Math.ceil(tunes.length/tunesPerPage)} 
onPageChange={(e,i) => changePageOfTunes(i.activePage)}/>
</React.Fragment>
)

ListOfTunes.propTypes = {
	tunes: PropTypes.array.isRequired,
	activePage: PropTypes.number.isRequired,
	selectedTune: PropTypes.object.isRequired,
	requestedTune: PropTypes.string,
	isFetchingTune: PropTypes.bool.isRequired,
	lastUpdated: PropTypes.number,
	tunesPerPage: PropTypes.number.isRequired,
	changePageOfTunes: PropTypes.func.isRequired,
	fetchTune: PropTypes.func.isRequired,
}

export default ListOfTunes
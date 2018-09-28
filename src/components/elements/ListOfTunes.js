import React from 'react'
import PropTypes from 'prop-types'
import { Pagination, 
	Card, 
	Icon, 
	Image, 
	Divider, 
	Loader, 
	Transition
} from 'semantic-ui-react'
import TuneDetailsContainer from '../../containers/elements/TuneDetailsContainer'

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
	isLogged,
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
	{ isLogged &&
	<Image floated='right' onClick={(e) => {e.stopPropagation(); switchFavori(tune.slug);}}>
	<Icon size='big' name="heart" link/>
	</Image>
	}
	{ !isLogged &&
	<Image floated='right' onClick={(e) => {e.stopPropagation();}}>
	<Icon size='big' name="heart" link/>
	</Image>
	}
	{ tune.hasOwnProperty("status") &&
	<React.Fragment>
	{ tune.status && (
			<Image floated='right' onClick={(e) => {e.stopPropagation(); alert("learned");}}>
			<Icon size='big' name="thumbs up" link/>
			</Image>
			)
	}
	{ !tune.status && (
			<Image floated='right' onClick={(e) => {e.stopPropagation(); alert("learned");}}>
			<Icon size='big' name="thumbs down" link/>
			</Image>
			)		
	}
	</React.Fragment>
	}
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
	switchFavori: PropTypes.func.isRequired,
	isLogged: PropTypes.bool.isRequired
}

export default ListOfTunes
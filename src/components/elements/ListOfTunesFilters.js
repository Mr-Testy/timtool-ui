import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form, Segment, Header } from 'semantic-ui-react'

const ListOfTunesFilters = ({filters, filterTunesByName, filterTunesByKey, filterTunesByType, reinitTuneFilters}) => (
	<Segment inverted>
	<Header as='h2'>Filters</Header>
	<Form inverted>
	<Form.Group widths='equal'>
	<Form.Input fluid label='Name' placeholder='Wind that shakes...' onChange={(e,i) => filterTunesByName(i.value)} value={filters["name"]}/>
	<Form.Input fluid label='Key' placeholder='Ador, D...' onChange={(e,i) => filterTunesByKey(i.value)} value={filters["key"]}/>
	<Form.Input fluid label='Type' placeholder='jig, barndance...' onChange={(e,i) => filterTunesByType(i.value)} value={filters["type"]}/>
	</Form.Group>
	<Button onClick={() => reinitTuneFilters()}>Reinit</Button>
	</Form>
	</Segment>
	)

ListOfTunesFilters.propTypes = {
	filters: PropTypes.object.isRequired,
	filterTunesByName: PropTypes.func.isRequired,
	filterTunesByKey: PropTypes.func.isRequired,
	filterTunesByType: PropTypes.func.isRequired,
	reinitTuneFilters: PropTypes.func.isRequired,
}

export default ListOfTunesFilters
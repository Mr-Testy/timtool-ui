import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line
import { Button, Form, Segment, Header, Modal, List, Dropdown } from 'semantic-ui-react'

const ListOfTunesFilters = ({
	filters,
	isFilterForFavoritedTunes,
	filterTunesByName,
	filterTunesByKey,
	filterTunesByType,
	reinitTuneFilters,
	filterTunesByLearned
	}) => (
	<Segment inverted>
	<Header as='h2'>Filters</Header>
	<Form inverted>
	<Form.Group widths='equal'>
	<Form.Input fluid label='Name' placeholder='Wind that shakes...' onChange={(e,i) => filterTunesByName(i.value)} value={filters["name"]}/>
	<Form.Input fluid label='Key' placeholder='Ador, D...' onChange={(e,i) => filterTunesByKey(i.value)} value={filters["key"]}/>
	<Form.Input fluid label='Type' placeholder='jig, barndance...' onChange={(e,i) => filterTunesByType(i.value)} value={filters["type"]}/>
	{ isFilterForFavoritedTunes &&
	<Form.Dropdown placeholder='Choose' label='Learned ?' fluid selection options={[
  		{
    	text: 'Choose',
    	value: 'Choose',
  		},
   		{
    	text: 'Learned',
    	value: 'Learned',
  		},
    	{
    	text: 'Not learned',
    	value: 'Not learned',
  		},
	]}
	onChange={(e,i) => filterTunesByLearned(i.value)} 
	value={filters["learned"]}
	/>
	}
	</Form.Group>
	<Button primary onClick={() => reinitTuneFilters()}>Reinit</Button>
	<Modal trigger={<Button>Help</Button>} closeIcon>
	<Modal.Header>Help about filters</Modal.Header>
	<Modal.Content >
	<Modal.Description>
	<Header size="small">Functionnalities</Header>
	<List as='ol'>
	<List.Item as='li'>Search by name
	<List.List as='ol'>
	<List.Item as='li'>The search goes through main and secondary titles</List.Item>
	</List.List>
	</List.Item>
	<List.Item as='li'>Search by key</List.Item>
	<List.Item as='li'>Search by type</List.Item>
	<List.Item as='li'>Use multiple criterias</List.Item>
	<List.Item as='li'>Case insensitive</List.Item>
	<List.Item as='li'>Reinit filters</List.Item>
	<List.Item as='li'>Is Learned ?
	<List.List as='ol'>
	<List.Item as='li'>Only appears in "MyTunes" list</List.Item>
	<List.Item as='li'>"Choose" means the filter is not used</List.Item>
	<List.Item as='li'>"Learned" means it filters tunes that you have learned</List.Item>
	<List.Item as='li'>"Not Learned" means it filters tunes that you have not learned</List.Item>
	</List.List>
	</List.Item>
	</List>
	</Modal.Description>
	</Modal.Content>
	</Modal>
	</Form>
	</Segment>
	)

ListOfTunesFilters.propTypes = {
	filters: PropTypes.object.isRequired,
	isFilterForFavoritedTunes : PropTypes.bool.isRequired,
	filterTunesByName: PropTypes.func.isRequired,
	filterTunesByKey: PropTypes.func.isRequired,
	filterTunesByType: PropTypes.func.isRequired,
	reinitTuneFilters: PropTypes.func.isRequired,
	filterTunesByLearned: PropTypes.func,
}

export default ListOfTunesFilters
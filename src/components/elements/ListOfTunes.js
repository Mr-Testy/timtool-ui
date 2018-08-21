import React from 'react'
import PropTypes from 'prop-types'
import { Table, Pagination } from 'semantic-ui-react'

const ListOfTunes = ({tunes, activePage, tunesPerPage, changePageOfTunes}) => (
	<div>
	<Table celled selectable compact='very' striped unstackable>
	<Table.Header>
	<Table.Row>
	<Table.HeaderCell>Name</Table.HeaderCell>
	<Table.HeaderCell>Key</Table.HeaderCell>
	<Table.HeaderCell>Type</Table.HeaderCell>
	</Table.Row>
	</Table.Header>

	<Table.Body>
	{tunes.slice(((activePage-1)*tunesPerPage), ((activePage*tunesPerPage)-1)).map(tune => (
		<Table.Row key={tune.slug}>
		<Table.Cell>{tune.name}</Table.Cell>
		<Table.Cell>{tune.key}</Table.Cell>
		<Table.Cell>{tune.type}</Table.Cell>
		</Table.Row>
		))}
	</Table.Body>
	</Table>
	<Pagination activePage={activePage} totalPages={Math.ceil(tunes.length/tunesPerPage)} onPageChange={(e,i) => changePageOfTunes(i.activePage)}/>
	</div>
	)

ListOfTunes.propTypes = {
	tunes: PropTypes.array.isRequired,
	activePage: PropTypes.number.isRequired,
	tunesPerPage: PropTypes.number.isRequired,
	changePageOfTunes: PropTypes.func.isRequired,
}

export default ListOfTunes
import React from 'react'
import PropTypes from 'prop-types'

const Tunes = ({tunes, isFetching, lastUpdated}) => (
	<div>
	<div>
	content de tune quoi
	</div>
	<p>
	{lastUpdated &&
		<span>
		Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
		{' '}
		</span>}
		</p>
		{isFetching && tunes.length === 0 && <h2>Loading...</h2>}
		{!isFetching && tunes.length === 0 && <h2>Empty.</h2>}
		{tunes.length > 0 &&
			<div>
			{tunes.map(tune => (
				<div key={tune.slug}>
				<p>{tune.name} en {tune.key}, {tune.type}</p>
				</div>
				))}
			</div>}
			</div>
			)

Tunes.propTypes = {
	tunes: PropTypes.array.isRequired,
	isFetching: PropTypes.bool.isRequired,
	lastUpdated: PropTypes.number
}

export default Tunes
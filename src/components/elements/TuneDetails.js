import React from 'react'
import PropTypes from 'prop-types'
import { Header, 
	List, 
} from 'semantic-ui-react'
import ABCDetailsContainer from '../../containers/elements/ABCDetailsContainer'

const ListOfTunes = ({
	selectedTune,
}) => (
<React.Fragment>
{selectedTune.titles.length > 1 &&
	<React.Fragment>
	<Header size="small">
	Autres titres : 
	</Header>
	<List>
	{selectedTune.titles.map((title) => (
		<React.Fragment key={title.name}>
		{title.name !== selectedTune.name &&
			<List.Item>{title.name}</List.Item>
		}
		</React.Fragment>
		))
}
</List>
</React.Fragment>
}
<React.Fragment>
<Header size="small">
Versions : 
</Header>
{selectedTune.abcs.map((abc) => (
	<ABCDetailsContainer abc={abc} key={selectedTune.slug+"_"+abc.id}/>
	))
}
</React.Fragment>
</React.Fragment>
)

ListOfTunes.propTypes = {
	selectedTune: PropTypes.object.isRequired,
}

export default ListOfTunes
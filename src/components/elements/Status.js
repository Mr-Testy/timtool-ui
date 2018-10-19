import React from 'react'
import { 
  Image, 
  Icon,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'

function ChooseIcon(props) {
  if ((props.tune.slug === props.requestedStatus) && (props.isFetchingSwitchStatus || props.isFetchingFavouritedTunes)) {
    return <Icon size='big' loading name='spinner' />;
  } else {
    if (props.tune.status) {
      return <Icon size='big' name="thumbs up" link/>
    } else {
      return <Icon size='big' name="thumbs down" link/>
    }
  }
}

const Status = ({
  tune,
  switchStatus,
  isLogged,
  isFetchingSwitchStatus,
  isFetchingFavouritedTunes,
  requestedStatus,
}) => (
<React.Fragment>
      { (tune.hasOwnProperty("status") && isLogged) &&
          <Image floated='right' onClick={(e) => {e.stopPropagation(); switchStatus(tune.slug)}}>
          <ChooseIcon
            tune={tune}
            isFetchingSwitchStatus={isFetchingSwitchStatus}
            isFetchingFavouritedTunes={isFetchingFavouritedTunes}
            requestedStatus={requestedStatus}
            />
          </Image>
}
  </React.Fragment>
  )

Status.propTypes = {
  tune: PropTypes.object.isRequired,
  switchStatus: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isFetchingSwitchStatus: PropTypes.bool.isRequired,
  isFetchingFavouritedTunes: PropTypes.bool.isRequired,
  requestedStatus: PropTypes.string.isRequired,
}

export default Status
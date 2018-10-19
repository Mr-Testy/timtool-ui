import React from 'react'
import { 
  Image, 
  Icon,
  Modal,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import LoginContainer from '../../containers/elements/LoginContainer'
import _ from 'lodash'

const isTuneInList = (slug, list) => {
  let finalList = _.filter(list, (tune) => {
    return tune.slug === slug
  });
  if (finalList.length === 0) {
    return false;
  } else {
    return true;
  }
}

function ChooseIcon(props) {
  if ((props.tune.slug === props.requestedFavori) && (props.isFetchingSwitchFavori || props.isFetchingFavouritedTunes)) {
    return <Icon size='big' loading name='spinner' />;
  } else {
    if (props.isFavourited) {
      return <Icon size='big' name="heart" link/>
    } else {
      return <Icon size='big' name="heart outline" link/>
    }
  }
}

class Favori extends React.Component { 
  state = { 
    isFavourited: isTuneInList(this.props.tune.slug, this.props.favouritedTunes)
    }

componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (JSON.stringify(prevProps) !== JSON.stringify(this.props) ) {
    this.setState((prevState) => {
      return {
        isFavourited: isTuneInList(this.props.tune.slug, this.props.favouritedTunes)
      };
  });
  }
}

  handleItemClick = (slug) => {
    this.props.switchFavori(slug)
}

  render () {
    const {
      isFavourited,
      } = this.state
      const {
        isLogged,
        tune,
        requestedFavori,
        isFetchingFavouritedTunes,
        isFetchingSwitchFavori
      } = this.props
    return (
      <React.Fragment>
        { isLogged &&
          <Image floated='right' onClick={(e) => {e.stopPropagation(); this.handleItemClick(tune.slug);}}>
          <ChooseIcon
            tune={tune}
            requestedFavori={requestedFavori}
            isFetchingSwitchFavori={isFetchingSwitchFavori}
            isFetchingFavouritedTunes={isFetchingFavouritedTunes}
            isFavourited={isFavourited}
            />
          </Image>
        }
  { !isLogged &&
            <Modal trigger={
                <Image floated='right' onClick={(e) => {e.stopPropagation();}}>
  <Icon size='big' name="heart outline" link/>
  </Image>
            }>
        <Modal.Header>Log in/Sign up to Timtool</Modal.Header>
        <Modal.Content>
        <Modal.Description>
        <LoginContainer message="Connectez-vous afin de pouvoir ajouter des tunes à vos favoris"/>
        </Modal.Description>
        </Modal.Content>
        </Modal>
  }
  </React.Fragment>
)
  }
}

Favori.propTypes = {
  favouritedTunes: PropTypes.array,
  isLogged: PropTypes.bool.isRequired,
  tune: PropTypes.object.isRequired,
  switchFavori: PropTypes.func.isRequired,
  requestedFavori: PropTypes.string.isRequired,
  isFetchingSwitchFavori: PropTypes.bool.isRequired,
  isFetchingFavouritedTunes: PropTypes.bool.isRequired,
}

export default Favori
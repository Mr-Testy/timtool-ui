import React from 'react'
import { 
  Image, 
  Menu,
  Icon,
  TextArea,
  Divider,
  Form,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import ReactAudioPlayer from 'react-audio-player';

class ABCDetails extends React.Component { 
  state = { activeItem: 'gamepad' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const {
      selectedTune,
      abc
    } = this.props
    const { activeItem } = this.state
    return (
      <React.Fragment>
      <Menu pointing borderless compact>
      <Menu.Item header>
      Version de {abc.version}
      </Menu.Item>
      <Menu.Item 
      name='music' 
      active={activeItem === 'music'} 
      onClick={this.handleItemClick}
      >
      <Icon name='music' />
      </Menu.Item>

      <Menu.Item
      name='align left'
      active={activeItem === 'align left'}
      onClick={this.handleItemClick}
      >
      <Icon name='align left' />
      </Menu.Item>

      <Menu.Item
      name='file audio'
      active={activeItem === 'file audio'}
      onClick={this.handleItemClick}
      >
      <Icon name='file audio' />
      </Menu.Item>
      </Menu>
      <Divider hidden clearing/>
      { activeItem === "music" && 
      <Image 
      src={"https://files.timtool.ovh/tune_svg/"+selectedTune.slug+"-"+abc.version+".svg"} 
      fluid
      />
    }
    { activeItem === "align left" &&
    <Form> 
    <TextArea
    autoHeight
    value={abc.content}
    />
    </Form>
  }
  { activeItem === "file audio" &&
  <ReactAudioPlayer
  src={"https://files.timtool.ovh/tune_midi/"+selectedTune.slug+"-"+abc.version+".mid"}
  autoPlay
  controls
  />
}
</React.Fragment>
)
  }
}

ABCDetails.propTypes = {
  selectedTune: PropTypes.object.isRequired,
}

export default ABCDetails
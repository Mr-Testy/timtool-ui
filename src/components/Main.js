import React from 'react';
import HeaderContainer from '../containers/HeaderContainer'

const toggle = ( actions, sideBarIsVisible) =>
{
  if (sideBarIsVisible === false) {
    return null
  } else {
    return actions.switchVisibleSideBarOff
  }
}

const Main = ({ actions, sideBarIsVisible }) => {
  return (<div onClick={toggle( actions, sideBarIsVisible)}>
    <HeaderContainer />
    <p>lol</p>
    <p>lol</p>
    <p>lol</p>
    <p>lol</p>
    <p>lol</p>
    <p>lol</p>
    <p>lol</p>
    <p>lol</p>
    <p>lol</p>
    <p>lol</p>
    <p>lol</p>
    </div>
    )
}

export default Main
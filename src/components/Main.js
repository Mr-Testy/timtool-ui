import React from 'react';
import HeaderContainer from '../containers/HeaderContainer'
import Footer from './Footer'
import Content from './Content'

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
    <Content />
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
    <Footer />
    </div>
    )
}

export default Main
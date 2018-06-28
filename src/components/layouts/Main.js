import React from 'react';
import Footer from './Footer'
import Content from './Content'
import Header from './Header'
import BreadcrumbsContainer from '../../containers/layouts/BreadcrumbsContainer'

const toggle = ( switchVisibleSideBarOff, switchVisibleSideBarOn, sideBarIsVisible) =>
{
  if (sideBarIsVisible === false) {
    return null
} else {
    return switchVisibleSideBarOff
}
}

const Main = ({ switchVisibleSideBarOff, switchVisibleSideBarOn, sideBarIsVisible, double }) => {
    return (<div onClick={toggle( switchVisibleSideBarOff, switchVisibleSideBarOn, sideBarIsVisible)}>
        <Header sideBarIsVisible={sideBarIsVisible} switchVisibleSideBarOn={switchVisibleSideBarOn} switchVisibleSideBarOff={switchVisibleSideBarOff} double={double}/>
        <BreadcrumbsContainer />
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
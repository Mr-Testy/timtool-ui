import React from 'react';
import Footer from './Footer'
import Content from './Content'
import Header from './Header'

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
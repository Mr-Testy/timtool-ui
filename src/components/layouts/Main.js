import React from 'react';
import PropTypes from 'prop-types'

// import {
//     Container,
// } from 'semantic-ui-react';

import Footer from './Footer'
import ContentContainer from '../../containers/layouts/ContentContainer'
import HeaderContainer from '../../containers/layouts/HeaderContainer'
import BreadcrumbsContainer from '../../containers/layouts/BreadcrumbsContainer'
import PageHeaderContainer from '../../containers/pages/PageHeaderContainer'

const toggle = ( switchVisibleSideBarOff, sideBarIsVisible) =>
{
  if (sideBarIsVisible === false) {
    return null
} else {
    return switchVisibleSideBarOff
}
}

const Main = ({ switchVisibleSideBarOff, sideBarIsVisible }) => {
    return (
        <div onClick={toggle( switchVisibleSideBarOff, sideBarIsVisible)}>
        <HeaderContainer />
        <div style={{ marginTop: '5em' }}>
        <BreadcrumbsContainer />
        <PageHeaderContainer />
        <ContentContainer />
        <Footer />
        </div>
        </div>
        )
}


Main.propTypes = {
    sideBarIsVisible: PropTypes.bool.isRequired,
    switchVisibleSideBarOff: PropTypes.func.isRequired,
}
export default Main
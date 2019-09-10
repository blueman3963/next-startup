import React, { Component } from 'react'

import Nav from './Nav'
import { initGA, logPageView } from '../utils/analytics'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

class Layout extends Component {
  
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView()
  }

  render() {
    return (
      <div style={layoutStyle}>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

export default Layout;

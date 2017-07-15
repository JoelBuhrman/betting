import React from 'react'
import {Link } from 'react-router-dom'

const styles = {
  toolbarStyle: {
    height: 100,
    widht: '100%',
    color: 'white',
    position: 'relative',
    bottom: '-30',
  },
  titleStyle: {
    fontSize: '50px',
    marginTop: '50%',
    position: 'relative',
  },
  rightPartSpan: {
    float: 'right',
    fontSize: 20,
    marginTop: 25,
  }
}

export default class Toolbar extends React.Component {


  render () {
    return(
      <div style={styles.toolbarStyle}>
        <span style={styles.titleStyle}>Betswe</span>
        <span style={styles.rightPartSpan}>
          <Link to="/"><span>Betta</span></Link>
          <span style={{ marginLeft: 50} }>
          <Link to="/table"> Tabell </Link></span>
          <span style={{ marginLeft: 50 }}>Logga in</span>
        </span>
      </div>
    )
  }
}

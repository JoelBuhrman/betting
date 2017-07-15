import React from 'react'
import TextField from 'material-ui/TextField'

const styles = {
  iconStyle: {
    width: 150,
  },
  middleStyle: {
    paddingLeft: 50,
    paddingRight: 50,
    position: 'relative',
    top: -30,
  },
  inputStyle: {
    textAlign: 'center',
    background: 'rgba(0,0,0,0)',
    height: 50,
    width: 50,
    position: 'relative',
    top: -30,
    marginLeft: 50,
    marginRight: 50,
    fontSize: 30,
  }
}

export default class BetRow extends React.Component {

  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div>
        <img src={this.props.homeLogo} alt="" style={styles.iconStyle}/>
        <input type="number" style={styles.inputStyle} />
        <span style={styles.middleStyle}> - </span>
        <input type="number" style={styles.inputStyle} />
        <img src={this.props.awayLogo} alt="" style={styles.iconStyle}/>
      </div>
    )
  }
}

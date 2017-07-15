import React from 'react'
import BetRow from './BetRow'
import TextField from 'material-ui/TextField';


const styles = {
  background: {
    backgroundColor: 'white',
    width: 'calc(100% - 200px)',
    height: 250,
    marginTop: 50,
    padding: 100,
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.5)',
    overflow: 'auto',
  }
}
let games = [];
for (let i = 0; i < 7; i+=1) {
    games.push(
      <BetRow
        homeLogo="http://d01.fogis.se/svenskfotboll.se/ImageVault/Images/id_8507/width_207/scope_0/ImageVaultHandler.aspx130424100834-uq"
        awayLogo="http://d01.fogis.se/svenskfotboll.se/ImageVault/Images/id_8401/width_207/scope_0/ImageVaultHandler.aspx130424101453-uq"
      />);
}

export default class BetPage extends React.Component{
  render () {
    return (
      <div style={styles.background}>
        {games}
      </div>
    )
  }
}

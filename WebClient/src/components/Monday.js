import React from 'react'
import Radium from 'radium'
import Folder from './Folder.js'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

class Monday extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };

  }

  render() {
    return (
      <div style={styles.container}>
        <Folder target={'/Tuesday'}>
          TUESDAY
        </Folder>
      </div>
    );
  }
}

export default Radium(Monday);
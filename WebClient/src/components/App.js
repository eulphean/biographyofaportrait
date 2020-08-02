import React from 'react'
import Radium from 'radium'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { withOrientationChange } from 'react-device-detect'

import Today from './Today.js'
import Yesterday from './Yesterday.js'
import Tomorrow from './Tomorrow.js'
import Monday from './Monday.js'
import Tuesday from './Tuesday.js'
import Wednesday from './Wednesday.js'
import Thursday from './Thursday.js'
import Friday from './Friday.js'
import Saturday from './Saturday.js'
import Sunday from './Sunday.js'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };
  }

  render() {
    return (
      <div style={styles.container}>
        <Router>
          <Switch>
            <Route path="/Monday">
              <Monday />
            </Route>
            <Route path="/Tuesday">
              <Tuesday />
            </Route>
            <Route path="/Wednesday">
              <Wednesday />
            </Route>
            <Route path="/Wednesday">
              <Wednesday />
            </Route>
            <Route path="/Thursday">
              <Thursday />
            </Route>
            <Route path="/Friday">
              <Friday />
            </Route>
            <Route path="/Saturday">
              <Saturday />
            </Route>
            <Route path="/Sunday">
              <Sunday />
            </Route>
            <Route path="/Tomorrow">
              <Tomorrow />
            </Route>
            <Route path="/Yesterday">
              <Yesterday />
            </Route>
            <Route path="/">
              <Today />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Radium(withOrientationChange(App));
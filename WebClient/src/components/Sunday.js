import React from 'react'
import Radium from 'radium'

import { isMobile, withOrientationChange } from 'react-device-detect'
import portrait from '../videos/portrait/7_Sunday.mp4'
import landscape from '../videos/landscape/7_Sunday.mp4'
import Folder from './Folder.js'

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh'
  },

  video: {
    zIndex: '2',
    position: 'absolute',
    objectFit: 'cover',
    height: '100vh'
  }
};

class Sunday extends React.Component {
  constructor(props) {
    super(props); 
    let { isLandscape } = props; 
    this.folderRef = React.createRef(); 
    this.state = {
      isLandscape: isLandscape
    }; 
  }

  componentDidMount() {
    let vid = this.getVideo();
    this.props.setupVideo(vid); 
  }

  render() {
    return (
      <div style={styles.container}>
        <Folder 
          ref={this.folderRef}
          visible={true}
          onClick={this.onClick.bind(this)}
          target={'/'}>
          TODAY
        </Folder>
      </div>
    ); 
  }

  getVideo() {
    if (isMobile) {
      if (this.state.isLandscape) {
        return landscape;
      } else {
        return portrait;
      }
    } else {
        return landscape; 
    }
  }

  onClick() {
    this.props.removeVideo();
  }
}

export default Radium(withOrientationChange(Sunday));
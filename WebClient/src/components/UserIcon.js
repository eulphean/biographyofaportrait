import React from 'react'
import Radium from 'radium'
import { fadeIn } from 'react-animations'
import { ReactComponent as User } from '../svg/banda.svg'
import { color } from './CommonStyles.js'

const fadeDuration = '2.0s'; 

const styles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '0'
  },

  user: {
    zIndex: '95',
    position: 'fixed',
    width: '150vw',
    bottom: '-2%',
    overflow:'none',
    opacity: '0',

    '@media (min-width: 450px)': {  
      // no change.
      width: '100vw',
      bottom: '-15%'
    },

    '@media (min-width: 600px)': {  
    },

    '@media (min-width: 700px)': {  
      width: '80vw',
      bottom: '-10%'
    },

    '@media (min-width: 900px)': {  
      width: '70vw',
      bottom: '-20%'
    },

    '@media (min-width: 1200px)': {  
      width: '60vw',
      bottom: '-25%'
    },


    '@media (min-width: 1500px)': {  
      width: '60vw',
      bottom: '-25%'
    }
  },


  icon: {
    width: '100%',
    height: '100%',
    fill: color.greyBack,
  },

  fadeIn: {
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    animationDuration: fadeDuration,
    animationFillMode: 'forwards',
    animationTimingFunction:'ease-in'
  }
};

class UserIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isFadeIn: false
    };

    this.clickCount = 0; 
  }

  render() {
    let containerStyle=styles.user; 
    
    if (this.state.isFadeIn) {
      containerStyle = [styles.user, styles.fadeIn]; 
    }

    return (
     <div style={containerStyle}>
        <User style={styles.icon}/>
      </div>
    );
  }

  fadeIn() {
    this.setState({
      isFadeIn: true
    });
  }
}

export default Radium(UserIcon);
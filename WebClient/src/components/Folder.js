import React from 'react'
import Radium from 'radium'
import { fadeIn } from 'react-animations'

import { ReactComponent as FolderIcon } from '../svg/folder.svg'
import { fontSize, color, padding, fontFamily } from './CommonStyles.js'
import { Link } from 'react-router-dom'

const RadiumLink = Radium(Link);

const fadeDuration = '2.0s'; 

const styles = {
  container: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '1',
    zIndex: '99'
  },

  containerToday: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: '1',
    zIndex: '99',
    bottom: '5%',
    left: '5%'
  },

  fadeIn: {
    animationName: Radium.keyframes(fadeIn, 'fadeIn'),
    animationDuration: fadeDuration,
    animationFillMode: 'forwards',
    animationTimingFunction:'ease-in'
  },

  folderContainer: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },

  iconContainer: {
    padding: padding.extraSmall,

    // Defualt
    width: fontSize.extraMassive,

    '@media (min-width: 600px)': {    
      width: fontSize.insane
    },

    '@media (min-width: 900px)': {    
      width: fontSize.gaia
    }
  },

  icon: {
      width: '100%',
      height: '100%'
  },

  title: {
      display: 'flex',
      justifyContent: 'center',
      // backgroundColor: color.darkGrey,
      color: color.lightGrey,
      // padding: padding.extraSmall,
      paddingLeft: padding.big,
      paddingRight: padding.big,
      fontFamily: fontFamily.helvetica,
      letterSpacing: '1px',
      zIndex: '2',

      // Default
      fontSize: fontSize.verySmall,
      // width: fontSize.extraMassive,

      '@media (min-width: 600px)': {    
        fontSize: fontSize.small,
        // width: fontSize.insane
      },

      '@media (min-width: 900px)': {    
        fontSize: fontSize.small,
        // width: fontSize.gaia
      }
  },

  titleToday: {
    color: color.jenGrey
  },

  outline: {
    WebkitTextStroke: '0.5px #b3b3b3',
  },

  blurred: {
    position: 'absolute',
    bottom: '0px',
    width: '80%',
    backgroundColor: color.jenGrey,
    height: '20%',
    filter: 'blur(8px)',
    zIndex: '1'
  }
};

class Folder extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      isFadeIn: false
    };

    this.clickCount = 0;
    this.timeout = ''; 
  }

  render() {
    let containerStyle=styles.container; 
 
    if (this.props.isToday) {
      containerStyle=styles.containerToday;
    }

    // let blurred = this.props.isToday ? (React.Null) : (
    //   <div style={styles.blurred} />
    // ); 

    let titleStyle = this.props.isToday ? [styles.title, styles.titleToday] : styles.title;

    return (
      <div style={containerStyle} onClick={this.handleClick.bind(this)} >
        <RadiumLink to={this.props.target}>
          <div style={styles.folderContainer}>
            <div style={styles.iconContainer}>
                <FolderIcon style={styles.icon} />
            </div>
          </div>
          {/* { blurred } */}
          <div style={titleStyle}>
              {this.props.children}
          </div>
       </RadiumLink>
      </div>
    );
  }

  handleClick(event) {
    if (this.props.onClickCbk) {
      this.props.onClickCbk(event); 
    }
  }
  
  fadeIn() {
    this.setState({
      isFadeIn: true
    });
  }
}

export default Radium(Folder);
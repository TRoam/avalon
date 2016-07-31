import React , { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import Drawer from 'material-ui/Drawer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import ActionViewHeadline from 'material-ui/svg-icons/action/view-headline';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


import Sidebar from 'components/Sidebar/Sidebar';
import { Router } from 'react-router';

import styles from './styles.module.css';


class App extends React.Component{
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  get content () {
    return (
       <Router
        routes={this.props.routes}
        history={this.props.history} />
    );
  }

  openDrawer = () =>{
    this.setState ({
      open: !this.state.open
    });
  }
  render () {
    return (
      <MuiThemeProvider>
      <div style={{ height: '100%' }}>
         {this.content}
         <Drawer  open={this.state.open}>
           <Sidebar />
         </Drawer>
         <div className={styles.sidebar_toggle} style={{ zIndex: '1400' }} >
         <IconButton  onTouchTap={this.openDrawer} >
           <ActionViewHeadline />
         </IconButton>
         </div>
       </div>
     </MuiThemeProvider>
    )
  }
};

export default App;
  

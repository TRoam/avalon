import React , { PropTypes } from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router } from 'react-router';


class App extends React.Component{
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.element.isRequired
  }

  get content () {
    return (
       <Router
        routes={this.props.routes}
        history={this.props.history} />
    );
  }
  render () {
    return (
      <MuiThemeProvider>
      <div style={{ height: '100%' }}>
         {this.content}
      </div>
     </MuiThemeProvider>
    )
  }
};

export default App;

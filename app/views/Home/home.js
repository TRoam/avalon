import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './styles.module.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();


class Home extends React.Component {
  createGame(e){
    alert('create');
  }
  joinGame(event){
    alert('join');
  }
  render(){
    return (
      <div>
         <div className={styles.title}>
            Avalon 
         </div>
         <RaisedButton label="创建游戏" onClick={this.createGame} />
         <RaisedButton label="加入游戏" onClick={this.joinGame} />
         <RaisedButton label="游戏说明" />
      </div>
    );
  }
}

export default Home;

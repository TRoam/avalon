import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import styles from './styles.module.css';

class Home extends React.Component {
  createGame(e){
    alert('create');
  }
  joinGame(event){
    alert('join');
  }
  render(){
    return (
      <section className={styles.wrapper}>
         <div className={styles.content}>
           <p className={styles.title}>
            Avalon 
           </p>
         <FlatButton label="创建游戏" onClick={this.createGame} />
         <FlatButton label="加入游戏" onClick={this.joinGame} />
         <FlatButton label="游戏说明" href="/about" />
         </div>
      </section>
    );
  }
}

export default Home;

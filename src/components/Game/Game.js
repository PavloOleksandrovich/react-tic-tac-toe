import React, { Component } from 'react';
import Board from '../Board/Board';
import style from './Game.module.scss';

export default class Game extends Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Board />
      </div>
    );
  }
}

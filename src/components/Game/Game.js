import React, { Component } from 'react';
import Board from '../Board/Board';
import style from './Game.module.scss';

const rows = 3;
const colls = 3;

const initState = {
  rows,
  colls,
  squares: new Array(rows).fill(new Array(colls).fill(null))
};

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, initState);
  }

  render() {
    const { squares } = this.state;

    return (
      <div className={style.wrapper}>
        <Board 
          rows={rows}
          colls={colls}
          squares={squares}
        />
      </div>
    );
  }
}

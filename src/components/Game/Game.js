import React, { Component } from 'react';
import Board from '../Board/Board';
import style from './Game.module.scss';

const rows = 3;
const colls = 3;

const initState = {
  rows,
  colls,
  squares: new Array(rows).fill(new Array(colls).fill(null)),
  xIsNext: false
};

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, initState);
  }

  handleClick(row, col) {
    const { xIsNext } = this.state;

    const squares = JSON.parse(JSON.stringify(this.state.squares));

    squares[row][col] =  xIsNext ? 'X' : 'O';

    const state = Object.assign(this.state, {
      squares,
      xIsNext: !xIsNext
    });

    this.setState(state);
  }

  render() {
    const { squares } = this.state;

    return (
      <div className={style.wrapper}>
        <Board 
          rows={rows}
          colls={colls}
          squares={squares}
          onClick={(row, col) => this.handleClick(row, col)}
        />
      </div>
    );
  }
}

import React, { Component } from 'react';
import Board from '../Board/Board';
import Modal from '../Modal/Modal';
import style from './Game.module.scss';
import { calculateWinner } from '../../utils/game';

const rows = 3;
const colls = 3;

const initState = {
  rows,
  colls,
  squares: new Array(rows).fill(new Array(colls).fill(null)),
  xIsNext: false,
  title: 'Tic Tac Toe',
  gameOver: false,
  isModalOpen: false
};

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = Object.assign({}, initState);
  }

  handleClick(row, col) {
    const { xIsNext, gameOver } = this.state;

    const squares = JSON.parse(JSON.stringify(this.state.squares));

    if (squares[row][col] || gameOver) {
      return;
    }

    squares[row][col] =  xIsNext ? 'X' : 'O';

    const state = Object.assign(this.state, {
      squares,
      xIsNext: !xIsNext
    });

    const winner = calculateWinner(squares);

    if (winner) {
      state.isModalOpen = true;
      state.title = winner.xIsWin ? 'X Wins' : 'O Wins';
      state.gameOver = true;
    }

    this.setState(state);
  }

  handleModal() {
    const state = Object.assign({}, this.state);

    state.isModalOpen = !state.isModalOpen;

    this.setState(state);
  }

  render() {
    const { squares, title } = this.state;

    return (
      <div className={style.wrapper}>
        {/* TODO: animation */}
        <div className={style.titleText}>
          {title}          
        </div>

        <Board 
          rows={rows}
          colls={colls}
          squares={squares}
          onClick={(row, col) => this.handleClick(row, col)}
        />

        {this.state.isModalOpen && 
          <Modal onClose={() => this.handleModal()}>
            <main className={style.modalBody}>
              <h1>
                {title}
              </h1>
            </main>

            <footer className={style.modalFooter}>
              {/* TODO: on click restart */}
              <button className="btn btn-blue">Restart</button>
            </footer>
          </Modal>
        }
      </div>
    );
  }
}

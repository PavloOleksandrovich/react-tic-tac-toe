import React, { Component } from 'react';
import Board from '../Board/Board';
import Modal from '../Modal/Modal';
import History from '../History/History';
import style from './Game.module.scss';
import { calculateWinner } from '../../utils/game';

const rows = 3;
const colls = 3;

const initState = {
  rows,
  colls,
  history: [
    new Array(rows).fill(new Array(colls).fill(null))
  ],
  currentStepNumber: 0,
  xIsNext: false,
  title: 'Tic Tac Toe',
  gameOver: false,
  isModalOpen: false
};

export default class Game extends Component {
  constructor(props) {
    super(props);

    this.state = JSON.parse(JSON.stringify(initState));
  }

  // TODO: menu title TIC TAC TOE - game title who move now
  handleSquareClick(row, col) {
    const state = JSON.parse(JSON.stringify(this.state));

    const history = JSON.parse(JSON.stringify(state.history.slice(0, state.currentStepNumber + 1)));
    
    const current = JSON.parse(JSON.stringify(history[history.length - 1]));

    if (current[row][col] || state.gameOver) {
      return;
    }

    current[row][col] = state.xIsNext ? 'X' : 'O';
    state.history = history.concat([current]);
    state.currentStepNumber++;

    state.xIsNext = !state.xIsNext;
    state.title = state.xIsNext ? 'X move' : 'O move';

    const winner = calculateWinner(current);
    if (winner) {
      state.isModalOpen = true;
      state.title = winner.xIsWin ? 'X Wins' : 'O Wins';
      state.gameOver = true;
    }

    this.setState(state);
  }

  handleShowModal() {
    const state = JSON.parse(JSON.stringify(this.state));

    state.isModalOpen = !state.isModalOpen;

    this.setState(state);
  }

  jumpTo(move) {
    const state = JSON.parse(JSON.stringify(this.state));

    state.currentStepNumber = move;
    state.xIsNext = (move % 2) === 0; 
    state.title = state.xIsNext ? 'X move' : 'O move';

    this.setState(state);
  }

  render() {
    const { history, title, currentStepNumber } = this.state;

    const squares = history[currentStepNumber];

    return (
      <div className={style.wrapper}>
        {/* TODO: animation */}
        <div className={style.titleText}>
          {title}          
        </div>

        <main>
          <Board 
            rows={rows}
            colls={colls}
            squares={squares}
            onClick={(row, col) => this.handleSquareClick(row, col)}
          />

          <History history={history} onClick={(move) => this.jumpTo(move)} />
        </main>

        {/* TODO: animation */}
        <div className={`material-icons ${style.refresh}`} onClick={() => this.setState(initState)}>refresh</div> 

        {this.state.isModalOpen && 
          <Modal onClose={() => this.handleShowModal()}>
            <main className={style.modalBody}>
              <h1>{title}</h1>
            </main>

            <footer className={style.modalFooter}>
              {/* TODO: animation */}
              <button className="btn btn-blue" onClick={() => this.setState(initState)}>Restart</button>
            </footer>
          </Modal>
        }
      </div>
    );
  }
}

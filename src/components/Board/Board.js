import React, { Component } from 'react';
import style from './Board.module.scss';

export default class Game extends Component {
    createBoard(rows, colls) {
        const board = [];

        for (let i = 0;i < rows;i++) {
            const column = [];

            // TODO: svg to files
            for (let j = 0;j < colls;j++) {
                column.push((
                    <div key={j} className={style.boardCell}>
                        {/* <svg class={style.xo} height="110" width="110">
                            <circle cx="55" cy="55" r="43" stroke="#E43A20" stroke-width="12" fill-opacity="0"></circle>
                        </svg> */}
                        {/* <svg className={style.xo} height="100" width="100">
                            <line x1="10" y1="10" x2="90" y2="90" style={{stroke: '#00AAC4', strokeWidth: '12'}}></line>
                            <line x1="90" y1="10" x2="10" y2="90" style={{stroke: '#00AAC4', strokeWidth: '12'}}></line>
                        </svg> */}
                    </div>
                ));
            }

            board.push((
                <div key={i} className={style.boardColumn}>
                    {column}
                </div>
            ));
        }

        return board;
    }

  render() {
    return (
        <div className={style.board}>
            {this.createBoard(3, 3)}
        </div>
    );
  }
}

import React, { Component } from 'react';
import Square from '../Square/Square';
import style from './Board.module.scss';

export default class Board extends Component {
    createBoard(rows, colls) {
        const board = [];

        for (let row = 0;row < rows;row++) {
            const column = [];

            for (let col = 0;col < colls;col++) {
                column.push((
                    <Square 
                        key={`${row}${col}`} 
                        value={this.props.squares[row][col]} 
                        onClick={() => this.props.onClick(row, col)}
                    />
                ));
            }

            board.push((
                <div key={row} className={style.boardColumn}>
                    {column}
                </div>
            ));
        }

        return board;
    }

    render() {
        return (
            <div className={style.board}>
                {this.createBoard(this.props.rows, this.props.colls)}
            </div>
        );
    }
}

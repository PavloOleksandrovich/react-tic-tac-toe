import React, { Component } from 'react';
import Square from '../Square/Square';
import style from './Board.module.scss';

export default class Board extends Component {
    createBoard(rows, colls) {
        const board = [];

        for (let i = 0;i < rows;i++) {
            const column = [];

            for (let j = 0;j < colls;j++) {
                column.push((
                    <Square key={`${i}${j}`} value={this.props.squares[i][j]} />
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
                {this.createBoard(this.props.rows, this.props.colls)}
            </div>
        );
    }
}

import React, { Component } from 'react';
import style from './History.module.scss';

export default class History extends Component {
    render() {
        const moves = this.props.history.map((move, index) => {
            const text = index
                ? `Go to Move #${index}`
                : 'Go to game start';
            
            const htmlClass = index === this.props.currentMove ? style.active : '';

            return (
                <li className={htmlClass} key={index} onClick={() => this.props.onClick(index)}>
                    {text}
                </li>
            );
        });

        return (
            <ul className={style.history}>
                {moves}
            </ul>
        );
    }
}
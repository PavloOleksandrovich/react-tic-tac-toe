import React, { Component } from 'react';
import style from './Square.module.scss';

export default class Square extends Component {
    renderSquare() {
        switch(this.props.value) {
            case 'O':
                return (
                    <svg class={style.xo} height="110" width="110">
                        <circle cx="55" cy="55" r="43" stroke="#E43A20" stroke-width="12" fill-opacity="0"></circle>
                    </svg> 
                );
            case 'X':
                return (
                    <svg className={style.xo} height="100" width="100">
                        <line x1="10" y1="10" x2="90" y2="90" style={{stroke: '#00AAC4', strokeWidth: '12'}}></line>
                        <line x1="90" y1="10" x2="10" y2="90" style={{stroke: '#00AAC4', strokeWidth: '12'}}></line>
                    </svg>
                );
            default: 
                return null;
        }
    }

    render() {
        return (
            <div className={style.boardCell}>
                {this.renderSquare()}
            </div>
        );
    }
}
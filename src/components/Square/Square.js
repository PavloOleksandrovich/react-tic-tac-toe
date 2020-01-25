import React, { Component } from 'react';
import style from './Square.module.scss';

export default class Square extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shaked: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    renderSquare() {
        switch(this.props.value) {
            case 'O':
                return (
                    <svg className={style.xo} height="110" width="110">
                        <circle cx="55" cy="55" r="43"></circle>
                    </svg> 
                );
            case 'X':
                return (
                    <svg className={style.xo} height="100" width="100">
                        <line x1="10" y1="10" x2="90" y2="90"></line>
                        <line x1="90" y1="10" x2="10" y2="90"></line>
                    </svg>
                );
            default: 
                return null;
        }
    }

    handleClick() {
        const shaked = this.props.onClick() ? true : false;

        this.setState({shaked});
    }

    render() {
        const { shaked } = this.state;

        const htmlClass = shaked ? `${style.boardCell} ${style.shaked}` : style.boardCell;

        return (
            <div className={htmlClass} onClick={this.handleClick} onAnimationEnd={() => this.setState({shaked: false})}>
                {this.renderSquare()}
            </div>
        );
    }
}
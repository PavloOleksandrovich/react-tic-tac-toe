import React, { Component } from 'react';
import style from './History.module.scss';

export default class History extends Component {
    render() {
        return (
            <ul className={style.history}>
                <li>Go to game start</li>
                <li>Go to Move #1</li>
                <li>Go to Move #2</li>
            </ul>
        );
    }
}
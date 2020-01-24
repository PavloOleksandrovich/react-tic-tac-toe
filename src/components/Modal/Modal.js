import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import style from './Modal.module.scss';

export default class Modal extends Component {
    root = document.createElement('div');

    componentDidMount() {
        document.body.appendChild(this.root);
    }

    componentWillUnmount() {
        document.body.removeChild(this.root);
    }

    render() {
        return ReactDOM.createPortal(
            <div className={style.modalOverlay}>
              <div className={style.modalWindow}>
                <div className={style.modalHeader}>
                    <span onClick={this.props.onClose}>×</span>
                </div>

                {this.props.children}
              </div>
            </div>,
            this.root
        );
    }
}
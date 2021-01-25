import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
   componentDidMount() {
      window.addEventListener('keydown', this.handleKeyDown);
   }

   componentWillUnmount() {
      window.removeEventListener('keydown', this.handleKeyDown);
   }

   handleKeyDown = e => {
      if (e.code === 'Escape') {
         this.props.onClose();
      }
   };

   handleBackdropClick = e => {
      if (e.currentTarget === e.target) {
         this.props.onClose();
      }
   };

   render() {
      const { largeImgUrl, imgAlt } = this.props;

      return createPortal(
         <div className={s.overlay} onClick={this.handleBackdropClick}>
            <div className={s.modal}>
               <img className={s.image} src={largeImgUrl} alt={imgAlt} />
            </div>
         </div>,
         modalRoot,
      );
   }
}
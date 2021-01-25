import React from 'react';
import PropTypes from 'prop-types';
import s from './Input.module.css';

const Input = ({ text }) => {
   return <p className={s.text}>{text}</p>;
};

Input.propTypes = {
   text: PropTypes.string,
};

export default Input;
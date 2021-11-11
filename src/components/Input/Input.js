import React from 'react';
import { string } from 'prop-types';

const Input = ({ secretWord }) => {
  return <div data-test="component-input"></div>;
};

Input.propTypes = {
  secretWord: string.isRequired,
};

export default Input;

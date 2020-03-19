import React from 'react';
import './styles.scss';

/**
 * Generates a button
 *
 * @param {props} onclick method
 * @returns {button view}
 */

export const ButtonComponent = props => {
  const { onClick } = props;
  return (
    <button className={'back-button'} onClick={onClick}>
      <i className="fa fa-long-arrow-left" aria-hidden="true" />
      Back
    </button>
  );
};

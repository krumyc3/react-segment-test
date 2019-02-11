import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.scss';

export const LineBreak = ({ marginVertical }) => (
  <div
    className={styles.lineBreak}
    style={{ marginTop: marginVertical, marginBottom: marginVertical }}
  />
);

LineBreak.propTypes = {
  marginVertical: PropTypes.number,
};

LineBreak.defaultProps = {
  marginVertical: 0,
};

import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

import styles from './style.scss';

export const BlockWrapper = ({ children }) => (
  <Row className={styles.wrapper}>{children}</Row>
);

BlockWrapper.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

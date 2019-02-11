import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

import { Header } from './Header';
import { BlockWrapper } from './BlockWrapper';
import { Block } from './Block';

const Segment = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

Segment.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
};

Segment.Header = Header;
Segment.BlockWrapper = BlockWrapper;
Segment.Block = Block;

export default Segment;

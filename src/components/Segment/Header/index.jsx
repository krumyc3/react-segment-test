import React from 'react';
import PropTypes from 'prop-types';

import { numberWithCommas } from 'helpers';
import styles from './style.scss';

export const Header = ({
  segmentNumber,
  segmnetAreaGroup,
  segmentPopulation,
  totalPopulation,
}) => (
  <div className={styles.headerWrapper}>
    <span className={styles.left}>
      Segment {segmentNumber} | Ages {segmnetAreaGroup}
    </span>
    <span className={styles.right}>
      Est. Segment Population: {numberWithCommas(segmentPopulation)}{' '}
      <span className={styles.grey}>/ {numberWithCommas(totalPopulation)}</span>
    </span>
  </div>
);

Header.propTypes = {
  segmentNumber: PropTypes.number,
  segmnetAreaGroup: PropTypes.string,
  segmentPopulation: PropTypes.number,
  totalPopulation: PropTypes.number,
};

Header.defaultProps = {
  segmentNumber: 1,
  segmnetAreaGroup: '10-15',
  segmentPopulation: 0,
  totalPopulation: 0,
};

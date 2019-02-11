import React from 'react';
import { Row, Col, Progress } from 'reactstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { numberWithCommas } from 'helpers';
import { blockType } from 'types';

import { LineBreak } from 'components/LineBreak';

import styles from './style.scss';

export const Block = ({ income, data, segmentPopulation }) => {
  const {
    group_population: groupPopulation,
    home_owner_population: homeOwnerPopulation,
    family_home_owner_population: familyHomeOwnerPopulation,
    nonfamily_home_owner_population: nonfamilyHomeOwnerPopulation,
    renter_population: renterPopulation,
    family_renter_population: familyRenterPopulation,
    nonfamily_renter_population: nonfamilyRenterPopulation,
    market_size: marketSize,
  } = data;

  const percent = ((groupPopulation / segmentPopulation) * 100).toFixed(1);
  const barPercent = Math.min(95, Math.max(5, percent));
  const barWidth = 380;
  const vDotHeight = 60;
  const hDotWidth = Math.sqrt(
    // eslint-disable-next-line no-restricted-properties
    Math.pow((barWidth * (100 - percent)) / 100, 2) + Math.pow(vDotHeight, 2),
  );
  const hDotAngle = (180 * Math.atan(vDotHeight / hDotWidth)) / Math.PI;

  return (
    <Col md={4} sm={12} className={styles.blockItem}>
      <div className={styles.blockHeader}>
        <span className={styles.white}>
          EST. INCOME {'>'} ${income}K/YR
        </span>
      </div>
      <div>
        <span className={styles.detailItem}>Est. Population</span>
        <div className={styles.progressWrapper}>
          <div className={styles.progressLabel}>
            <span className={styles.startSpan}>{0}</span>
            {percent !== 0 &&
              (percent !== 100 && (
                <span
                  className={classnames(styles.valueSpan, styles.white)}
                  style={{ left: barPercent + '%' }}>
                  {numberWithCommas(groupPopulation)}
                </span>
              ))}
            <span className={styles.endSpan}>
              {numberWithCommas(segmentPopulation)}
            </span>
          </div>
          <Progress
            value={percent}
            className={styles.progress}
            barClassName={styles.progressBar}
          />
          <span className={styles.vDots} style={{ height: vDotHeight }}/>
          <span
            className={styles.hDots}
            style={{
              left: percent + '%',
              transform: 'rotate(' + hDotAngle + 'deg)',
              width: hDotWidth + 'px',
            }}
          />
        </div>
        <Row>
          <Col md={6}>
            <div className={styles.detailItem}>
              <span>Home Owners:</span>{' '}
              <span>{numberWithCommas(homeOwnerPopulation)}</span>
            </div>
            <LineBreak marginVertical={15} />
            <div className={styles.detailItem}>
              <span>Family:</span>{' '}
              <span>{numberWithCommas(familyHomeOwnerPopulation)}</span>
            </div>
            <div className={styles.detailItem}>
              <span>Non Family:</span>{' '}
              <span>{numberWithCommas(nonfamilyHomeOwnerPopulation)}</span>
            </div>
          </Col>
          <Col md={6}>
            <div className={styles.detailItem}>
              <span>Renters:</span>{' '}
              <span>{numberWithCommas(renterPopulation)}</span>
            </div>
            <LineBreak marginVertical={15} />
            <div className={styles.detailItem}>
              <span>Family:</span>{' '}
              <span>{numberWithCommas(familyRenterPopulation)}</span>
            </div>
            <div className={styles.detailItem}>
              <span>Non Family:</span>{' '}
              <span className={styles.white}>
                {numberWithCommas(nonfamilyRenterPopulation)}
              </span>
            </div>
          </Col>
        </Row>
        <LineBreak marginVertical={15} />
        <Row>
          <Col md={12}>
            <div className={styles.detailItem}>
              <span>Est. Market Size:</span>{' '}
              <span className={classnames(styles.white, styles.spanLarge)}>
                {numberWithCommas(marketSize)}
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

Block.propTypes = {
  data: blockType,
  income: PropTypes.string.isRequired,
  segmentPopulation: PropTypes.number.isRequired,
};

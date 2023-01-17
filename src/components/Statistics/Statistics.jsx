import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li className={css.statisticName}>
        <span className={css.statisticItem}>Good: </span> {good}
      </li>
      <li className={css.statisticName}>
        <span className={css.statisticItem}>Neutral: </span> {neutral}
      </li>
      <li className={css.statisticName}>
        <span className={css.statisticItem}>Bad: </span> {bad}
      </li>
      <li className={css.statisticName}>
        <span className={css.statisticItem}>Total: </span>
        {total}
      </li>
      <li className={css.statisticName}>
        <span className={css.statisticItem}>Positive feedback: </span>
        {positivePercentage}%
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

export default Statistics;

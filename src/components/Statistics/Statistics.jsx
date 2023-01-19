import PropTypes from 'prop-types';
import {List, Item, ItemTotalResultText} from './Statistics.styled';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <List>
      <Item>
        <span>Good: </span> {good}
      </Item>
      <Item>
        <span>Neutral: </span> {neutral}
      </Item>
      <Item>
        <span>Bad: </span> {bad}
      </Item>
      <Item>
        <span>Total: </span>
        {total}
      </Item>
      <Item>
        <ItemTotalResultText>Positive feedback: </ItemTotalResultText>
        {positivePercentage}%
      </Item>
    </List>
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

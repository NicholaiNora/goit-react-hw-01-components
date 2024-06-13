import PropTypes from 'prop-types';
import css from '../StatisticsItem/StatisticsItem.module.css';
const StatisticsItem = ({ label, percentage }) => {
  const generateRandomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)},${Math.floor(
      Math.random() * 256
    )},${Math.floor(Math.random() * 256)})`;
  };
  return (
    <li className={css.item} style={{ backgroundColor: generateRandomColor() }}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;

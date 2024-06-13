import PropTypes from 'prop-types';
import TransactionHistoryRow from '../TransactionHistoryRow/TransactionHistoryRow';
import css from '../TransactionHistory/TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
  return (
    <div>
      <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TransactionHistoryRow
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired
};
export default TransactionHistory;

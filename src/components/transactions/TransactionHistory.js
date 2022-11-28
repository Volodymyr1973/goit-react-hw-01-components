import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

import { TransactionHistoryRow } from './TransactionHistoryRow';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <TransactionHistoryRow transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

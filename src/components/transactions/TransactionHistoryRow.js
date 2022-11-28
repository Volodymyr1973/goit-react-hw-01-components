import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistoryRow = ({
  transaction: { id, type, amount, currency },
}) => {
  return (
    <>
      <td className={css.cell_body}>{type}</td>
      <td className={css.cell_body}>{amount}</td>
      <td className={css.cell_body}>{currency}</td>
    </>
  );
};

TransactionHistoryRow.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};

import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import { StatisticsTitle } from './StatisticsTitle';
import css from './Statistics.module.css';

export const Statistics = ({ data }, title) => {
  return (
    <section className={css.statistics}>
      <StatisticsTitle title />

      <ul className={css.stat_list}>
        {data.map(item => (
          <li className={css.item} key={item.id}>
            <StatisticsItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { Title } from '../App';

export const StatisticsTitle = title => {
  console.log(title.title);
  if (title.title) {
    return (
      <>
        <h2 className={css.title}>{Title}</h2>
      </>
    );
  }
};

// StatisticsTitle.propTypes = {
//   title: PropTypes.shape({
//     title: PropTypes.bool,
//   }),
// };

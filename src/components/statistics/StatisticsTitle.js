import css from './Statistics.module.css';
import { Title } from '../App';

export const StatisticsTitle = title => {
  if (title) {
    return (
      <>
        <h2 className={css.title}>{Title}</h2>
      </>
    );
  }
};

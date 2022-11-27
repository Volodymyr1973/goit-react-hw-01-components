import { StatisticsItem } from './StatisticsItem';

export const Statistics = ({ data }) => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {data.map(item => (
          <li className="item" key={item.id}>
            <StatisticsItem item={item} />
          </li>
        ))}
      </ul>
    </section>
  );
};

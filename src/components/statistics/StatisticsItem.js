// import data from '../data.json';

export const StatisticsItem = ({ item: { label, percentage } }) => {
  return (
    <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </>
  );
};

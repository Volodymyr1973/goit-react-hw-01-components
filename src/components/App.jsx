import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendlist/FriendList';
import { TransactionHistory } from './transactions/TransactionHistory';
import user from '../components/profile/user.json';
import data from '../components/statistics/data.json';
import friends from '../components/friendlist/friends.json';
import transactions from '../components/transactions/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile maneUser={user} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

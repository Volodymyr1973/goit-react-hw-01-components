import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import { FriendList } from './friendlist/FriendList';
import { TransactionHistory } from './transactions/TransactionHistory';
import user from '../components/profile/user.json';
import data from '../components/statistics/data.json';
import friends from '../components/friendlist/friends.json';
import transactions from '../components/transactions/transactions.json';

export const Title = 'Upload stats';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics data={data} title={Title} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

import { Profile } from "./Profile/Profile";
import { Statistic } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendList/FriendList";
import { TransactionHistory } from "./Transactions/TransactionHistory";
import user from '../data/user.json';
import stats from '../data/statistic.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json'

export const App = () => {
  return (
    <>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />
      <Statistic 
        title = "UPLOAD STATS"
        stats = {stats}
      />
      <FriendList 
        friends={friends}
      />
      <TransactionHistory 
        transactions = {transactions}
      />
    </>
  );
};
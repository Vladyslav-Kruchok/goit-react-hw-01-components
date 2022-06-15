//#region DATA #
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
//#endregion #

//#region COMPONETS #
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory} from "./TransactionHistory/TransactionHistory";
//#endregion #


export const App = () => {
  const { username, tag, location, avatar, stats} = user;
  return (
    <div className="container">
      <Profile username={username} tag={tag} location={location} avatar={avatar} stats={stats} />
      <Statistics title={"UPLOAD STATS"} stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};

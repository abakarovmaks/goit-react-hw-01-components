import './App.css';
import Container from './components/Container/Container';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statisticalData.json';
import FriendList from './components/FriendsList/FriendList';
import friends from './components/FriendsList/friends.json';
import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './components/Transactions/transactions.json';

export default function App() {
  return (
    <Container>
      <h2>Задание 1</h2>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Задание 2</h2>
      <Statistics title="Statistics" stats={statisticalData} />
      <h2>Задание 3</h2>
      <FriendList friends={friends} />
      <h2>Задание 4</h2>
      <TransactionHistory items={transactions} />;
    </Container>
  );
}

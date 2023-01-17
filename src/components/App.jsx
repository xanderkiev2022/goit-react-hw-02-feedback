// import Profile from './components/Profile/Profile';

import React, { Component } from 'react';


class Feedback extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        
      </div>
    )
  }

// export const App = () => {
//   return (
//     <div>
//       <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       />
//       <Statistics title="Upload stats" stats={data} />
//       <FriendList friends={friends} />;
//       <TransactionHistory items={transactions} />;
//     </div>
//   );
// };

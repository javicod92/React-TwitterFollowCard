import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard';

function App() {
  const formatUsername = (userName) => `@${userName}`;
  
  // return (
  //   <section className='App'>
  //     <TwitterFollowCard
  //       formatUsername={formatUsername}
  //       initialIsFollowing={true}
  //       userName={'midudev'}
  //       name={'Miguen Ángel Durán'}
  //     />
  //     <TwitterFollowCard
  //       formatUsername={formatUsername}
  //       initialIsFollowing={true}
  //       userName={'miriamgonp'}
  //       name={'Miriam Gonzalez'}
  //     />
  //     <TwitterFollowCard
  //       formatUsername={formatUsername}
  //       isFollowing={false}
  //       userName={'mouredev'}
  //       name={'Brais Moure'}
  //     />
  //     <TwitterFollowCard
  //       formatUsername={formatUsername}
  //       isFollowing={false}
  //       userName={'DotCSV'}
  //       name={'Carlos Santana Vega'}
  //     />
  //   </section>
  // );

  // Thise could be an user list object extracted from the database
  const users = [
    {
      userName: 'midudev',
      name: 'Miguen Ángel Durán',
      isFollowing: false
    },
    {
      userName: 'miriamgonp',
      name: 'Miriam Gonzalez',
      isFollowing: false
    },
    {
      userName: 'mouredev',
      name: 'Brais Moure',
      isFollowing: false
    },
    {
      userName: 'DotCSV',
      name: 'Carlos Santana Vega',
      isFollowing: false
    }
  ];

  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard
              key = {userName} /* The key is essential to identify the element */
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
              formatUsername={formatUsername}
            />
          );
        })
      }
    </section>
  );
};

export { App };
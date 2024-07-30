import { useState } from "react";

function TwitterFollowCard( {formatUsername, userName = 'unknown', name, initialIsFollowing} ) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  
  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing 
  ? 'tw_followCard_button is-following'
  : 'tw_followCard_button';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  }

  return (
    <article className='tw_followCard'>
      <header className='tw_followCard_header'>
        <img className='tw_followCard_avatar' src={`https://unavatar.io/${userName}`} alt="Midudev Avatar" />
        <div className='tw_folloCard_info'>
          <strong>{name}</strong>
          <span className='tw_folloCard_info_userName'>{formatUsername(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
};

export { TwitterFollowCard };
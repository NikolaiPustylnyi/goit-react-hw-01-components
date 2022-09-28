import PropTypes from 'prop-types';
import css from './profile.module.css';

export const Profile = ({username, tag, location, avatar, stats}) =>{
return(<div class={css.profile}>
    <div class={css.description}>
      <img
        src={avatar}
        alt={username}
        class={css.avatar}
      />
      <p class={css.name}>{username}</p>
      <p class={css.tag}>@{tag}</p>
      <p class={css.location}>{location}</p>
    </div>
  
    <ul class={css.stats}>
      <li>
        <span class={css.label}>Followers</span>
        <span class={css.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span class={css.label}>Views</span>
        <span class={css.quantity}>{stats.views}</span>
      </li>
      <li>
        <span class={css.label}>Likes</span>
        <span class={css.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
)
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}


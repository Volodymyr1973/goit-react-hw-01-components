export const Profile = ({ maneUser }) => {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={maneUser.avatar}
          alt="User avatar"
          className="avatar"
          width="60"
        />
        <p className="name">{maneUser.username}</p>
        <p className="tag">@{maneUser.tag}</p>
        <p className="location">{maneUser.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{maneUser.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{maneUser.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{maneUser.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

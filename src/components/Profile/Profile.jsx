import css from "./Profile.module.css";
import clsx from "clsx";

export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div className={clsx(css.mainContainer)}>
        <div className={clsx(css["containerProfile"])}>
          <img
            src={image}
            alt="User avatar"
            className={clsx(css["profileImg"])}
          />
          <p className={clsx(css.profilePrimaryParagraf)}>{name}</p>
          <p
            className={clsx(
              css.profilePrimaryParagraf,
              css.profileSecondaryParagraf
            )}
          >
            @{tag}
          </p>
          <p
            className={clsx(
              css.profilePrimaryParagraf,
              css.profileSecondaryParagraf
            )}
          >
            {location}
          </p>
        </div>
        <ul className={clsx(css.listItem)}>
          <li className={clsx(css.item)}>
            <span className={clsx(css.profilePrimaryParagraf, css.stats)}>
              Followers
            </span>
            <span className={clsx(css.profilePrimaryParagraf)}>
              {followers}
            </span>
          </li>
          <li className={clsx(css.item)}>
            <span className={clsx(css.profilePrimaryParagraf, css.stats)}>
              Views
            </span>
            <span className={clsx(css.profilePrimaryParagraf)}>{views}</span>
          </li>
          <li className={clsx(css.item)}>
            <span className={clsx(css.profilePrimaryParagraf, css.stats)}>
              Likes
            </span>
            <span className={clsx(css.profilePrimaryParagraf)}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

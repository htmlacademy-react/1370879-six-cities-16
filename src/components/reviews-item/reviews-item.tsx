// import { Comment } from '../../types/comments';

type ReviewsItemProps = {
  description: string;
  userName: string;
  userAvatar: string;
  rating: number;
  time: string;
}

function ReviewsItem({ description, userName, userAvatar, rating, time }: ReviewsItemProps) {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={userAvatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">{userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: 80 }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <p className="reviews__text">{description}</p>
        <time className="reviews__time" dateTime="2019-04-24">{time}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;

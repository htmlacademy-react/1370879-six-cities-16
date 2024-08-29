// import { Comment } from '../../types/comments';

type ReviewsItemProps = {
  description: string;
  userName: string;
  userAvatar: string;
  rating: number;
  time: string;
}

function ReviewsItem({ description, userName, userAvatar, rating, time }: ReviewsItemProps) {
  const reviewDate = new Date(time);
  const humanDate = reviewDate.toLocaleDateString('en-Us', {
    year: 'numeric',
    month: 'long'
  });

  const computerDate = time.toString().slice(0, 10);
  // console.log(time);
  // console.log(computerDate);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar"
            src={userAvatar}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{userName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{description}</p>
        <time className="reviews__time" dateTime={computerDate}>{humanDate}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;

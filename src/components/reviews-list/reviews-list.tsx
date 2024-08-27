import { Comment } from '../../types/comments';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsListProps = {
  comments: Comment[];
}

function ReviewsList({ comments }: ReviewsListProps) {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <ReviewsItem key={comment.id}
          description={comment.comment}
          userName={comment.user.name}
          userAvatar={comment.user.avatarUrl}
          rating={comment.rating}
          time={comment.date}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;

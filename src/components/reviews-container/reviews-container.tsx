import ReviewsList from '../reviews-list/reviews-list';
import ReviewForm from '../review-form/review-form';
import { comments } from '../../mocks/comments/comments';

function ReviewsContainer() {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ReviewsList comments={comments}/>
      <ReviewForm />
    </section>
  );
}

export default ReviewsContainer;

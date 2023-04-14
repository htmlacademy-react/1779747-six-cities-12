import { Reviews } from '../../types/reviews';
import ReviewsItem from '../reviews-item/reviews-item';

type ReviewsProps = {
  reviews: Reviews[];
}

export default function ReviewsList ({reviews}: ReviewsProps){
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}

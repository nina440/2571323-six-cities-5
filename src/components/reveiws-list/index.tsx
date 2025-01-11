import Review from '@/components/reveiw';
import { Comment } from '@/types/comment';

type ReviewsListProps = {
  comments: Comment[];
};

function ReviewsList({ comments }: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {comments.map((comment) => (
        <Review key={comment.id} comment={comment} />
      ))}
    </ul>
  );
}

export default ReviewsList;
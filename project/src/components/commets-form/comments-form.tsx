import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSendReviewStatus } from '../../store/room-data/room-data.selectors';
import { STAR_RATINGS } from '../../const';
import { sendReviewAction } from '../../store/api-action';
import { COMMENT_LETTERS } from '../../const';


type CommentsFormProps = {
  id: number;
}
export default function CommentsForm({id}: CommentsFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const sendCommentStatus = useAppSelector(getSendReviewStatus);
  const [commentsFormData, setcommentsFormData] = useState({
    comment: '',
    rating: 0
  });

  const isDisableButton = commentsFormData.comment.length < COMMENT_LETTERS.min || commentsFormData.comment.length > COMMENT_LETTERS.max
  || !commentsFormData.rating || sendCommentStatus !== 'NO_LOODING';


  const inputCommentHandle = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setcommentsFormData({
      ...commentsFormData,
      [name]: value,
    });
  };
  const submitCommentHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(sendReviewAction({
      hotelId: id,
      comment: commentsFormData.comment,
      rating: commentsFormData.rating
    }));
    setcommentsFormData ({
      comment: '',
      rating: 0
    });
  };

  return(
    <form
      className="reviews__form form"
      action=""
      method="post"
      onSubmit={submitCommentHandle}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {STAR_RATINGS.map((starRaiting) => (
          <React.Fragment key={starRaiting.value}>
            <input
              onChange={inputCommentHandle}
              className="form__rating-input visually-hidden"
              name="rating"
              value={starRaiting.value}
              id={`${starRaiting.value}-stars`}
              type="radio"
              checked={+commentsFormData.rating === starRaiting.value}
            />
            <label htmlFor={`${starRaiting.value}-stars`} className="reviews__rating-label form__rating-label" title={starRaiting.title}>
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}

      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={inputCommentHandle}
        value={commentsFormData.comment}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled ={isDisableButton}
        >
          Submit
        </button>
      </div>
    </form>
  );

}

import { ChangeEvent, useState } from 'react';
import FormRating from '../form-rating/form-rating';

function ReviewForm() {
  const [formData, setFormData] = useState({
    textarea: ''
  });
  const [isDisabled, setIsDisabled] = useState(false);

  // console.log(formData.textarea);

  // console.log(buttonRef);

  const handleFieldChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (value.length === 10) {
      setIsDisabled(true);
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <FormRating />
      </div>
      <textarea onChange={handleFieldChange} defaultValue={formData.textarea} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isDisabled}>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;

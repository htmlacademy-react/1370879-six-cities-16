// import { useState } from 'react';
import classNames from 'classnames';

type OfferCardProps = {
  isPremium: boolean;
  price: number;
  isFavorite: boolean;
  name: string;
  type: string;
  src: string;
}

function OfferCard({ isFavorite, price, isPremium, name, type, src }: OfferCardProps) {
  // const [selectedCard, setSelectedCard] = useState({
  //   count: 0
  // } as const);

  // const onClickHandler = (event: { target: never }) => {
  //   // console.log(event.target);
  //   // setSelectedCard({
  //   //   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/restrict-plus-operands
  //   //   ...selectedCard,
  //   //   count: count + 1
  //   // });
  // };

  const favoriteLabel: string = `${isFavorite ? 'In' : 'To'} bookmarks`;
  const favoriteClass: string = classNames('button', 'place-card__bookmark-button', {
    'place-card__bookmark-button--active': isFavorite
  });
  return (
    <article className="cities__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={src} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={favoriteClass} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{favoriteLabel}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: 80 }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{name}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default OfferCard;

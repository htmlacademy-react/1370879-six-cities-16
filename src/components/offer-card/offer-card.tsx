// import { useState } from 'react';
import FavoritesButton from '../favorite-button/favorites-button';
import { AppRoute } from '../../const';
import { OfferCardType } from '../../types/offer';
import { Link } from 'react-router-dom';
import { getMarkUpRanking, makeFirstLetterUppercase } from '../../utils';

type OfferCardProps = {
  offerCard: OfferCardType;
  classname: string;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
}

const FAVORITES_CLASS_NAME = 'favorites';

function OfferCard({ classname, offerCard, onMouseOver, onMouseLeave }: OfferCardProps) {
  // const [selectedCard, setSelectedCard] = useState<boolean>(false);
  const { isFavorite, title, price, id, isPremium, type, previewImage, rating } = offerCard;

  const imgWidth = classname === FAVORITES_CLASS_NAME ? 150 : 260;
  const imgHeight = classname === FAVORITES_CLASS_NAME ? 110 : 200;
  const cardInfoClassName = classname === FAVORITES_CLASS_NAME ? 'favorites__card-info' : '';

  return (
    <article
      className={`${classname}__card place-card`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${classname}__image-wrapper place-card__image-wrapper`}>
        <Link to={AppRoute.Offer.replace(':id', id)}>
          <img className="place-card__image" src={previewImage} width={imgWidth} height={imgHeight} alt="Place image" />
        </Link>
      </div>
      <div className={`${cardInfoClassName}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoritesButton isFavorite={isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={getMarkUpRanking(rating)}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(':id', id)}>{title}</Link>
        </h2>
        <p className="place-card__type">{makeFirstLetterUppercase(type)}</p>
      </div>
    </article>
  );
}

export default OfferCard;

import classNames from 'classnames';

type FavoritesButtonProps = {
  isFavorite: boolean;
};

function FavoritesButton({ isFavorite }: FavoritesButtonProps) {
  const favoriteLabel: string = `${isFavorite ? 'In' : 'To'} bookmarks`;
  const favoriteClass: string = classNames('button', 'place-card__bookmark-button', {
    'place-card': !isFavorite,
    'place-card__bookmark-button--active': isFavorite
  });
  return (
    <button className={favoriteClass} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{favoriteLabel}</span>
    </button>
  );
}

export default FavoritesButton;

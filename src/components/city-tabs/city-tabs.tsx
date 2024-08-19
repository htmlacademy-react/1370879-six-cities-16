import { Link } from 'react-router-dom';
import { OfferTemplateType } from '../../types/offer';

type CityTabsItemsProps = {
  cityName: string;
  isActive: boolean;
  onClick: (city: string) => void | undefined;
}

type CityTabsProps = {
  offers: OfferTemplateType[];
  selectedCity: string;
  onCityClick: (city: string) => void;
}

function CityTabsItem({ cityName, isActive, onClick }: CityTabsItemsProps) {
  const onClickHandler = () => {
    if (onClick) {
      onClick(cityName);
    }
  };

  return (
    <li
      className='locations__item'
      onClick={onClickHandler}
    >
      <Link
        className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`}
        to={'#'}
      >
        <span>{cityName}</span>
      </Link>
    </li>
  );
}

function CityTabs({ selectedCity, offers, onCityClick }: CityTabsProps) {
  return (
    <ul className='locations__list tabs__list'>
      {offers.map((offer) => (
        <CityTabsItem
          isActive={offer.city.name === selectedCity}
          onClick={onCityClick}
          cityName={offer.city.name}
          key={offer.id}
        />
      ))}
    </ul>

  );
}

export default CityTabs;

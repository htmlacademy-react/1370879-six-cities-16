import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Offers } from '../../types/offer';

type CityTabsItemsProps = {
  cityName: string;
  activeClass: string;
}

type CityTabsProps = {
  offers: Offers[];
}

function CityTabsItem({ cityName, activeClass }: CityTabsItemsProps) {
  const activeTabs: string = classNames('locations__item-link', {
    'tabs__item--active': activeClass === cityName
  });
  return (
    <li className='locations__item' key={cityName}>
      <Link
        className={activeTabs}
        to={'#'}
      >
        <span>{cityName}</span>
      </Link>
    </li>
  );
}

function CityTabs({ offers }: CityTabsProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className='locations__list tabs__list'>
          {offers.map((offer) => (
            <CityTabsItem cityName={offer.city.name} activeClass={'Berlin'} key={offer.id}/>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;

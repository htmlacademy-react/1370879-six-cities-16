// import CityTabsItem from '../city-tabs-item/city-tabs-item';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { offers } from '../../mocks/offers/offers';
import { Offers } from '../../types/offer';

type CityTabsProps = {
  offerList: Offers;
  activeClass: string;
}

function CityTabsItem({ offerList, activeClass }: CityTabsProps) {
  const {city, id } = offerList;
  const activeTabs: string = classNames('locations__item-link', {
    'tabs__item--active': activeClass === city.name
  });
  return (
    <li className='locations__item' key={id}>
      <Link
        className={activeTabs}
        to={'#'}
      >
        <span>{city.name}</span>
      </Link>
    </li>
  );
}

function CityTabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className='locations__list tabs__list'>
          {offers.map((offer) => (
            <CityTabsItem offerList={offer} activeClass={'Amsterdam'} key={offer.id}/>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;

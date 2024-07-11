import { CITIES } from '../../const';

type CitiesProp = {
  city: string;
  activeClass: boolean;
}

function LocationItem({ city, activeClass }: CitiesProp) {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${activeClass ? 'tabs__item--active' : null }`} href="#">
        <span>{city}</span>
      </a>
    </li>
  );
}

function LocationList() {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city, index) => <LocationItem key={city} city={city} activeClass={index === 2} />)}
    </ul>
  );
}

export default LocationList;

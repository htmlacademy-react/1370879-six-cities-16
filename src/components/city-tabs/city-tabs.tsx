import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { CITIES } from '../../const';

function CityTabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className='locations__list tabs__list'>
          {CITIES.map(({ name, slug }) => (
            <li className='locations__item' key={slug}>
              <NavLink
                className={({ isActive }) => classNames('locations__item-link',{
                  'tabs__item--active': isActive
                },
                'tabs__item'
                )}
                to={slug}
              >
                <span>{name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

// function LocationItem({ city, activeClass }: CitiesProp) {
//   return (
//     <li className="locations__item">
//       <a className={`locations__item-link tabs__item ${activeClass ? 'tabs__item--active' : null }`} href="#">
//         <span>{city}</span>
//       </a>
//     </li>
//   );
// }

// function LocationList() {
//   return (
//     <ul className="locations__list tabs__list">
//       {CITIES.map((city, index) => <LocationItem key={city} city={city} activeClass={index === 2} />)}
//     </ul>
//   );
// }

export default CityTabs;

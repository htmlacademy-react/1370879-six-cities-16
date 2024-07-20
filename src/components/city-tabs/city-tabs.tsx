import CityTabsItem from '../city-tabs-item/city-tabs-item';
import { CITIES } from '../../const';

function CityTabs() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className='locations__list tabs__list'>
          {CITIES.map(({ name, slug }, index) => (
            <CityTabsItem name={name} slug={slug} activeClass={index === 1} key={slug}/>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;

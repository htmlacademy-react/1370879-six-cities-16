import { Link } from 'react-router-dom';
import classNames from 'classnames';

type CityTabsProps = {
  name: string;
  slug: string;
  activeClass: boolean;
}

function CityTabsItem({ name, slug, activeClass }: CityTabsProps) {
  const activeTabs: string = classNames('locations__item-link', {
    'tabs__item--active': activeClass
  });
  return (
    <li className='locations__item' key={slug}>
      <Link
        className={activeTabs}
        to={slug}
      >
        <span>{name}</span>
      </Link>
    </li>
  );
}

export default CityTabsItem;

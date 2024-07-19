import { Link } from 'react-router-dom';

type CityTabsProps = {
  name: string;
  slug: string;
  activeClass: boolean;
}

function CityTabsItem({ name, slug, activeClass }: CityTabsProps) {
  return (
    <li className='locations__item' key={slug}>
      <Link
        className={`locations__item-link ${activeClass ? 'tabs__item--active' : ''}`}
        to={slug}
      >
        <span>{name}</span>
      </Link>
    </li>
  );
}

export default CityTabsItem;

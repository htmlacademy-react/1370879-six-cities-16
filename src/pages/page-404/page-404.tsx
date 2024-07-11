import { Link } from 'react-router-dom';
import style from './style.module.css';

const Page404 = () => (
  <div className={style.root}>
    <p className={style.root__text}>404 Not Found</p>
    <Link
      className={style.root__link}
      to="/"
    >
        Back to main page
    </Link>
  </div>
);

export default Page404;

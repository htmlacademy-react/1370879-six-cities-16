import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import style from './style.module.css';
import Counter from '../../components/counter/counter';

const Page404 = () => (
  <div className="page page--not-found">
    <Helmet>
      <title>Страница 404 Not Found</title>
    </Helmet>

    <main className={style.root}>
      <h1 className={style.root__text}>Error - 404: Page Not Found</h1>
      <Link
        className='button form__submit'
        to="/"
      >
        Back to main page
      </Link>
    </main>

    <Counter />
  </div>
);

export default Page404;

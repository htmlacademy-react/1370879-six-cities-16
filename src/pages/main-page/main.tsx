import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import CityTabs from '../../components/city-tabs/city-tabs';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import { Offers } from '../../types/offer';
import OfferCardList from '../../components/offer-card-list/offer-card-list';

export type MainProps = {
  offers: Offers[];
}

export function Main({ offers }: MainProps) {
  return (
    <>
      <Helmet>
        <title>Главная страница предложения Шесть Городов</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs/>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sorting />
              <OfferCardList offers={offers} />
            </section>
            <div className="cities__right-section">
              <Map/>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

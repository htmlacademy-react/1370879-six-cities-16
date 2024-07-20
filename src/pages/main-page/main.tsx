import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import CityTabs from '../../components/city-tabs/city-tabs';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';
import { Offer } from '../../types/offers';
import OfferCardList from '../../components/offer-card-list/offer-card-list';

// const OFFER_CARD_COUNT: number = 5;

export type MainProps = {
  places: number;
  offers: Offer[];
}

export function Main({ places, offers }: MainProps) {
  return (
    <>
      <Helmet>
        <title>Главная страница предложения Шесть Городов</title>
      </Helmet>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{places} places to stay in Amsterdam</b>
              <Sorting />
              <OfferCardList offers={offers} places={0}/>
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

import { Helmet } from 'react-helmet-async';
import { nanoid } from '@reduxjs/toolkit';
import Header from '../../components/header/header';
import CityTabs from '../../components/city-tabs/city-tabs';
import OfferCard from '../../components/offer-card/offer-card';
import Sorting from '../../components/sorting/sorting';
import Map from '../../components/map/map';

const OFFER_CARD_COUNT: number = 5;

export type MainProps = {
  places: number;
}

export function Main({ places }: MainProps) {
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
              <div className="cities__places-list places__list tabs__content">
                {Array.from({ length: OFFER_CARD_COUNT }).map(() => (
                  <OfferCard
                    isFavorite={false}
                    name='Beautiful &amp; luxurious apartment at great location'
                    isPremium
                    src='img/apartment-01.jpg'
                    price={120}
                    type='Apartment'
                    key={nanoid(10)}
                  />
                ))}
              </div>
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
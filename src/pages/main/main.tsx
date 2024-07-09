import { nanoid } from '@reduxjs/toolkit';
import Header from '../../components/header/header';
import LocationList from '../../components/location-list/location-list';
import OfferCard from '../../components/offer-card/offer-card';
import Sorting from '../../components/sorting/sorting';

const OFFER_CARD_COUNT: number = 5;

export type MainProps = {
  places: number;
}

export function Main({ places }: MainProps) {
  return (
    <>
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList />
          </section>
        </div>
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
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import CityTabs from '../../components/city-tabs/city-tabs';
import Sorting from '../../components/sorting/sorting';
import OfferCardList from '../../components/offer-card-list/offer-card-list';
import Map from '../../components/map/map';
import { OfferCardType } from '../../types/offer';

export type MainProps = {
  offers: OfferCardType[];
}

function Main({ offers }: MainProps) {
  const isEmptyPage = offers.length === 0;
  return (
    <>
      <Helmet>
        <title>Главная страница предложения Шесть Городов</title>
      </Helmet>
      <Header/>
      <main className={`page__main page__main--index ${isEmptyPage ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs offers={offers}/>
        <div className="cities">
          <div className={`cities__places-container container ${isEmptyPage ? 'cities__places-container--empty' : ''}`}>
            {isEmptyPage ? (
              <>
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">
                      We could not find any property available at the moment in
                    </p>
                  </div>
                </section>
                <div className="cities__right-section"></div>
              </>
            ) : (
              <>
                <section className = "cities__places places">
                  <h2 className = "visually-hidden">Places</h2>
                  <b className="places__found">{offers.length} places to stay in Amsterdam</b>
                  <Sorting />
                  <OfferCardList offers={offers} />
                </section>
                <div className="cities__right-section">
                  <Map />
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;

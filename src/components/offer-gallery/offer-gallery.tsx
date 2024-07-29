import { OFFER_GALLERIES_PICTURES } from '../../const.ts';
// import { Offer } from '../../types/offers';

type OfferGalleryItemProps = {
  path: string;
}

function OfferGalleryItem({ path }: OfferGalleryItemProps) {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={path} alt="Photo studio" />
    </div>
  );
}

function OfferGallery() {
  return (
    <div className="offer__gallery">
      {OFFER_GALLERIES_PICTURES.map((item) => <OfferGalleryItem key={item.id} path={item.path} />)}
    </div>
  );
}

export default OfferGallery;

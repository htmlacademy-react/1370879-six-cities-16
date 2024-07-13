import { OFFER_GALLERIES_PICTURES } from '../../const';

type OfferGalleryProps = {
  path: string;
  alt: string;
}

function OfferGalleryItem({ path, alt }: OfferGalleryProps) {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={path} alt={alt} />
    </div>
  );
}

function OfferGallery() {
  return (
    <div className="offer__gallery">
      {OFFER_GALLERIES_PICTURES.map((item) => <OfferGalleryItem key={item.id} path={item.path} alt={item.alt}/>)}
    </div>
  );
}

export default OfferGallery;

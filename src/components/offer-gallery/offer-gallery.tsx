type OfferGalleryItemProps = {
  path: string;
}

type OfferGalleryProps = {
  images: string[];
}

function OfferGalleryItem({ path }: OfferGalleryItemProps) {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={path} alt="Photo studio" />
    </div>
  );
}

function OfferGallery({ images }: OfferGalleryProps) {
  return (
    <div className="offer__gallery">
      {images.map((image) => <OfferGalleryItem key={image} path={image}/>)}
    </div>
  );
}

export default OfferGallery;

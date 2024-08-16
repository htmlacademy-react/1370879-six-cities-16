import { OfferTemplateType } from '../../types/offer';

type MapContainerProps = {
  offers?: OfferTemplateType[];
  baseClassName?: string;
}

function Map({ baseClassName = 'cities', offers }: MapContainerProps) {
  return (
    <section
      className={`${baseClassName}__map map`}
      style={{ height: '500px', backgroundColor: 'red'}}
    >
      {offers?.map((offer) => offer.id)}
    </section>
  );
}

export default Map;

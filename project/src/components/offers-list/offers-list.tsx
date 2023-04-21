import { useAppSelector } from '../../hooks';
import Card from '../card/card';
import getSortOffers from '../../utils/utils';

    type OfferListProps = {
      className: string;
      onCardHandle?: (activeCardId: number | null) => void;
    }

export default function OffersList({ className, onCardHandle }: OfferListProps) {
  const offers = useAppSelector((state) =>
    (className === 'near-places') ? state.nearbyOffers : state.offers);

  const sortTypeValue = useAppSelector((state) => state.sortType);
  const activeCity = useAppSelector((state) => state.city);

  const activeCityOffers = offers.filter((offer) => offer.city.name === activeCity);
  const sortOffersList = getSortOffers(activeCityOffers, sortTypeValue);

  return (
    <>
      {sortOffersList.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          className={className}
          onCardHandle={onCardHandle}
        />
      ))}
    </>
  );
}

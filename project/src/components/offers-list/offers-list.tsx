import { useAppSelector } from '../../hooks';
import Card from '../card/card';
import getSortOffers from '../../utils/utils';

    type OfferListProps = {
      className: string;
      onMouseCardOver?: (activeCardId: number | null) => void;
    }

export default function OffersList({ className, onMouseCardOver }: OfferListProps) {
  const offers = useAppSelector((state) =>
    (className === 'near-places') ? state.nearbyOffers : state.offers);

  const sortTypeValue = useAppSelector((state) => state.sortType);
  const sortOffersList = getSortOffers(offers, sortTypeValue);

  return (
    <>
      {sortOffersList.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          className={className}
          onMouseCardOver={onMouseCardOver}
        />
      ))}
    </>
  );
}

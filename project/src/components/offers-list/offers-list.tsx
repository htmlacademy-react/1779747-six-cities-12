import { useAppSelector } from '../../hooks';
import Card from '../card/card';
import getSortOffers from '../../utils/utils';
import { getNearbyOffers } from '../../store/room-data/room-data.selectors';
import { getOffersData } from '../../store/offers-data/offers-data-selectors';
import { getSortType } from '../../store/main-data/main-data-selectors';

    type OfferListProps = {
      className: string;
      onMouseCardOver?: (activeCardId: number | null) => void;
    }

export default function OffersList({ className, onMouseCardOver }: OfferListProps) {
  const offers = useAppSelector(
    (className === 'near-places') ? getNearbyOffers : getOffersData
  );

  const sortTypeValue = useAppSelector(getSortType);
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

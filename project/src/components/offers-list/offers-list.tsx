import { useAppSelector } from '../../hooks';
import Card from '../card/card';
import getSortOffers from '../../utils/utils';
import { Offer } from '../../types/offers';
import { getSortType } from '../../store/main-data/main-data-selectors';

    type OfferListProps = {
      className: string;
      offers: Offer[];
      onMouseCardOver?: (activeCardId: number | null) => void;
    }

export default function OffersList({ className, offers, onMouseCardOver }: OfferListProps) {
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

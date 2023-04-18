import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import Card from '../card/card';
import { Offer } from '../../types/offers';

    type OfferListProps = {
      offersList: Offer[];
      className: string;
    }

export default function OffersList({ offersList, className }: OfferListProps) {
  const [, setCardActive] = useState <number | null> (null);
  const offersCount = useAppSelector((state) => state.offersCount);

  return (
    <>
      {offersList.slice(0, offersCount).map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          className={className}
          onMouseOver={setCardActive}
        />
      ))}
    </>
  );
}

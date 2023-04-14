import { useState } from 'react';
import Card from '../card/card';
import { Offer } from '../../types/offers';

    type OfferListProps = {
      offersCount?: number;
      offersList: Offer[];
      className: string;
    }

export default function OffersList({ offersList, offersCount, className }: OfferListProps) {
  const [, setCardActive] = useState <number | null> (null);

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

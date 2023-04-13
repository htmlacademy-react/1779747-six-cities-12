import { useState } from 'react';
import Card from '../card/card';
import { Offer } from '../../types/offers';

    interface Props {
      offersCount: number;
      offersList: Offer[];
    }

export default function OffersList({ offersList, offersCount }: Props) {
  const [, setCardActive] = useState <number | null> (null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.slice(0, offersCount).map((i) => (
        <Card
          key={i.id}
          offer={i}
          onMouseOver={setCardActive}
        />
      ))}
    </div>
  );
}



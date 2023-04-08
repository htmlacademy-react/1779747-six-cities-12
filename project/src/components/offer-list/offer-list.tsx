import { useState } from 'react';
import Card from '../card/card';
import { OfferType } from '../../types/offers';

    interface Props {
      offersCount: number;
      offersList: OfferType[];
    }

export default function OffersList({ offersList, offersCount }: Props) {
  const [, setMouseHandler] = useState <number | null> (null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.slice(0, offersCount).map((i) => (
        <Card
          key={i.id}
          offer={i}
          setMouseHandler={setMouseHandler}
        />
      ))}
    </div>
  );
}



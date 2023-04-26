import { Offer } from '../types/offers';


export default function getSortOffers (offers: Offer[], sortType: string){
  switch (sortType) {
    case (sortType = 'Price: low to high'):
      return offers.slice().sort((a, b) => a.price - b.price);
    case (sortType = 'Price: high to low'):
      return offers.slice().sort((a, b) => b.price - a.price);
    case (sortType = 'Top rated first'):
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }

}

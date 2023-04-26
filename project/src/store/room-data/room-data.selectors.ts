import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { Offer } from '../../types/offers';
import { Reviews } from '../../types/reviews';


export const getNearbyOffers = (state: State): Offer[] => state[NameSpace.Room].nearbyOffers;
export const getReviews = (state: State): Reviews[] => state[NameSpace.Room].reviews;

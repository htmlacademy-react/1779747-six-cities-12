import {NameSpace} from '../../const';
import {State} from '../../types/state';
import { Offer } from '../../types/offers';


export const getOffersData = (state: State): Offer [] => state[NameSpace.Offers].offers;
export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Offers].isOffersDataLoading;

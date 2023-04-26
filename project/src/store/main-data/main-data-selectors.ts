import {NameSpace} from '../../const';
import {State} from '../../types/state';


export const getChoiceCity = (state: State): string => state[NameSpace.Main].city;
export const getSortType = (state: State): string => state[NameSpace.Main].sortType;

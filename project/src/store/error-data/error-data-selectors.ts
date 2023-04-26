import {NameSpace} from '../../const';
import {State} from '../../types/state';

export const getErrorData = (state: State): string | null => state[NameSpace.Error].error;

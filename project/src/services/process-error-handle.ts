import {store} from '../store';
import { setError } from '../store/error-data/error-data';


export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
};

import {useAppSelector} from '../../hooks';
import { getErrorData } from '../../store/error-data/error-data-selectors';
import './error-message.css';

export default function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getErrorData);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

import { setFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';

import css from './FilterByName.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <label className={css.label}>
      Find contacts by name:
      <input
        type="text"
        name="filter"
        className={css.input}
        value={filter}
        onChange={event => dispatch(setFilter(event.target.value.trim()))}
      />
    </label>
  );
};

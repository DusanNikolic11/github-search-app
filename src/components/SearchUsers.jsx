import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/github/githubSlice';
import { FaSearch } from 'react-icons/fa';

const SearchUsers = () => {
  const [text, setText] = useState('');
  const [touched, setTouched] = useState(false);
  const { isError, message } = useSelector((state) => state.github);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    if (text.trim() !== '') {
      dispatch(getUsers(text));
      setTouched(false);
    }
    setText('');
  };

  const conditionalClasses =
    (touched && text.trim() === '') || isError
      ? 'input input-bordered w-full input-secondary'
      : 'input input-bordered w-full';

  return (
    <div className="container mx-auto px-6">
      <div className="form-control">
        <form onSubmit={onSubmit}>
          {touched && text.trim() === '' && (
            <label className="label">
              <span className="label-text">Enter something!</span>
            </label>
          )}
          {isError && (
            <label className="label">
              <span className="label-text">{message}</span>
            </label>
          )}
          <div className="input-group">
            <input
              type="text"
              placeholder="Search user on Github…"
              className={conditionalClasses}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit" className="btn btn-primary btn-square">
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchUsers;

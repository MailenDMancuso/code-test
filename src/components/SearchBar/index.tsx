import React from 'react';

/** Styles */
import './searchBarStyles.scss';

/** Search bar component for managing the users' searching by name or email fields */
const SearchBar = ({ value, onChangeHandler }: { value: string; onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void }) => (
  <div className='search-bar-container'>
    Search users by name or email:
    <input type="text" defaultValue={value} placeholder="Search..." onChange={onChangeHandler} />
  </div>
);

export default SearchBar;

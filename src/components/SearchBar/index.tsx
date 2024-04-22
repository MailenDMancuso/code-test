import React from 'react';

/** Styles */
import './searchBarStyles.css';

interface SearchBarProps {
  value: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/** Search bar component for managing the users' searching by name or email fields */
const SearchBar = ({ value, onChangeHandler }: SearchBarProps) => (
  <div className='search-bar-container'>
    Search users by name:
    <input name="search" type="text" defaultValue={value} placeholder="Search..." onChange={onChangeHandler} />
  </div>
);

export default SearchBar;

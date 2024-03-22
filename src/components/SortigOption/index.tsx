import React from 'react';

/** Styles */
import './sortingButton.scss';

/** Sorting Component for managing the users' list sorting, based on name field */
const SortingOption = ({ label, onClickHandler }: { label: string; onClickHandler: () => void }) => (
  <button type="button" className="sorting-button" onClick={onClickHandler}>
    {label}
  </button>
);

export default SortingOption;

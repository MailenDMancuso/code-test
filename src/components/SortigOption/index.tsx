import React from 'react';

/** Styles */
import './sortingButton.scss';

/** Sorting Component for managing the users' list sorting, based on name field */
const SortingOption = ({ label, disableOption, onClickHandler }: { label: string; disableOption: boolean; onClickHandler: () => void }) => (
  <button type="button" className="sorting-button" disabled={disableOption} onClick={onClickHandler}>
    {label}
  </button>
);

export default SortingOption;

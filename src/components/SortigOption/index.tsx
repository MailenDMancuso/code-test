import React from 'react';

/** Styles */
import './sortingButton.css';

interface SortingOptionProps {
  label: string;
  disableOption: boolean;
  onClickHandler: () => void;
}

/** Sorting Component for managing the users' list sorting, based on name field */
const SortingOption = ({ label, disableOption, onClickHandler }: SortingOptionProps) => (
  <button type="button" className="sorting-button" disabled={disableOption} onClick={onClickHandler}>
    {label}
  </button>
);

export default SortingOption;

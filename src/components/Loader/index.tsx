import React from 'react';

/** Third party packages */
import { TailSpin } from "react-loader-spinner";

/** Styles */
import './loaderStyles.scss';

/** Loader comopnent for the loading state */
const Loader = () => (
  <div className="loading-container">
    <TailSpin color="lightBlue" width="50px" height="50px" />
  </div>
);

export default Loader;

import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import GMap from "../g-map";
import LineItem from "../line-item";
const MapErrorFallback = () => (
  <div
    className="text-red-500 h-56 flex flex-col justify-center items-center"
    role="alert"
  >
    <h2 className="text-lg font-semibold">Ooops, something went wrong with Google map.</h2>
    <button
      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-red-300 mt-2 rounded-full text-xs px-4 py-1 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      onClick={() => window.location.assign(window.location.href)}
    >
      Reload Page
    </button>
  </div>
);
const AddressCard = ({ detail }) => {
  return (
    <div className="md:border-l border-gray-300 px-4 w-1/2 md:w-full">
      <div className="text-xs text-light-muted mb-2 text-center md:text-left">
        Address :
      </div>
      <ul className="text-sm text-gray-700 ml-4">
        <LineItem label="Street" value={detail.street} />
        <LineItem label="Suite" value={detail.suite} />
        <LineItem label="City" value={detail.city} />
        <LineItem label="Zipcode" value={detail.zipcode} />
        <ErrorBoundary FallbackComponent={MapErrorFallback}>
          <GMap />
        </ErrorBoundary>
      </ul>
    </div>
  );
};

export default AddressCard;

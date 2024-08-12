import { useContext, useState, useReducer } from "react";
import PackageViewComponent from "./PackageView";
import SearchPackageComponent from "./SearchPackage";
import HolidayContext from "./HolidayContext";
import holidayPackageList from "./fakedb";

let HolidayComponent = () => {
  const searchReducer = (state, action) => {
    switch (action.type) {
      case "SEARCH_SUBJECT":
        return { ...state, searchSubject: action.payload };
      case "PRICE_SEARCH_FROM":
        return { ...state, priceRangeFrom: action.payload };
      case "PRICE_SEARCH_TO":
        return { ...state, priceRangeTo: action.payload };
      default:
        return state;
    }
  };

  const [search, dispatchSearch] = useReducer(searchReducer, {
    searchSubject: "",
    priceRangeFrom: "",
    priceRangeTo: "",
  });

  return (
    <div className="p-1">
      <h1 style={{ color: "darkblue", textAlign: "center" }}>Context API</h1>

      <HolidayContext.Provider
        value={{ holidayPackageList, search, dispatchSearch }}
      >
        <SearchPackageComponent />
        <PackageViewComponent />
      </HolidayContext.Provider>
    </div>
  );
};

export default HolidayComponent;

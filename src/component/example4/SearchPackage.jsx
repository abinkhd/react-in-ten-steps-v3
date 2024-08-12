import { useContext, useState } from "react";
import HolidayContext from "./HolidayContext";
import { type } from "@testing-library/user-event/dist/type";


let SearchPackageComponent = () => {
    const [searchInput,setSearchInput]=useState("");
    const [priceFromInput,setPriceFromInput]=useState(0);
    const [priceToInput,setPriceToInput]=useState(0);
    const {search,dispatchSearch}=useContext(HolidayContext);
    const handleSearchInputChange=(e)=>{
        setSearchInput(e.currentTarget.value);
        console.log(searchInput);
        dispatchSearch({type:'SEARCH_SUBJECT',payload:e.currentTarget.value});
    }
    const handlePriceFromChange=(e)=>{
        setPriceFromInput(e.currentTarget.value);
        console.log(priceFromInput);
        dispatchSearch({type:'PRICE_SEARCH_FROM',payload:e.currentTarget.value});
    }
    const handlePriceToChange=(e)=>{
        setPriceToInput(e.currentTarget.value);
        console.log(e.currentTarget.value,search.priceRangeTo);
        dispatchSearch({type:'PRICE_SEARCH_TO',payload:e.currentTarget.value});
    }
    return(
        <div className="card shadow m-3 p-2">
            <div className="row my-2 mx-1">
                <div className="col-md-6">
                    <input type="search" value={searchInput}  placeholder="search offer" onChange={handleSearchInputChange} className="form-control"/>
                </div>

                <div className="col-md-3">
                    <input type="number" value={priceFromInput} placeholder="Price from" onChange={handlePriceFromChange} className="form-control" />
                </div>

                <div className="col-md-3">
                    <input type="number" value={priceToInput} placeholder="Price to" onChange={handlePriceToChange} className="form-control"/>
                </div>
            </div>
        </div>
    )
}


export default SearchPackageComponent;
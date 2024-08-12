import { useContext } from "react";
import HolidayContext from "./HolidayContext";

let PackageViewComponent = () => {
  let { holidayPackageList, search } = useContext(HolidayContext);

  const searchedProducts = () => {
    let searchProducts = holidayPackageList;
    if (search.searchSubject !== "" && search.searchSubject !== 0) {
      searchProducts = searchProducts.filter((p) =>
        p.packageName.toLowerCase().includes(search.searchSubject)
      );
    } else if (search.priceRangeFrom !== "" && search.searchSubject !== 0) {
      searchProducts = searchProducts.filter(
        (p) =>
          parseInt(p.payblePrice.replace("₹", "").replace(",", "")) >=
          search.priceRangeFrom
      );
    } else if (search.priceRangeTo !== "" && search.searchSubject !== 0) {
      searchProducts = searchProducts.filter(
        (p) =>
          parseInt(p.payblePrice.replace("₹", "").replace(",", "")) <=
          search.priceRangeTo
      );
    // } else if (
    //   search.priceRangeTo !== "" &&
    //   search.searchSubject !== 0 &&
    //   search.priceRangeTo !== "" &&
    //   search.searchSubject !== 0
    // ) {
    //   searchProducts = searchProducts.filter(
    //     (p) =>
    //       parseInt(p.payblePrice.replace("₹", "").replace(",", "")) >=
    //         search.priceRangeFrom &&
    //       parseInt(p.payblePrice.replace("₹", "").replace(",", "")) <=
    //         search.priceRangeTo
    //   );
    }

    //add condition to search with all together
    return searchProducts;
  };

  return (
    <>
      {searchedProducts().map((item) => (
        <div className="card m-3">
          <a href="#" style={{ "text-decoration": "none" }}>
            <div className="row g-0">
              <div className="col-md-4 p-2">
                <img src={item.imgPath} style={{ width: "300px" }} />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title">{item.packageName}</h5>
                  <p className="card-text bg-white">{item.descr}</p>
                </div>
              </div>
              <div className="col-md-2 bg-light">
                <div className="card-body">
                  <p className="card-text text-danger fw-bold bg-light">
                    {item.offer}
                    <br />{" "}
                    <span>
                      <del className="text-secondary">{item.packagePrice}</del>
                    </span>
                    <br />{" "}
                    <span className="fs-1 fw-bold text-dark">
                      {item.payblePrice}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default PackageViewComponent;

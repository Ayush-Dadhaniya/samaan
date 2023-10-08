import React, { useEffect, useState } from "react";
import "./OnSearch.css";
import Header from "./Header";
import Footer from "./Footer";
import OnSearchLeft from "./OnSearchLeft";
import OnSearchRight from "./OnSearchRight";
import { useParams } from "react-router-dom";
import { set } from "mongoose";

const OnSearch = () => {
  const { id } = useParams();
  const myset = new Set();
  const [product_data, setproduct_data] = useState(null);
  const [brandsdata, setbrandsdata] = useState(null);
  const [brandDataFilter, setbrandDataFilter] = useState(null);
  const [filteredData, setfilteredData] = useState(product_data);

  const fetchdata = async () => {
    await fetch(
      `https://api-krudra9125-gmailcom.vercel.app/api/searchbarRequestedData/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setproduct_data(data);
        setfilteredData(data);
        data.map((item) => {
          myset.add(item.brand.toUpperCase());
          return null;
        });
        setbrandsdata(Array.from(myset));
        console.log(myset);
        console.log(brandsdata);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchdata();
  }, []);
  useEffect(() => {
    if (brandDataFilter !== null) {
      setfilteredData(
        product_data.filter((item) => item.brand === brandDataFilter)
      );
    }
  }, [brandDataFilter]);

  return (
    <div>
      <div className="w-[100%] h-[100%] mt-[8rem]   ">
        <div className="w-[100%] h-[100%] max-w-screen-2xl mx-auto flex flex-col justify-start items-center min-h-fit  ">
          <div className="OnSearchOuter Vflex AroundFlex">
            <div className="OnSearchInnerLeft">
              <OnSearchLeft
                data={brandsdata}
                filterFunction={setbrandDataFilter}
              />
            </div>
            <div className="OnSearchInnerRight">
              <OnSearchRight data={filteredData} />
              {/* {console.log("filteredData",filteredData)} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnSearch;

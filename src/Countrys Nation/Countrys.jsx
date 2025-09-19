import React, { use, useState } from "react";
import Country from "./Country";

const Countrys = ({ CountyPromice }) => {
  const CountrysData = use(CountyPromice);
  const Countrys = CountrysData.countries;
  const [CountVisited, SetCountVisited] = useState([]);
  const VisitCountry = (country) => {
    // console.log("Clickkdgdjkghjdk",country);
    const totalVisitedCountry = [...CountVisited,country]
    SetCountVisited(totalVisitedCountry)
  };
  // console.log(Countrys);
  return (
    <>
        <h2 className="text-2xl font-semibold mx-20">Totla Visited Country : {CountVisited.length}</h2>
      <div className="grid grid-cols-1 mx-10 md:mx-20 md:grid-cols-3">
        {Countrys.map((country) => (
          <Country key={country.cca3.cca3} country={country} VisitCountry={VisitCountry}></Country>
        ))}
      </div>
    </>
  );
};

export default Countrys;

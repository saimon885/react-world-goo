import React from "react";

const Country = ({ country }) => {
  //   console.log(country);
  const CountryFlag = country.population.population;
  //   console.log(CountryFlag);
  return (
    <div className="border p-4 m-2 md:flex md:items-center md:gap-10">
      <img className=" w-7/12 md:w-5/12 mx-auto" src={country.flags.flags.png} alt="" />
      <div>
        <h2>
          <span className="font-bold">Country Name : </span>
          {country.name.common}
        </h2>
        <h2>
          <span className="font-bold">Area :</span> {country.area.area}{" "}
          {country.area.area > 300000 ? "Its Big Country" : "Its Small Country"}{" "}
        </h2>
        <h2>
          <span className="font-bold">Population : </span>
          {country.population.population}
        </h2>
      </div>
    </div>
  );
};

export default Country;

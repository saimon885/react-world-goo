import React, { useState } from "react";

const Country = ({ country,VisitCountry }) => {
  const [visited,setvisited] = useState(false)

  function handleVisited(){
    // 1st step
      // if(visited){
      //   setvisited(false)
      // }
      // else{
      //   setvisited(true)
      // }

      // 2nd step
      // setvisited(visited ? false : true)

      // 3rd step
      setvisited(!visited)
      VisitCountry(country)
  }
  // const CountryFlag = country.population.population;
  //   console.log(CountryFlag);
  return (
    <div className={`border p-4 m-2 md:flex md:items-center md:gap-10 ${visited ? 'bg-pink-400': 'not visited'}`}>
      <img
        className=" w-7/12 md:w-5/12 mx-auto shadow"
        src={country.flags.flags.png}
        alt=""
      />
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
        <button className="shadow-2xl px-3 py-2 mt-2 cursor-pointer hover:bg-green-600 bg-amber-400 rounded-2xl" onClick={handleVisited}>{visited ? "Visited":"Not Visited" }</button>
      </div>
    </div>
  );
};

export default Country;

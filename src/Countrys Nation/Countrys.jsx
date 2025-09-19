import React, { use } from 'react';
import Country from './Country';

const Countrys = ({CountyPromice}) => {
    const CountrysData = use(CountyPromice)
    const Countrys = CountrysData.countries
    // console.log(Countrys);
    return (
        <>
            <div className='grid grid-cols-3 mx-20'>
                {
                Countrys.map(country => <Country key={country.cca3.cca3} country={country}></Country>)
            }
            </div>
        </>
    );
};

export default Countrys;
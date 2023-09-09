import React, { useContext } from 'react';
import '../components/InputForm.css';
import { CountryListContext, CountryContext } from '../constants';

function InputForm() {
    const { countries } = useContext(CountryListContext);
    const { selectedCountry, setSelectedcountry } = useContext(CountryContext);

    const handleCountrySelection = (e) => {
        setSelectedcountry(e.target.value);
    }

    return (
        <div className='form-container'>
            <form action="" className="country-selection-form">
                <label htmlFor="country">Select a country you want to get details of:</label>

                <select 
                    name="selectedCountry" 
                    value={selectedCountry} 
                    onChange={handleCountrySelection} 
                    id="country"
                >
                    <option value="">Select Country</option>

                    {countries?.map(country => {
                        return (
                            <option value={country.name} key={country.alpha3Code}>
                                {country.name}
                            </option> 
                        );
                    })}
                </select>
            </form>
        </div>
    );
}

export default InputForm;

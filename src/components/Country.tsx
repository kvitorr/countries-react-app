import { useState } from 'react';
import formatNumber from '../utils/formatString'
import './Country.css'
import ReactDOM from 'react-dom';
import CountryDetails from './CountryDetails';

interface ICountryProps {
    country: any
}


const Country: React.FC<ICountryProps> = ({country}) =>   {  

    const [showDetails, setShowDetails] = useState(false);

    return (
        <>
            <div className='countryBox' onClick={() => setShowDetails(!showDetails)}>
                <div className='countryImage'>
                    <img src={country.flags.svg} alt={country.flags.alt} />
                </div>

                <div className='countryData'>
                    <div className='countryPopulation'>
                        <p className='countryPopulationData'>{formatNumber(String(country.population))}</p>
                        <p className='countryPopulationName'>{country.name.common}</p>
                    </div>

                    <button className='learnMoreBtn' onClick={() => setShowDetails(!showDetails)}>
                        Learn More
                    </button>
                </div>
            </div>

            {showDetails && (
                ReactDOM.createPortal(
                    <CountryDetails country={country} setShowDetails={setShowDetails}/>,
                    document.body
                )
            )}
        </>
    )
}


export default Country
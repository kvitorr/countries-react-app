import formatNumber from '../utils/formatString'
import './Country.css'

interface ICountryProps {
    country: any
}


const Country: React.FC<ICountryProps> = ({country}) => {
    console.log(country)
    return (
        <>
            <div className='countryBox'>
                <div className='countryImage'>
                    <img src={country.flags.svg} alt={country.flags.alt} />
                </div>

                <div className='countryData'>
                    <div className='countryPopulation'>
                        <p className='countryPopulationData'>{formatNumber(String(country.population))}</p>
                        <p className='countryPopulationName'>{country.name.common}</p>
                    </div>

                    <button className='learnMoreBtn'>
                        Learn More
                    </button>
                </div>
            </div>
        </>
    )
}


export default Country
import "./CountryDetails.css"
import { IoMdClose } from 'react-icons/io'

interface ICountryDetailsProps {
    country: any,
    setShowDetails: any
}


const CountryDetails: React.FC<ICountryDetailsProps> = ({country, setShowDetails}) => {
    return (
        <div className="countryDetailBackground">
            <div className="countryDetailBox">

                <div className="countryDetailHeader">
                    <p>{country.name.common}</p>
                    <IoMdClose className="countryDetailClose" onClick={() => setShowDetails(false)}/>
                </div>

                <div className="countryDetailImage">
                    <img src={country.flags.svg} alt={country.flags.alt} />               
                </div>

                <div className="countryDetailSections">
                    <p className="CountryDetailGeneral">General</p>
                    <p className="CountryDetailWeather">Weather</p>
                </div>

            </div>
        </div>
    )
}

export default CountryDetails
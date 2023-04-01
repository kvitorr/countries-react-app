import './CountryGeneral.css'

import formatNumber from "../utils/formatString"

interface ICountryGeneralProps {
    country: any
}



const CountryGeneral: React.FC<ICountryGeneralProps> = ({country}) => {
    return (
        <div className="generalWrap">
            <table className='generalTable'>
                <tr>
                    <td className='tableTitle'>Official Name:</td>
                    <td className='tableContent'>{country.name.official}</td>
                </tr>

                <tr>
                    <td className='tableTitle'>Region:</td>
                    <td className='tableContent'>{country.region}</td>
                </tr>

                <tr>
                    <td className='tableTitle'>Population:</td>
                    <td className='tableContent'>{formatNumber(String(country.population))}</td>
                </tr>
                <tr>
                    <td className='tableTitle'>Continent:</td>
                    <td className='tableContent'>{country.continents.reduce((accumulator: string, currentValue: string) => accumulator + ' ' + currentValue)}</td>
                </tr>
                <tr>
                    <td className='tableTitle'>Area:</td>
                    <td className='tableContent'>{country.area}</td>
                </tr>
            </table>

            <a href={country.maps.googleMaps}>See on Maps</a>
        </div>
    )
}

export default CountryGeneral
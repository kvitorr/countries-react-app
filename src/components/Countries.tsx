import Country from "./Country"

interface ICountriesProps {
    listCountries: any
}


const Countries: React.FC<ICountriesProps> = ({listCountries}) => {
    return (
        <>            
        {listCountries.map((country: any, index: number) => {
                return <Country key={index} country={country}/>
            })}
        </>    
    )
}

export default Countries
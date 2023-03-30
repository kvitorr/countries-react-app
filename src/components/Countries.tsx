import Country from "./Country"

interface ICountriesProps {
    listCountries: any
}


const Countries: React.FC<ICountriesProps> = ({listCountries}) => {
    return (
        <>            {listCountries.map((country: any) => {
                return <Country country={country}/>
            })}
        </>    
    )
}

export default Countries
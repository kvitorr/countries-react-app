interface Countries {
    listCountries: any
}


const Countries: React.FC<Countries> = ({listCountries}) => {

    const isEmpty = listCountries.length === 0

    if(isEmpty) {
    
        
    }

    return (
        <div>
            {listCountries.map((country: any) => {
                return <p key={country.cca2}> {country.name.common}</p>
            })}
        </div>    
    )

}
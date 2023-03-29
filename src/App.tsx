import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [listCountries, setListCountries] = useState<any>([])


  useEffect(() => {

    if(searchTerm !== '') {
      axios.get(`https://restcountries.com/v3.1/name/${searchTerm}`)
      .then(response => response.data)
      .then(listCountries => setListCountries(listCountries))
      .catch(() => setListCountries([]))
    } else {
      setListCountries([])
    }
  }, [searchTerm])

  const handleSearchTermOnChange = (event: any) => {
    setSearchTerm(event.target.value)
  }

  return (
  <>
    find countries <input value={searchTerm} onChange={handleSearchTermOnChange} />
    
  </>
  )
}

export default App

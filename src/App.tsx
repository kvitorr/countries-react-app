import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Countries from './components/Countries'
import CountryDetails from './components/CountryDetails'
import Filter from './components/Filter'


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
    <main className='main'>
      <div className='searcher'>
        <h2>What country will you explore first?</h2>
        <Filter searchTerm={searchTerm} handleSearchTermOnChange={handleSearchTermOnChange}/>
      </div>
    
    <div className='countriesFounded'>
      <Countries listCountries={listCountries}/>
    </div>
    </main>
  </>
  )
}

export default App

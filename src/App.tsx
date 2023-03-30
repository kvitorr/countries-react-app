import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Countries from './components/Countries'

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
      <h2>What country will you explore first?</h2>
      <div className='searchBox'>
        <input placeholder='Search here...' className='searchInput' value={searchTerm} onChange={handleSearchTermOnChange} />
      </div>
    </main>
    <div className='countriesFounded'>
      <Countries listCountries={listCountries}/>
    </div>
  </>
  )
}

export default App

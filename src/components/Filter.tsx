import { useRef } from 'react';

import { FiSearch } from 'react-icons/fi'

import './Filter.css'
interface IFilterProps {
    searchTerm: string
    handleSearchTermOnChange: any
}


const Filter: React.FC<IFilterProps> = ({searchTerm, handleSearchTermOnChange}) => {
    const inputRef = useRef<HTMLInputElement>(null)

    const handleClick = () => {
        console.log('click')
      if(inputRef.current){
          inputRef.current.focus();

      }
    }


    return (
        <>
        <div className='searchBox'>
            <input ref={inputRef}  placeholder='Search here...' className='searchInput' value={searchTerm} onChange={handleSearchTermOnChange} />
        <FiSearch onClick={handleClick} className='search-icon'/>

        </div>    
        </>
    )
}

export default Filter
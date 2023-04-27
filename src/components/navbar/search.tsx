// import { SearchIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getSearchedImage } from '../../redux/reducers/searchImageSlice'
import searchIcon from '../../assets/search.svg'

interface IProps {
  inputType: string
}
const Search = ({ inputType }: IProps) => {
  const [focused, setFocused] = useState<boolean>(false)
  const [searchQuery, setSearchQuery] = useState<any>(" ")
  const dispatch = useDispatch()

  const handleSearchChange = (e: any) => {
    setSearchQuery(e.target.value)
  }

  const handleSubmit = (e: any) => {
    if(e.keyCode === 13){
      dispatch(getSearchedImage(searchQuery))
    }
  }

  return (
    <div
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={focused && inputType === 'simple-search' ? { backgroundColor: 'transparent', border: '1px solid #e5e5e5' }: {}}
      className={`${inputType === 'hero-btn' ? 'hero-search-btn' : 'search-wrapper'}`}>
      <img src={searchIcon} className="search-icon" alt='search' />
      <input
        type="text"
        placeholder="Search free high-resolution photos"
        className="search-input"
        onChange={handleSearchChange}
        onKeyUp={handleSubmit}
      />
    </div>
  )
}

export default Search;
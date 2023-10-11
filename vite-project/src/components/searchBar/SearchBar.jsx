/* eslint-disable react/prop-types */
// IMPORT NECESSARY FILES 
import SearchIcon from '@mui/icons-material/Search';

// IMPORTING CSS FILE
import './SearchBar.css'

// EXPORTING A SEARCHBAR FUNCTION THAT RETURNS A SEARCHBAR COMPONENT
export default function SearchBar(props){
    return(
        <div className='search-container'>
            <div className='search-container__search-bar'>
                <SearchIcon className='search-container__search-bar--search-button'/>
                
                <input 
                    type="text" 
                    name="search-data" 
                    id="search-bar"
                    placeholder='Search collection, or NFT'
                    value={props.formData.searchData}
                    onChange={props.updateFormData}
                />
                
                <div 
                    className='search-container__search-bar--close-button'
                    onClick={props.hideSearchBar}
                >X</div>
            </div>
        </div>
    )
}
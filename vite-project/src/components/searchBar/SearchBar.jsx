/* eslint-disable react/prop-types */
// IMPORT NECESSARY FILES 
// IMPORTING CSS FILE
import './SearchBar.css'

// EXPORTING A SEARCHBAR FUNCTION THAT RETURNS A SEARCHBAR COMPONENT
export default function SearchBar(props){
    return(
        <div className='search-bar-container'>
            <div className='search-bar-container__search-bar'>
                
                <input 
                    type="text" 
                    name="search-data" 
                    id="search-bar"
                    placeholder='Search collection, or NFT'
                    value={props.formData.searchData}
                    onChange={props.updateFormData}
                />
                
                <div 
                    className='search-bar-container__search-bar--close-button'
                    onClick={props.hideSearchBar}
                >X</div>
            </div>
        </div>
    )
}
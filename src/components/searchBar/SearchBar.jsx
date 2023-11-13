/* eslint-disable react/prop-types */
// IMPORT NECESSARY FILES 
import SearchIcon from '@mui/icons-material/Search';

// EXPORTING A SEARCHBAR FUNCTION THAT RETURNS A SEARCHBAR COMPONENT
export default function SearchBar(props){
    return(
        <div className='absolute w-full h-full bg-search-container transition-all duration-500 ease-in-out z-[1] font-[Inter]'>
            <div className='w-[90%] flex items-center justify-around m-auto mt-[100px] transition-all duration-500 ease-in-out bg-link-side-panel-container__side-panel--rewards-button h-[50px] shadow-search-container__search-bar rounded-[20px] gap-[10px]'>
                <SearchIcon className='cursor-default ml-[10px] transition-all duration-500 ease-in-out hover:scale-[1.4]'/>
                
                <input 
                    type="text" 
                    name="search-data"
                    placeholder='Search collection, or NFT'
                    value={props.formData.searchData}
                    onChange={props.updateFormData}
                    className='p-[5px] w-[70%] rounded-[5px] m-[10px] border-none text-left bg-[gray] text-black'
                />
                
                <div 
                    className='search-container__search-bar--close-button cursor-pointer bg-[red] w-[30px] h-[30px] border-[2px] border-solid border-black rounded-[10px] flex justify-center items-center font-[1rem] font-[Inter] mr-[10px] transition-all duration-500 ease-in-out hover:scale-[1.4] active:bg-[greenyellow]'
                    onClick={props.hideSearchBar}
                >X</div>
            </div>
        </div>
    )
}
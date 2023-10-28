import { useSearchContext } from '../contexts/SearchContext';

function SearchBar() {
    const { searchQuery, handleSearchQueryChange } = useSearchContext();

    return (
        <div className="search-bar">
            <input
                value={searchQuery}
                onChange={handleSearchQueryChange}
                className="search-bar__input"
            />
        </div>
    );
}

export default SearchBar;

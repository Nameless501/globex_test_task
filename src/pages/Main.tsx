import { SearchContextProvider } from '../contexts/SearchContext';
import SearchBar from '../components/SearchBar';
import UsersFeed from '../components/UsersFeed';

function Main() {
    return (
        <main className="main">
            <SearchContextProvider>
                <SearchBar />
                <UsersFeed />
            </SearchContextProvider>
        </main>
    );
}

export default Main;

import { ChangeEvent, ReactNode, useState } from 'react';
import SearchContext from '../context/SearchContext';
import useDebounce from '../../../hooks/useDebounce';
import useFetchUsersData from '../../../hooks/useFetchUsersData';

export function SearchContextProvider({ children }: { children: ReactNode }) {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearchQueryChange = (
        evt: ChangeEvent<HTMLInputElement>
    ): void => setSearchQuery(evt.target.value);

    const { debouncedValue, isDebounce } = useDebounce(searchQuery);

    const { usersData, isLoading, isError } = useFetchUsersData(debouncedValue);

    return (
        <SearchContext.Provider
            value={{
                searchQuery,
                handleSearchQueryChange,
                usersData,
                isLoading: isDebounce || isLoading,
                isError,
            }}
        >
            {children}
        </SearchContext.Provider>
    );
}

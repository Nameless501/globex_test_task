import { useContext } from 'react';
import SearchContext from '../context/SearchContext';
import { SearchContextType } from '../types/types';

export const useSearchContext = (): SearchContextType => {
    const contextValue = useContext(SearchContext);
    return { ...(contextValue as SearchContextType) };
};

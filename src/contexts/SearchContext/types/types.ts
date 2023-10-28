import { ChangeEvent } from 'react';
import { IUserData } from '../../../types/common';

export type SearchContextType = {
    searchQuery: string;
    usersData: IUserData[];
    handleSearchQueryChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    isLoading: boolean;
    isError: boolean;
};

import { useState, useCallback, useEffect } from 'react';
import { IUserData } from '../types/common';
import { API_URL } from '../configs/constants';
import { addUrlParam } from '../utils/helpers';

function useFetchUsersData(query: string) {
    const [usersData, setUsersData] = useState<IUserData[]>([]);

    const [isError, setIsError] = useState<boolean>(false);

    const [isLoading, setLoadingState] = useState<boolean>(false);

    const fetchUsersData = useCallback(async (): Promise<IUserData[]> => {
        const url =
            query.length > 0 ? addUrlParam(API_URL, 'term', query) : API_URL;
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error();
        }
        const data: IUserData[] = await res.json();
        return data;
    }, [query]);

    const getUsersData = useCallback(async (): Promise<void> => {
        try {
            setIsError(false);
            setLoadingState(true);
            const data = await fetchUsersData();
            setUsersData(data);
            setLoadingState(false);
        } catch (err) {
            setIsError(true);
            setLoadingState(false);
        }
    }, [fetchUsersData]);

    useEffect(() => {
        getUsersData();
    }, [query, getUsersData]);

    return { usersData, isError, isLoading };
}

export default useFetchUsersData;

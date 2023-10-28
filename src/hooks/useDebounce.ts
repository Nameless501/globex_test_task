import { useEffect, useState } from 'react';
import { DEBOUNCE_TIMEOUT } from '../configs/constants';

const useDebounce = (value: string, delay = DEBOUNCE_TIMEOUT) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(value);

    const [isDebounce, setIsDebounce] = useState<boolean>(false);

    useEffect(() => {
        setIsDebounce(true);

        const id = setTimeout(() => {
            setDebouncedValue(value);
            setIsDebounce(false);
        }, delay);

        return () => {
            clearTimeout(id);
        };
    }, [value, delay]);

    return { debouncedValue, isDebounce };
};
export default useDebounce;

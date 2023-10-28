import { useContext } from 'react';
import ModalContext from '../context/ModalContext';
import { ModalContextType } from '../types/types';

export const useModalContext = (): ModalContextType => {
    const contextValue = useContext(ModalContext);
    return { ...(contextValue as ModalContextType) };
};

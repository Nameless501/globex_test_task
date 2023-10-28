import { ReactNode, useState } from 'react';
import ModalContext from '../context/ModalContext';
import { IUserData } from '../../../types/common';

export function ModalContextProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const [userData, setUserData] = useState<IUserData | null>(null);

    const handleModalOpen = (user: IUserData) => {
        setIsOpen(true);
        setUserData(user);
    };

    const handleModalClose = () => {
        setIsOpen(false);
        setUserData(null);
    };

    return (
        <ModalContext.Provider
            value={{ isOpen, userData, handleModalOpen, handleModalClose }}
        >
            {children}
        </ModalContext.Provider>
    );
}

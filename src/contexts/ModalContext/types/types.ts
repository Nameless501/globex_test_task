import { IUserData } from '../../../types/common';

export type ModalContextType = {
    isOpen: boolean;
    userData: IUserData | null;
    handleModalOpen: (user: IUserData) => void;
    handleModalClose: () => void;
};

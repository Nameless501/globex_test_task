import { MouseEventHandler, useEffect, useRef } from 'react';
import { useModalContext } from '../contexts/ModalContext';
import { getFormattedDate } from '../utils/helpers';
import CloseButton from './CloseButton';

function UserInfoModal() {
    const modalRef = useRef<HTMLDialogElement>(null);

    const { isOpen, handleModalClose, userData } = useModalContext();

    const handleDialogClick: MouseEventHandler<HTMLDialogElement> = (evt) => {
        const isClickedOnBackDrop = evt.target === evt.currentTarget;
        if (isClickedOnBackDrop) handleModalClose();
    };

    useEffect(() => {
        if (isOpen && modalRef.current) {
            modalRef.current.showModal();
        } else {
            modalRef.current?.close();
        }
    }, [isOpen]);

    return (
        <dialog
            ref={modalRef}
            onClick={handleDialogClick}
            className={`
                info-modal
                ${isOpen ? 'info-modal_opened' : ''}
            `}
            onClose={handleModalClose}
        >
            <article className="info-modal__data">
                <h2 className="info-modal__name">{userData?.name}</h2>
                <div className="info-modal__button">
                    <CloseButton handleClick={handleModalClose} />
                </div>
                <div className="info-modal__info">
                    <span className="info-modal__row-title info-modal__row-title_place_phone">
                        Телефон:
                    </span>
                    <p className="info-modal__row-text info-modal__row-text_place_phone">
                        {userData?.phone}
                    </p>
                    <span className="info-modal__row-title info-modal__row-title_place_mail">
                        Почта:
                    </span>
                    <p className="info-modal__row-text info-modal__row-text_place_mail">
                        {userData?.email}
                    </p>
                    <span className="info-modal__row-title info-modal__row-title_place_date">
                        Дата приема:
                    </span>
                    <p className="info-modal__row-text info-modal__row-text_place_date">
                        {userData && getFormattedDate(userData.hire_date)}
                    </p>
                    <span className="info-modal__row-title info-modal__row-title_place_position">
                        Должность:
                    </span>
                    <p className="info-modal__row-text info-modal__row-text_place_position">
                        {userData?.position_name}
                    </p>
                    <span className="info-modal__row-title info-modal__row-title_place_department">
                        Подразделение:
                    </span>
                    <p className="info-modal__row-text info-modal__row-text_place_department">
                        {userData?.department}
                    </p>
                </div>
                <div className="info-modal__details">
                    <span className="info-modal__row-title">
                        Дополнительная информация:
                    </span>
                    <p className="info-modal__row-text">
                        {`${userData?.position_name} ${userData?.department}`}
                    </p>
                </div>
            </article>
        </dialog>
    );
}

export default UserInfoModal;

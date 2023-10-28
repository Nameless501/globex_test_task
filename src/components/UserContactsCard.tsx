import { IUserData } from '../types/common';
import phoneIcon from '../assets/images/phone-icon.svg';
import mailIcon from '../assets/images/mail-icon.svg';
import { useModalContext } from '../contexts/ModalContext';

interface IUserContactsCard {
    userData: IUserData;
}

function UserContactsCard({ userData }: IUserContactsCard) {
    const { handleModalOpen } = useModalContext();

    return (
        <article
            className="contacts-card"
            onClick={() => handleModalOpen(userData)}
        >
            <h2 className="contacts-card__name">{userData.name}</h2>
            <address className="contacts-card__contacts-wrapper">
                <div className="contacts-card__row">
                    <img
                        src={phoneIcon}
                        alt=""
                        className="contacts-card__icon"
                    />
                    <p className="contacts-card__contact">{userData.phone}</p>
                </div>
                <div className="contacts-card__row">
                    <img
                        src={mailIcon}
                        alt=""
                        className="contacts-card__icon"
                    />
                    <p className="contacts-card__contact">{userData.email}</p>
                </div>
            </address>
        </article>
    );
}

export default UserContactsCard;

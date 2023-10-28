import { EMPTY_LIST_MESSAGE } from '../configs/constants';
import { IUserData } from '../types/common';
import UserContactsCard from './UserContactsCard';

interface IUsersList {
    usersList: IUserData[];
}

function UsersList({ usersList }: IUsersList) {
    return (
        <div className="users-list">
            {usersList.length > 0 ? (
                <ul className="users-list__list">
                    {usersList.map((user, ind) => (
                        <li className="users-list__list-item" key={ind}>
                            <UserContactsCard userData={user} />
                        </li>
                    ))}
                </ul>
            ) : (
                <span className="users-list__message">
                    {EMPTY_LIST_MESSAGE}
                </span>
            )}
        </div>
    );
}

export default UsersList;

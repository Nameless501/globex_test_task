import { ModalContextProvider } from '../contexts/ModalContext';
import { useSearchContext } from '../contexts/SearchContext';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';
import UserInfoModal from './UserInfoModal';
import UsersList from './UsersList';

function UsersFeed() {
    const { usersData, isLoading, isError } = useSearchContext();

    return (
        <section>
            {isLoading && !isError && <Loader />}
            {isError && <ErrorMessage />}
            {!isLoading && !isError && (
                <ModalContextProvider>
                    <UsersList usersList={usersData} />
                    <UserInfoModal />
                </ModalContextProvider>
            )}
        </section>
    );
}

export default UsersFeed;

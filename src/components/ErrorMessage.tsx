import { ERROR_MESSAGE } from '../configs/constants';

function ErrorMessage() {
    return (
        <div className="error-message">
            <span className="error-message__text">{ERROR_MESSAGE}</span>
        </div>
    );
}

export default ErrorMessage;

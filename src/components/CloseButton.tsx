interface ICloseButton {
    handleClick: () => void;
}

function CloseButton({ handleClick }: ICloseButton) {
    return (
        <button type="button" className="close-button" onClick={handleClick} />
    );
}

export default CloseButton;

/** @format */
import { MainButton, useShowPopup } from "@vkruglikov/react-telegram-web-app";
function App() {
    const showPopupOnClick = async () => {
        const showPopup = useShowPopup();
        const message =
            "Thanks for using react-mini-app! I hope it helps you to create awesome Telegram Mini apps!";
        await showPopup({ title: "Hello world!", message: message });
    };
    return (
        <div>
            <h1>Hello </h1>
            <button
                onClick={showPopupOnClick}
                className='bg-gray-500 hover:bg-gray-400'
            >
                show message
            </button>
        </div>
    );
}

export default App;

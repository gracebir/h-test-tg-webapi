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
        <div className='min-h-screen flex items-center'>
            <div className='mx-auto'>
                <h1 className='text-2xl lg:text-4xl text-center font-bold'>
                    Hello{" "}
                </h1>
                <button
                    onClick={showPopupOnClick}
                    className='bg-gray-500 hover:bg-gray-400 text-white px-6 py-2 rounded-md'
                >
                    show message
                </button>
            </div>
        </div>
    );
}

export default App;

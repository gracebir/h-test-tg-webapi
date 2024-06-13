/** @format */
import { MainButton, useShowPopup } from "@vkruglikov/react-telegram-web-app";
function App() {
    const showPopup = useShowPopup();

    const handleClick = () =>
        showPopup({
            message: "Hello, I am popup",
        });

    return (
        <main className='min-h-screen flex items-center'>
            <div className='mx-auto'>
                <h1 className='text-3xl lg:text-5xl font-bold'>Hello world</h1>
                <MainButton text='SHOW POPUP' onClick={handleClick} />
            </div>
        </main>
    );
}

export default App;

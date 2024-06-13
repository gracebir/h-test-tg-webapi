/** @format */
import { MainButton, useShowPopup } from "@vkruglikov/react-telegram-web-app";
function App() {
    const showPopup = useShowPopup();

    const handleClick = () =>
        showPopup({
            message: "Hello world",
        });

    return <MainButton text='SHOW POPUP' onClick={handleClick} />;
}

export default App;

/** @format */

import { useState } from "react";
import Game from "./page/Game";

/** @format */
function App() {
    const [isShowGame, setIsShowGame] = useState(false);

    return (
        <div className='min-h-screen flex items-center w-full bg-gray-800'>
            {!isShowGame ? (
                <div className='mx-auto'>
                    <h1 className='text-2xl text-gray-200 mb-4 lg:text-4xl text-center font-bold'>
                        Hello world{" "}
                    </h1>
                    <button
                        onClick={() => setIsShowGame(true)}
                        className='bg-gray-500 hover:bg-gray-400 text-white px-6 py-2 rounded-md'
                    >
                        show game
                    </button>
                </div>
            ) : (
                <Game />
            )}
        </div>
    );
}

export default App;

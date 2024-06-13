/** @format */

import React, { useEffect, useState } from "react";
import Cell from "../components/Cell";

const Game = () => {
    const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
    const [go, setGo] = useState("circle");
    const [winMessage, setWinMessage] = useState(null);
    const message = "Play the Game first!";

    const checkWin = () => {
        const winCombo = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        winCombo.forEach((arr) => {
            const winningCircle = arr.every((cell) => cells[cell] === "circle");
            if (winningCircle) {
                setWinMessage("Circle wins !!!");
                return;
            }
        });
        winCombo.forEach((arr) => {
            const winningCross = arr.every((cell) => cells[cell] === "cross");
            if (winningCross) {
                setWinMessage("Cross wins !!!");
                return;
            }
        });
    };

    const resetGame = () => {
        setCells(["", "", "", "", "", "", "", "", ""]);
        setWinMessage(null);
    };

    useEffect(() => {
        checkWin();
    }, [cells]);

    return (
        <div className='w-full h-screen flex items-center'>
            <div className='container'>
                <div className='max-w-xs grid grid-cols-3 h-[320px] border mx-auto flex-1 border-gray-950'>
                    {cells.map((cell, index) => (
                        <Cell
                            winMessage={winMessage}
                            cell={cell}
                            key={index}
                            cells={cells}
                            id={index}
                            setCells={setCells}
                            setGo={setGo}
                            go={go}
                        />
                    ))}
                </div>
                <p className='text-center text-gray-300 mt-4'>
                    {winMessage || message}
                </p>
                <div className='w-full flex justify-center'>
                    {winMessage && (
                        <button
                            onClick={resetGame}
                            className='bg-gray-200 rounded-md mt-4 px-4 py-2 text-gray-800'
                        >
                            reset game
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Game;

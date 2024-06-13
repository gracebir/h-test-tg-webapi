/** @format */

import React from "react";

const Cell = ({ id, cell, cells, setCells, go, setGo, winMessage }) => {
    const handleClick = (e) => {
        const taken =
            e.target.firstChild.classList.contains("cirle") ||
            e.target.firstChild.classList.contains("cross");
        if (!winMessage) {
            if (!taken) {
                if (go === "circle") {
                    e.target.firstChild.classList.add("circle");
                    onCellChange("circle");
                    setGo("cross");
                }
                if (go === "cross") {
                    e.target.firstChild.classList.add("cross");
                    onCellChange("cross");
                    setGo("circle");
                }
            }
        }
    };

    const onCellChange = (classList) => {
        const changeCells = cells.map((cell, index) => {
            if (index === id) {
                return classList;
            } else {
                return cell;
            }
        });
        setCells(changeCells);
    };
    return (
        <div
            onClick={handleClick}
            id={id}
            className='w-full flex items-center justify-center border border-gray-300'
        >
            <div className={cell}></div>
        </div>
    );
};

export default Cell;

import { useState } from "react";
import "../App.css";
import usetictactoe from "../hooks/Use-TicTacToe";




function TicTacToe() {


    const { board, handleclick, calculateWinner, resetgame, getStatusmessage } = usetictactoe();


    console.log(board);

    return (

        <div className="game">
            <div className="status">
                {getStatusmessage()}
                <button className="reset" onClick={resetgame}>Reset Game</button>
            </div>
            <div className="board">
                {board.map((b, index) => {
                    return (
                        <button className="cell"
                            key={index}
                            onClick={() => handleclick(index)}
                            disabled={b !== null}
                        >
                            {b}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default TicTacToe;
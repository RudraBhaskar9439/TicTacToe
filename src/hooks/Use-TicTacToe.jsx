import { useState } from "react";

const initialboard = () => Array(9).fill(null);

const usetictactoe = () => {
    const [board, setBoard] = useState(initialboard());
    const [isXNext, setIsXNext] = useState(true);

    const Winning_Patterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],

    ];


    const calculateWinner = (currentBoard) => {
        for (let i = 0; i < Winning_Patterns.length; i++) {
            const [a, b, c] = Winning_Patterns[i];
            if (
                currentBoard[a] &&
                currentBoard[a] === currentBoard[b] &&
                currentBoard[a] === currentBoard[c]
            ) {
                return currentBoard[a];
            }
        }
        return null;
    };


    const handleclick = (index) => {
        //check winner
        const winner = calculateWinner(board)


        if (winner || board[index]) return;

        const newBoard = [...board]
        newBoard[index] = isXNext ? "X" : "O"
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };


    const getStatusmessage = () => {
        const winner = calculateWinner(board);
        if (winner) return `Player ${winner} wins!`;
        if (!board.includes(null)) return `Its a draw!`;
        return `Player ${isXNext ? "X" : "O"} turn`;
    }


    const resetgame = () => {
        setBoard(initialboard());
        setIsXNext(true);
    }

    return { board, handleclick, calculateWinner, getStatusmessage, resetgame };


};

export default usetictactoe;

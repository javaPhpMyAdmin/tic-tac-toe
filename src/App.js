import { useEffect, useState } from 'react'
import SquareComponent from './SquareComponent'

const initialState = ['', '', '', '', '', '', '', '', '', '']

const App = () => {
    const [gameState, setGameState] = useState(initialState)
    const [isXChance, setIsXChance] = useState(false)

    const handleSquareClick = (index) => {
        let strs = Array.from(gameState)
        strs[index] = isXChance ? 'X' : '0'
        setGameState(strs)
        setIsXChance(!isXChance)
    }

    const checkWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        console.log('Class: App, Function: checkWinner ==', gameState[0], gameState[1], gameState[2]);
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
                return gameState[a];
            }
        }
        return null;
    }

    useEffect(() => {
        const winner = checkWinner()
        if (winner) {
            alert(`${winner} HAS WON THE GAMME :), CONGRATS!!!`)
            setGameState(initialState)
        }
    }, [gameState, isXChance])

    return (
        <div className='app-header'>
            <p className='heading-text'>TIC TAC TOE DEMO</p>
            <div className='row jc-center'>
                <SquareComponent
                    className='b-bottom-right'
                    state={gameState[0]}
                    onClick={() => handleSquareClick(0)}
                />
                <SquareComponent
                    className='b-bottom-right'
                    state={gameState[1]}
                    onClick={() => handleSquareClick(1)}
                />
                <SquareComponent
                    className='b-bottom'
                    state={gameState[2]}
                    onClick={() => handleSquareClick(2)}
                />
            </div>
            <div className='row jc-center'>
                <SquareComponent
                    className='b-bottom-right'
                    state={gameState[3]}
                    onClick={() => handleSquareClick(3)}
                />
                <SquareComponent
                    className='b-bottom-right'
                    state={gameState[4]}
                    onClick={() => handleSquareClick(4)}
                />
                <SquareComponent
                    className='b-bottom'
                    state={gameState[5]}
                    onClick={() => handleSquareClick(5)}
                />
            </div>
            <div className='row jc-center'>
                <SquareComponent
                    className='b-right'
                    state={gameState[6]}
                    onClick={() => handleSquareClick(6)}
                />
                <SquareComponent
                    className='b-right'
                    state={gameState[7]}
                    onClick={() => handleSquareClick(7)}
                />
                <SquareComponent
                    state={gameState[8]}
                    onClick={() => handleSquareClick(8)}
                />
            </div>
            <button className='clear-button' onClick={() => setGameState(initialState)}>RESET GAME</button>
        </div>
    )
}

export default App


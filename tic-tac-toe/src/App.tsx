import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';
import './App.css';

type Player = 'X' | 'O';
type Board = (Player | null)[];

function App() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | null>(null);
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');
  const [gameStarted, setGameStarted] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const checkWinner = (squares: Board): Player | null => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
      [0, 4, 8], [2, 4, 6] // diagonal
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setGameStarted(false);
  };

  const startGame = () => {
    if (player1Name && player2Name) {
      setGameStarted(true);
    }
  };

  if (!gameStarted) {
    return (
      <div className="start-screen">
        <h1>Tic Tac Toe</h1>
        <div className="player-inputs">
          <input
            type="text"
            placeholder="Nombre del Jugador 1 (X)"
            value={player1Name}
            onChange={(e) => setPlayer1Name(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nombre del Jugador 2 (O)"
            value={player2Name}
            onChange={(e) => setPlayer2Name(e.target.value)}
          />
          <button onClick={startGame} disabled={!player1Name || !player2Name}>
            Comenzar Juego
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="game">
      {winner && <ReactConfetti width={windowSize.width} height={windowSize.height} />}
      <div className="status">
        {winner 
          ? `¡${winner === 'X' ? player1Name : player2Name} ha ganado! 🎉`
          : board.every(square => square)
          ? "¡Empate! 😅"
          : `Turno de ${currentPlayer === 'X' ? player1Name : player2Name}`}
      </div>
      <div className="board">
        {board.map((square, index) => (
          <button
            key={index}
            className={`square ${winner ? 'game-over' : ''}`}
            onClick={() => handleClick(index)}
          >
            {square}
          </button>
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>
        Reiniciar Juego
      </button>
    </div>
  );
}

export default App; 
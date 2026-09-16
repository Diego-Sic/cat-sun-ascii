import { useState, useEffect } from 'react';
import './App.css';

// Exact cat style switching between expressions
const CAT_FRAME_1 = [
  " /\\_/\\ ",
  "(=^.^=)",
  "(\") (\")"
];

const CAT_FRAME_2 = [
  " /\\_/\\ ",
  "(=^o^=)",
  "(\") (\")"
];

const CAT_FRAME_3 = [
  " /\\_/\\ ",
  "(=^-^=)",
  "(\") (\")"
];

const POEM_LINE_1 = "Hoy el sol se escondió y no quiso salir,";
const POEM_LINE_2 = "te vio despertar y le dio miedo de morir.";
const POEM_DEDICATION = "Para Michy <3";

export function App() {
  const [frameIndex, setFrameIndex] = useState(0);
  const [displayedLine1, setDisplayedLine1] = useState('');
  const [displayedLine2, setDisplayedLine2] = useState('');
  const [displayedDedication, setDisplayedDedication] = useState('');
  const [showHearts, setShowHearts] = useState(false);

  // Animate ASCII Cat frames switching
  useEffect(() => {
    const catInterval = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % 3);
    }, 450);
    return () => clearInterval(catInterval);
  }, []);

  // Typewriter effect for the Spanish quote and dedication
  useEffect(() => {
    let idx1 = 0;
    let idx2 = 0;
    let idx3 = 0;

    const typeLine1 = () => {
      if (idx1 <= POEM_LINE_1.length) {
        setDisplayedLine1(POEM_LINE_1.substring(0, idx1));
        idx1++;
        setTimeout(typeLine1, 45);
      } else {
        setTimeout(typeLine2, 350);
      }
    };

    const typeLine2 = () => {
      if (idx2 <= POEM_LINE_2.length) {
        setDisplayedLine2(POEM_LINE_2.substring(0, idx2));
        idx2++;
        setTimeout(typeLine2, 45);
      } else {
        setTimeout(typeDedication, 400);
      }
    };

    const typeDedication = () => {
      if (idx3 <= POEM_DEDICATION.length) {
        setDisplayedDedication(POEM_DEDICATION.substring(0, idx3));
        idx3++;
        setTimeout(typeDedication, 50);
      } else {
        setShowHearts(true);
      }
    };

    const startTimeout = setTimeout(typeLine1, 300);

    return () => clearTimeout(startTimeout);
  }, []);

  const currentFrame =
    frameIndex === 0
      ? CAT_FRAME_1
      : frameIndex === 1
      ? CAT_FRAME_2
      : CAT_FRAME_3;

  return (
    <div className="terminal-screen">
      <div className="cat-wrapper">
        <pre className="cat-container">
          {currentFrame.join('\n')}
        </pre>
      </div>

      <div className="message-container">
        {displayedLine1 && (
          <div className="poem-line poem-line-1">
            {displayedLine1}
          </div>
        )}
        {displayedLine2 && (
          <div className="poem-line poem-line-2">
            {displayedLine2}
          </div>
        )}
        {displayedDedication && (
          <div className="poem-dedication">
            {displayedDedication} <span className="cursor">█</span>
          </div>
        )}
        {showHearts && (
          <div className="sparkles">
            <span>✨</span> <span>☀️</span> <span>💖</span> <span>🐱</span> <span>✨</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

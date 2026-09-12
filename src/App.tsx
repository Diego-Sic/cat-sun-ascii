import { useState, useEffect } from 'react';
import './App.css';

const LOTUS_ART = [
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⠟⠹⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⣷⣦⣄⣠⣿⠃⢠⣄⠈⢻⣆⣠⣴⡞⡆⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⢀⣀⣀⣿⠀⠈⢻⣇⢀⣾⢟⡄⣸⡿⠋⠀⡇⣇⣀⣀⠀⠀⠀⠀⠀",
  "⠀⣤⣤⣤⣀⣱⢻⠚⠻⣧⣀⠀⢹⡿⠃⠈⢻⣟⠀⢀⣤⠧⠓⣹⣟⣀⣤⣤⣤⡀",
  "⠀⠈⠻⣧⠉⠛⣽⠀⠀⠀⠙⣷⡿⠁⠀⠀⠀⢻⣶⠛⠁⠀⠀⡟⠟⠉⣵⡟⠁⠀",
  "⠀⠀⠀⠹⣧⡀⠏⡇⠀⠀⠀⣿⠁⠀⠀⠀⠀⠀⣿⡄⠀⠀⢠⢷⠀⣼⡟⠀⠀⠀",
  "⠀⠀⠀⠀⠙⣟⢼⡹⡄⠀⠀⣿⡄⠀⠀⠀⠀⢀⣿⡇⠀⢀⣞⣦⢾⠟⠀⠀⠀⠀",
  "⠀⠠⢶⣿⣛⠛⢒⣭⢻⣶⣤⣹⣿⣤⣀⣀⣠⣾⣟⣠⣔⡛⢫⣐⠛⢛⣻⣶⠆⠀",
  "⠀⠀⠀⠉⣻⡽⠛⠉⠁⠀⠉⢙⣿⠖⠒⠛⠻⣿⡋⠉⠁⠈⠉⠙⢿⣿⠉⠀⠀⠀",
  "⠀⠀⠀⠸⠿⠷⠒⣦⣤⣴⣶⢿⣿⡀⠀⠀⠀⣽⡿⢷⣦⠤⢤⡖⠶⠿⠧⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠛⢿⣦⣴⡾⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀",
  "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
];

const MESSAGES = [
  "El sol te vio y guardó su pincel, porque tus ojos pintan el paisaje mejor que él.",
  "Xime, (que no me llevó al concierto)"
];

export function App() {
  const [lotusLines, setLotusLines] = useState<string[]>([]);
  const [message1, setMessage1] = useState<string>('');
  const [message2, setMessage2] = useState<string>('');

  useEffect(() => {
    let lineIdx = 0;
    let charIdx = 0;
    const currentLotus: string[] = Array(LOTUS_ART.length).fill("");

    const animateLotus = () => {
      if (lineIdx >= LOTUS_ART.length) {
        setTimeout(animateMessage1, 300);
        return;
      }

      const fullLine = LOTUS_ART[lineIdx];
      if (charIdx <= fullLine.length) {
        currentLotus[lineIdx] = fullLine.substring(0, charIdx);
        setLotusLines([...currentLotus]);
        charIdx += 3;
        setTimeout(animateLotus, 10);
      } else {
        currentLotus[lineIdx] = fullLine;
        setLotusLines([...currentLotus]);
        lineIdx++;
        charIdx = 0;
        setTimeout(animateLotus, 20);
      }
    };

    const animateMessage1 = () => {
      let idx = 0;
      const target = MESSAGES[0];
      const type = () => {
        if (idx <= target.length) {
          setMessage1(target.substring(0, idx));
          idx++;
          setTimeout(type, 40);
        } else {
          setTimeout(animateMessage2, 400);
        }
      };
      type();
    };

    const animateMessage2 = () => {
      let idx = 0;
      const target = MESSAGES[1];
      const type = () => {
        if (idx <= target.length) {
          setMessage2(target.substring(0, idx));
          idx++;
          setTimeout(type, 40);
        }
      };
      type();
    };

    animateLotus();
  }, []);

  return (
    <div className="terminal-screen">
      <div className="lotus-wrapper">
        <div className="lotus-container">
          {lotusLines.map((line, idx) => (
            <div key={idx} className="lotus-line">{line}</div>
          ))}
        </div>
      </div>
      
      <div className="message-container">
        {message1 && <div className="poem-text">{message1}</div>}
        {message2 && (
          <div className="final-text">
            {message2} <span className="cursor">█</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

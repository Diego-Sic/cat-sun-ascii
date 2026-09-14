import { useState, useEffect } from 'react';
import './App.css';

const CAT_FRAME_1 = [
  " /\\     /\\",
  "{  `---'  }",
  "{  O   O  }",
  "~~>  V  <~~",
  " \\  \\|/  /",
  "  `-----'____",
  "  /     \\    \\_",
  " {       }\\  )_\\_   _",
  " |  \\_/  |/ /  \\_\\_/ )",
  "  \\__/  /(_/     \\__/",
  "    (__/"
];

const CAT_FRAME_2 = [
  " /\\     /\\",
  "{  `---'  }",
  "{  O   O  }",
  "~~>  V  <~~",
  " \\  \\|/  /",
  "  `-----'__",
  "  /     \\  `^_",
  " {       }\\ |\\_\\_   W",
  " |  \\_/  |/ /  \\_\\_( )",
  "  \\__/  /(_E     \\__/",
  "    (  /",
  "     MM"
];

export function App() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrameIndex((prev) => (prev === 0 ? 1 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const currentFrame = frameIndex === 0 ? CAT_FRAME_1 : CAT_FRAME_2;

  return (
    <div className="terminal-screen">
      <div className="lotus-wrapper">
        <pre className="lotus-container">
          {currentFrame.join('\n')}
        </pre>
      </div>

      <div className="message-container">
        <div className="final-text">
          thanks Valentina for the pictures
        </div>
      </div>
    </div>
  );
}

export default App;


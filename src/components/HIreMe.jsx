import React, { useState, useEffect } from 'react';

function Hire() {
  const [typewriterText, setTypewriterText] = useState('');
  const fullText = "I'm an artist who paints stories yet to be told.";

  useEffect(() => {
    let index = 0;
    let isTyping = true;
    let timer;

    const typeWriter = () => {
      if (isTyping) {
        if (index < fullText.length) {
          setTypewriterText(fullText.slice(0, index + 1));
          index++;
        } else {
          isTyping = false;
          timer = setTimeout(typeWriter, 2000); // Pause for 2 seconds when fully typed
          return;
        }
      } else {
        if (index > 0) {
          setTypewriterText(fullText.slice(0, index - 1));
          index--;
        } else {
          isTyping = true;
        }
      }

      timer = setTimeout(typeWriter, isTyping ? 100 : 50); // Type slower, erase faster
    };

    typeWriter();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center bg-transparent text-white font-idk">
      <div className="w-full max-w-4xl p-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center animate-pulse">
          About Me<span className="text-white">^_^</span>
        </h1>
        <div className="bg-transparent rounded-lg p-6 mb-8 border border-white shadow-lg shadow-green-400/20">
          <p className="text-xl md:text-2xl mb-4 h-20 md:h-10">{typewriterText}<span className="animate-blink">|</span></p>
          <p className="text-sm md:text-base">Ready to Draw Something That You Have Never Seen Before.</p>
        </div>
      </div>
    </div>
  );
}


export default Hire;
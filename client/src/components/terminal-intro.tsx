import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TerminalIntro() {
  const [text, setText] = useState("");
  const fullText = "> INITIATING SECURITY PROTOCOLS...\n> DECRYPTING PORTFOLIO DATA...\n> ACCESS GRANTED.";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="font-mono text-primary text-sm md:text-base leading-relaxed p-4 bg-black/40 border border-primary/20 rounded backdrop-blur-sm max-w-md">
      <div className="whitespace-pre-wrap">
        {text}
        <span className={showCursor ? "opacity-100" : "opacity-0"}>_</span>
      </div>
    </div>
  );
}

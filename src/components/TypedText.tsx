
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface TypedTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  className?: string;
}

const TypedText = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
  className = "",
}: TypedTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cursorBlink, setCursorBlink] = useState(true);

  // Track if component is mounted
  const isMounted = useRef(true);

  useEffect(() => {
    const cursorBlinkInterval = setInterval(() => {
      setCursorBlink(prev => !prev);
    }, 530);

    return () => {
      clearInterval(cursorBlinkInterval);
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isMounted.current) return;

      if (!isDeleting) {
        // Typing
        const currentText = texts[currentIndex];
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          // Delay before starting to delete
          setTimeout(() => {
            if (isMounted.current) setIsDeleting(true);
          }, delayBetweenTexts);
          return;
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, typingSpeed, deletingSpeed, delayBetweenTexts]);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <motion.span 
        className="font-mono text-purple-300 font-medium"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {displayText}
        <span className={`ml-1 ${cursorBlink ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
      </motion.span>
    </div>
  );
};

export default TypedText;

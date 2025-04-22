import { useState, useEffect, useMemo } from "react";

const TypewriterEffect = ({
  typingSpeed = 150,
  deletingSpeed = 100,
  pauseTime = 2000,
}) => {
  const phrases = useMemo(() => ["Apps", "Games"], []);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [delta, setDelta] = useState(typingSpeed);

  useEffect(() => {
    const tick = () => {
      const currentPhrase = phrases[phraseIndex];
      const shouldDelete = isDeleting;

      // If deleting, remove the last character
      // If typing, add the next character
      const updatedText = shouldDelete
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      setText(updatedText);

      // Set delta speed (typing is slower than deleting)
      setDelta(isDeleting ? deletingSpeed : typingSpeed);

      // When phrase is complete
      if (!isDeleting && updatedText === currentPhrase) {
        // Start deleting after pause
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
      // When deletion is complete
      else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        // Move to next phrase, cycle back if at end
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }
    };

    const timer = setTimeout(tick, delta);
    return () => clearTimeout(timer);
  }, [
    text,
    isDeleting,
    phraseIndex,
    delta,
    phrases,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return text;
};

export default TypewriterEffect;

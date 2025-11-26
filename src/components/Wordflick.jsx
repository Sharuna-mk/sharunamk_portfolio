import { useEffect, useState } from "react";

const Wordflick = () => {
  const words = [
   "Web Developer",
   "Frontend Developer"
  ];

  const [part, setPart] = useState("");
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);

  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      const currentWord = words[i];

      if (forwards) {
        if (offset >= currentWord.length) {
          setSkipCount(prev => prev + 1);
          if (skipCount + 1 === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        } else {
          setOffset(prev => prev + 1);
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prev) => (prev + 1) % words.length);
        } else {
          setOffset(prev => prev - 1);
        }
      }

      setPart(currentWord.substring(0, offset));
    }, speed);

    return () => clearInterval(interval);
  }, [offset, forwards, skipCount, i]);

  return (
    <div className="word text-white text-2xl shadow">
      {part}
    </div>
  );
};

export default Wordflick;

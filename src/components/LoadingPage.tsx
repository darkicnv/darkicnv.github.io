import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ASSET_BASE } from '../types';

const messages = [
  "Loading a little surprise... 💕",
  "Preparing hugs... 🫂",
  "Collecting hearts... ❤️",
  "Adding cute moments... 🌸🌻",
  "Almost there, Mou... ✨",
  "Welcome, Bachha ❤️"
];

interface LoadingPageProps {
  onComplete: () => void;
}

export default function LoadingPage({ onComplete }: LoadingPageProps) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 1;
        
        if (next % 20 === 0 && messageIndex < messages.length - 1) {
          setMessageIndex((prevIdx) => prevIdx + 1);
        }
        
        if (next >= 100) {
          clearInterval(interval);
          setIsCompleted(true);
          setTimeout(() => {
            onComplete();
          }, 1500);
          return 100;
        }
        
        return next;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [messageIndex, onComplete]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1 } }}
      className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10"
    >
      <motion.img 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        src={`${ASSET_BASE}assets/gifs/milk-and-mocha.gif`}
        alt="Milk and Mocha Loading"
        className="w-48 h-auto object-contain mb-8 rounded-2xl shadow-sm"
      />
      
      <motion.h1 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-bold text-pink-primary mb-4 font-cursive tracking-wide"
      >
        Hi, Mou! 🌻
      </motion.h1>
      
      <motion.p 
        key={messageIndex}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-gray-700 text-lg mb-8 font-medium h-8 text-center"
      >
        {isCompleted ? "Opening your little world... ❤️" : messages[messageIndex]}
      </motion.p>
      
      <div className="w-full max-w-xs bg-white rounded-full h-4 overflow-hidden border border-pink-200 shadow-inner p-1 relative">
        <motion.div 
          className="bg-pink-primary h-full rounded-full"
          style={{ width: `${progress}%` }}
          layout
        />
      </div>
      
      <p className="mt-4 text-pink-primary font-bold">{progress}%</p>
    </motion.div>
  );
}

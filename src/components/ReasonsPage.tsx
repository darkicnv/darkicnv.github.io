import PageLayout from './PageLayout';
import { ASSET_BASE } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

interface Props {
  onBack: () => void;
}

const reasons = [
  "Because your smile can brighten even my darkest days.",
  "Because your laugh is my favorite sound.",
  "Because you always make me feel understood.",
  "Because talking to you never feels like enough.",
  "Because you make ordinary days extraordinary.",
  "Because you're incredibly kind.",
  "Because your happiness matters to me.",
  "Because your voice calms my heart.",
  "Because you make me smile without trying.",
  "Because you inspire me to become better.",
  "Because you're beautiful inside and out.",
  "Because your eyes tell stories words can't.",
  "Because your little habits are adorable.",
  "Because you're my safe place.",
  "Because you're my favorite notification.",
  "Because I miss you even after talking to you.",
  "Because your hugs would fix everything.",
  "Because you're thoughtful.",
  "Because you believe in me.",
  "Because life feels brighter with you."
];

export default function ReasonsPage({ onBack }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prev => prev + 1);
    if (navigator.vibrate) {
      navigator.vibrate(70);
    }
  };

  const isFinished = currentIndex >= reasons.length;

  return (
    <PageLayout onBack={onBack} title="100 Reasons ❤️">
      <div className="flex flex-col items-center justify-center text-center w-full min-h-[60vh]">
        <img 
          src={`${ASSET_BASE}assets/stickers/bear-heart.png`} 
          alt="Bear" 
          className="w-40 h-40 object-contain mb-8"
        />
        <h1 className="text-3xl font-cursive font-bold text-pink-primary mb-8">
          100 Reasons Why You're Special ❤️
        </h1>

        <div className="glass-card p-8 rounded-3xl w-full mb-8 min-h-[160px] flex flex-col justify-center shadow-lg relative overflow-hidden">
          <AnimatePresence mode="wait">
            {!isFinished ? (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <h2 className="text-xl font-bold text-pink-500 mb-4 font-cursive tracking-wide">
                  Reason #{currentIndex + 1}
                </h2>
                <p className="text-gray-700 text-lg font-medium">
                  {reasons[currentIndex]}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="finished"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full"
              >
                <h2 className="text-xl font-bold text-pink-500 mb-4 font-cursive tracking-wide">
                  Reason #100 ❤️
                </h2>
                <p className="text-gray-700 text-lg font-medium leading-relaxed">
                  I ran out of numbers... but I'll never run out of reasons to love you. ♾️❤️
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!isFinished && (
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="bg-pink-primary text-white font-semibold py-4 px-8 rounded-full shadow-[0_4px_15px_rgba(255,94,153,0.4)] hover:shadow-[0_6px_20px_rgba(255,94,153,0.6)] transition-all flex items-center justify-center gap-2 w-full max-w-xs"
          >
            <span>❤️ Reveal Next Reason</span>
          </motion.button>
        )}
      </div>
    </PageLayout>
  );
}

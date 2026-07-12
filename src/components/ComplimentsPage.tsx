import PageLayout from './PageLayout';
import { ASSET_BASE } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface Props {
  onBack: () => void;
}

const compliments = [
  "You have the most beautiful smile that lights up any room.",
  "Your kindness is a balm to everyone around you.",
  "You have an incredible sense of humor that never fails to make me laugh.",
  "Your intelligence and wit always leave me in awe.",
  "You have a heart of gold, always caring for others.",
  "Your resilience and strength inspire me every single day.",
  "You are so wonderfully unique, there is no one else like you.",
  "Your passion for what you do is truly contagious.",
  "You have an amazing ability to make people feel comfortable and heard.",
  "Your creativity knows no bounds.",
  "You are effortlessly graceful in everything you do.",
  "You have an aura of positivity that draws people in.",
  "Your voice is incredibly soothing to listen to.",
  "You have impeccable taste and style.",
  "You are always so thoughtful and considerate of others' feelings.",
  "Your determination to achieve your goals is highly admirable.",
  "You are a true friend, loyal and supportive through thick and thin.",
  "Your enthusiasm for life is a joy to behold.",
  "You have a beautiful way of seeing the world.",
  "You are simply extraordinary, inside and out."
];

export default function ComplimentsPage({ onBack }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prev => prev + 1);
    if (navigator.vibrate) {
      navigator.vibrate(70);
    }
  };

  const isFinished = currentIndex >= compliments.length;

  return (
    <PageLayout onBack={onBack} title="Compliments ✨">
      <div className="flex flex-col items-center justify-center text-center w-full min-h-[60vh]">
        <img 
          src={`${ASSET_BASE}assets/stickers/hello.png`} 
          alt="Bear" 
          className="w-40 h-40 object-contain mb-8"
        />

        <h1 className="text-3xl font-cursive font-bold text-pink-primary mb-8">
          Words About You ✨
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
                  Compliment #{currentIndex + 1}
                </h2>
                <p className="text-gray-700 text-lg font-medium">
                  {compliments[currentIndex]}
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
                  And Many More... ✨
                </h2>
                <p className="text-gray-700 text-lg font-medium leading-relaxed">
                  I could go on forever, because you are truly that amazing. 💖
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
            <span>✨ Reveal Next Compliment</span>
          </motion.button>
        )}
      </div>
    </PageLayout>
  );
}
